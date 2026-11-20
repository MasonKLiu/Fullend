import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {ROOT,projects,search,readSource,readJSON,buildIndex,scaffold} from './library.mjs';
import {providers,configure,models,generate} from './ai.mjs';
import {toolDefinitions,callTool} from './tools.mjs';
import {repositories} from './repositories.mjs';
if(fs.existsSync(path.join(ROOT,'.env')))process.loadEnvFile(path.join(ROOT,'.env'));
export function createServer(){return http.createServer(async(req,res)=>{const host=req.headers.host;if(!/^((127\.0\.0\.1|localhost)(:\d+)?)$/.test(host||'')){res.writeHead(403).end();return}const origin=req.headers.origin;if(origin&&!['http://'+host].includes(origin)){res.writeHead(403).end();return}res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Content-Security-Policy',"default-src 'self'; style-src 'self'; script-src 'self'; frame-ancestors 'none'; base-uri 'none'");
const send=(data,status=200)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8'});res.end(JSON.stringify(data))};
try{const url=new URL(req.url,'http://'+host),route=url.pathname;let body={};if(req.method==='POST'){if(!req.headers['content-type']?.startsWith('application/json'))return send({error:'JSON required'},415);let text='';for await(const part of req){text+=part;if(text.length>200000)return send({error:'Request too large'},413)}body=JSON.parse(text||'{}')}
if(req.method==='GET'&&route==='/api/status')return send({projects:projects().length,downloaded:projects().filter(p=>p.available).length,index:readJSON('data/index-meta.json',null)});
if(req.method==='GET'&&route==='/api/projects')return send(projects());
if(req.method==='GET'&&route==='/api/repositories/active')return send(repositories.active());
if(req.method==='GET'&&route.startsWith('/api/jobs/')){const job=repositories.job(route.split('/').pop());return send(job||{error:'Job not found'},job?200:404)}
if(req.method==='POST'&&route.startsWith('/api/repositories/'))return send(repositories.start(route.split('/').pop(),body),202);
if(req.method==='GET'&&route==='/api/search')return send(search(url.searchParams.get('q')||'',{project:url.searchParams.get('project')||undefined}));
if(req.method==='GET'&&route==='/api/source')return send(readSource(url.searchParams.get('id'),url.searchParams.get('path')));
if(req.method==='GET'&&route==='/api/providers')return send(providers());
if(req.method==='GET'&&route==='/api/models')return send(await models(url.searchParams.get('provider')));
if(req.method==='GET'&&route==='/api/tools')return send(toolDefinitions);
if(req.method==='GET'&&route==='/api/export'){const file=path.join(ROOT,'data/chunks.jsonl');if(!fs.existsSync(file))return send({error:'Build index first'},404);res.writeHead(200,{'Content-Type':'application/x-ndjson','Content-Disposition':'attachment; filename="fullend-chunks.jsonl"'});fs.createReadStream(file).pipe(res);return}
if(req.method==='POST'&&route==='/api/index')return send(buildIndex());
if(req.method==='POST'&&route==='/api/scaffold')return send(scaffold(body));
if(req.method==='POST'&&route==='/api/providers')return send(configure(body.id,body));
if(req.method==='POST'&&route==='/api/generate')return send(await generate(body));
if(req.method==='POST'&&route==='/api/tools/call')return send(callTool(body.name,body.arguments));
if(req.method==='GET'&&['/','/app.js','/repositories.js','/style.css'].includes(route)){const file=route==='/'?'index.html':route.slice(1);res.writeHead(200,{'Content-Type':file.endsWith('.css')?'text/css':file.endsWith('.js')?'text/javascript':'text/html; charset=utf-8'});res.end(fs.readFileSync(path.join(ROOT,'public',file)));return}
send({error:'Not found'},404);
}catch(e){send({error:e.message},400)}})}
if(process.argv[1]&&path.resolve(process.argv[1])===path.join(ROOT,'src','server.mjs')){const port=Number(process.env.PORT||4310);createServer().listen(port,'127.0.0.1',()=>console.log(`Fullend running at http://127.0.0.1:${port}`))}
