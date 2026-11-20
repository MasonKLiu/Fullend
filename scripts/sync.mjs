import {readFileSync,mkdirSync,existsSync,writeFileSync} from 'node:fs';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=fileURLToPath(new URL('..',import.meta.url));
const exec=promisify(execFile), projects=JSON.parse(readFileSync(path.join(root,'catalog/projects.json'),'utf8'));
mkdirSync(path.join(root,'repos'),{recursive:true});mkdirSync(path.join(root,'data'),{recursive:true});
let previous={};try{previous=JSON.parse(readFileSync(path.join(root,'data/repos.lock.json'),'utf8'))}catch{}
const results={...previous};const queue=[...new Set(projects.map(p=>p.repo))];
async function worker(){while(queue.length){const repo=queue.shift(),dir=path.join(root,'repos',repo.replace('/','--'));try{
 if(!existsSync(dir))await exec('git',['clone','--depth','1',`https://github.com/${repo}.git`,dir],{timeout:600000,maxBuffer:4e6,env:{...process.env,GIT_TERMINAL_PROMPT:'0',GIT_LFS_SKIP_SMUDGE:'1'}});
 else if(process.argv.includes('--update')){await exec('git',['-C',dir,'fetch','--depth','1','origin'],{timeout:180000});await exec('git',['-C',dir,'merge','--ff-only','FETCH_HEAD'],{timeout:180000});}
 const {stdout}=await exec('git',['-C',dir,'rev-parse','HEAD']);const commit=stdout.trim();results[repo]={...results[repo],status:'downloaded',commit,downloadedAt:new Date().toISOString(),...(results[repo]?.commit&&results[repo].commit!==commit?{updateStatus:'unchecked',latestCommit:null}:{} )};console.log(`OK ${repo} ${commit}`);
 }catch(e){results[repo]={status:'error',error:e.message.slice(0,1000),checkedAt:new Date().toISOString()};console.error(`FAILED ${repo}: ${e.message.slice(0,250)}`);}
 writeFileSync(path.join(root,'data/repos.lock.json'),JSON.stringify(results,null,2));
}}
await Promise.all(Array.from({length:3},worker));
if(Object.values(results).some(x=>x.status==='error'))process.exitCode=1;
