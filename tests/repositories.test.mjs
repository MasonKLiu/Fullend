import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {createRepositoryManager,parseGitHub} from '../src/repositories.mjs';
test('GitHub URL validation rejects credentials, paths, alternate hosts',()=>{assert.equal(parseGitHub('https://github.com/example/demo.git').repo,'example/demo');for(const url of ['http://github.com/a/b','https://evil.test/a/b','https://github.com/a/b/tree/main','https://secret@github.com/a/b','https://github.com/a/b?x=1'])assert.throws(()=>parseGitHub(url))});
test('real Git clone, version checks, safe update, duplicate and dirty protection',async()=>{
 const temp=fs.mkdtempSync(path.join(os.tmpdir(),'fullend-repos-'));const upstream=path.join(temp,'upstream'),work=path.join(temp,'work'),root=path.join(temp,'library');let refreshes=0;
 const g=args=>execFileSync('git',args,{encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();
 try{g(['init','--bare',upstream]);g(['init','-b','main',work]);g(['-C',work,'config','user.name','Test']);g(['-C',work,'config','user.email','test@example.invalid']);fs.writeFileSync(path.join(work,'README.md'),'first');g(['-C',work,'add','.']);g(['-C',work,'commit','-m','first']);g(['-C',work,'remote','add','origin',upstream]);g(['-C',work,'push','-u','origin','main']);g(['-C',upstream,'symbolic-ref','HEAD','refs/heads/main']);
 const git=async args=>{if(args.includes('get-url'))return 'https://github.com/example/demo.git';return g(args.map(a=>a==='https://github.com/example/demo.git'?upstream:a))};
 const manager=createRepositoryManager({root,git,refresh:async()=>refreshes++});const p=await manager.add({url:'https://github.com/example/demo',category:'backend'});assert.equal(p.category,'backend');assert.equal((await manager.check(p.id)).updateStatus,'current');assert.equal(refreshes,1);await assert.rejects(manager.add({url:'https://github.com/example/demo'}),/已在/);
 fs.writeFileSync(path.join(work,'README.md'),'second');g(['-C',work,'add','.']);g(['-C',work,'commit','-m','second']);g(['-C',work,'push']);assert.equal((await manager.check(p.id)).updateStatus,'available');const updated=await manager.update(p.id);assert.equal(updated.updateStatus,'current');assert.notEqual(updated.previousCommit,updated.commit);assert.equal(fs.readFileSync(path.join(root,p.localPath,'README.md'),'utf8'),'second');
 fs.writeFileSync(path.join(root,p.localPath,'local.txt'),'keep');await assert.rejects(manager.update(p.id),/本地修改/);assert.equal(fs.readFileSync(path.join(root,p.localPath,'local.txt'),'utf8'),'keep');
 const job=manager.start('check',{id:p.id});assert.throws(()=>manager.start('check',{id:p.id}),/執行中/);while(manager.job(job.id).status==='running')await new Promise(r=>setTimeout(r,10));assert.equal(manager.job(job.id).status,'completed');
 }finally{const resolved=path.resolve(temp);if(!resolved.startsWith(path.resolve(os.tmpdir())+path.sep)||!path.basename(resolved).startsWith('fullend-repos-'))throw Error('Unsafe cleanup path');fs.rmSync(resolved,{recursive:true,force:true})}
});
