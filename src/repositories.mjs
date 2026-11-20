import fs from 'node:fs';
import path from 'node:path';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {randomUUID} from 'node:crypto';
import {ROOT} from './library.mjs';
const exec=promisify(execFile);
export function parseGitHub(value){
 const url=new URL(value);
 if(url.protocol!=='https:'||url.hostname!=='github.com'||url.port||url.username||url.password||url.search||url.hash)throw Error('請填入 https://github.com/擁有者/專案 網址');
 const match=url.pathname.match(/^\/([A-Za-z0-9][A-Za-z0-9-]*)\/([A-Za-z0-9_.-]+?)(?:\.git)?\/?$/);
 if(!match||['.','..'].includes(match[2]))throw Error('請使用 repository 首頁網址，不含 tree 或 blob 路徑');
 const repo=match[1]+'/'+match[2];return {repo,url:'https://github.com/'+repo};
}
export function createRepositoryManager({root=ROOT,git=async args=>(await exec('git',args,{timeout:600000,maxBuffer:4e6,windowsHide:true,env:{...process.env,GIT_TERMINAL_PROMPT:'0',GIT_LFS_SKIP_SMUDGE:'1'}})).stdout.trim(),refresh=async()=>{for(const file of ['doctor','index','build'])await exec(process.execPath,[path.join(root,'scripts',file+'.mjs')],{cwd:root,timeout:600000,maxBuffer:4e6,windowsHide:true})}}={}){
 const read=(f,fallback)=>{try{return JSON.parse(fs.readFileSync(path.join(root,f),'utf8'))}catch(e){if(e.code==='ENOENT')return fallback;throw e}};
 const write=(f,data)=>{const target=path.join(root,f);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target+'.tmp',JSON.stringify(data,null,2));fs.renameSync(target+'.tmp',target)};
 const catalog=()=>read('catalog/projects.json',[]);
 const find=id=>{const p=catalog().find(x=>x.id===id);if(!p)throw Error('找不到專案');return p};
 const dir=p=>path.join(root,'repos',p.repo.replace('/','--'));
 const patch=(repo,data)=>{const locks=read('data/repos.lock.json',{});locks[repo]={...locks[repo],...data};write('data/repos.lock.json',locks);return locks[repo]};
 async function local(p){const folder=dir(p);if(fs.lstatSync(folder).isSymbolicLink())throw Error('不接受符號連結專案目錄');const origin=await git(['-C',folder,'remote','get-url','origin']);if(parseGitHub(origin).repo.toLowerCase()!==p.repo.toLowerCase())throw Error('origin 與登錄來源不同，請先確認');const commit=await git(['-C',folder,'rev-parse','HEAD']);const dirty=!!await git(['-C',folder,'status','--porcelain']);let version=null,tag=null;try{version=JSON.parse(fs.readFileSync(path.join(folder,'package.json'),'utf8')).version||null}catch{}try{tag=await git(['-C',folder,'describe','--tags','--exact-match','HEAD'])}catch{}return {commit,dirty,version,tag};}
 async function inspect(p){const current=await local(p);const remote=await git(['ls-remote','--symref',p.url+'.git','HEAD']);const latestCommit=remote.match(/^([a-f0-9]{40,64})\s+HEAD$/m)?.[1];const branch=remote.match(/^ref: refs\/heads\/(.+)\s+HEAD$/m)?.[1];if(!latestCommit||!branch)throw Error('無法取得上游預設分支');return patch(p.repo,{...current,status:'downloaded',latestCommit,branch,updateStatus:current.commit===latestCommit?'current':'available',checkedAt:new Date().toISOString(),checkError:null});}
 async function check(id){const p=find(id);try{return await inspect(p)}catch(e){patch(p.repo,{updateStatus:'error',checkError:e.message,checkedAt:new Date().toISOString()});throw e}}
 async function update(id){const p=find(id),before=await inspect(p);if(before.dirty)throw Error('有本地修改或未追蹤檔案，請先提交或自行備份後再更新');const folder=dir(p);const active=await git(['-C',folder,'branch','--show-current']);if(active!==before.branch)throw Error('目前分支不是上游預設分支，停止更新');
 if(before.commit!==before.latestCommit){await git(['-C',folder,'fetch','--deepen=10000','--no-tags','origin',before.branch]);const target=await git(['-C',folder,'rev-parse','FETCH_HEAD']);await git(['-C',folder,'merge-base','--is-ancestor',before.commit,target]);await git(['-C',folder,'merge','--ff-only',target]);patch(p.repo,{...await local(p),previousCommit:before.commit,latestCommit:target,updateStatus:'current',updatedAt:new Date().toISOString(),status:'downloaded'});}
 patch(p.repo,{integrationStatus:'refreshing'});try{await refresh();patch(p.repo,{integrationStatus:'ready',integrationError:null})}catch(e){patch(p.repo,{integrationStatus:'error',integrationError:e.message});throw Error('原始碼已同步，但索引／接入檔更新失敗，可再次按更新重試：'+e.message)}return read('data/repos.lock.json',{})[p.repo];}
 async function add(input){const {repo,url}=parseGitHub(input.url);if(catalog().some(p=>p.repo.toLowerCase()===repo.toLowerCase()))throw Error('此 GitHub 專案已在資源庫內');const id=repo.toLowerCase().replace('/','--');if(catalog().some(p=>p.id===id))throw Error('專案 ID 已存在');const category=input.category||'application';if(!['skills','specification','components','styling','mcp','application','canvas','assets','media','automation','backend','motion','three-d','video','audio','rendering'].includes(category))throw Error('不支援的分類');const name=(input.name||repo.split('/')[1]).trim(),description=(input.description||'從 GitHub 加入的專案').trim();if(!name||name.length>100||description.length>1000)throw Error('名稱或描述長度不正確');const p={id,name,repo,url,category,description,tags:[],subpath:'',localPath:'repos/'+repo.replace('/','--'),licenseNote:'請閱讀下載版本的 LICENSE；外部 API 費用另計'};
 const folder=dir(p);if(fs.existsSync(folder))throw Error('本地資料夾已存在，請先確認內容，系統不會覆寫');fs.mkdirSync(path.dirname(folder),{recursive:true});const staging=folder+'.incoming-'+randomUUID();await git(['clone','--depth','1',url+'.git',staging]);fs.renameSync(staging,folder);write('catalog/projects.json',[...catalog(),p]);patch(repo,{status:'downloaded',...await local(p),updateStatus:'unchecked'});await update(id);return p;}
 const jobs=new Map();let active=null;
 function start(action,input={}){if(active)throw Error('另一個專案工作執行中，請等待完成');if(!['check','check-all','update','add'].includes(action))throw Error('Unknown action');const job={id:randomUUID(),action,status:'running',startedAt:new Date().toISOString()};jobs.set(job.id,job);active=job.id;setImmediate(async()=>{try{if(action==='check-all'){job.result=[];for(const p of [...new Map(catalog().map(p=>[p.repo,p])).values()]){job.progress=p.repo;try{job.result.push({repo:p.repo,...await check(p.id)})}catch(e){job.result.push({repo:p.repo,error:e.message})}}}else job.result=await ({check:()=>check(input.id),update:()=>update(input.id),add:()=>add(input)}[action])();job.status='completed'}catch(e){job.status='failed';job.error=e.message}finally{job.finishedAt=new Date().toISOString();active=null;if(jobs.size>100)jobs.delete(jobs.keys().next().value)}});return job;}
 return {start,job:id=>jobs.get(id),active:()=>active?jobs.get(active):null,check,update,add};
}
export const repositories=createRepositoryManager();
