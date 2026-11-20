import {repositories} from '../src/repositories.mjs';
const job=repositories.start('check-all');
while(job.status==='running')await new Promise(resolve=>setTimeout(resolve,500));
console.log(JSON.stringify(job,null,2));
if(job.status==='failed'||job.result?.some(x=>x.error))process.exitCode=1;
