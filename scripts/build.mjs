import fs from 'node:fs';
import path from 'node:path';
import {ROOT,projects,readJSON} from '../src/library.mjs';
import {toolDefinitions} from '../src/tools.mjs';
const output=path.join(ROOT,'adapters');fs.mkdirSync(output,{recursive:true});
const inventory=readJSON('data/inventory.json',[]);
for(const p of projects()){
 if(!p.available)throw Error('Source missing: '+p.id);
 const dir=path.join(output,p.id);fs.mkdirSync(dir,{recursive:true});
 const manifest={schemaVersion:1,...p,absoluteSourcePath:path.join(ROOT,p.localPath),runtime:inventory.find(i=>i.id===p.id),tools:{inspect:{name:'get_project',arguments:{id:p.id}},files:{name:'list_source_files',arguments:{id:p.id}},search:{name:'search_library',arguments:{project:p.id,query:'YOUR_QUERY'}},read:{name:'read_source',arguments:{id:p.id,path:'RELATIVE_FILE'}}}};
 fs.writeFileSync(path.join(dir,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');
}
fs.writeFileSync(path.join(output,'tools.schema.json'),JSON.stringify(toolDefinitions,null,2));
fs.writeFileSync(path.join(output,'registry.json'),JSON.stringify({schemaVersion:1,generatedAt:new Date().toISOString(),projects:projects().map(p=>({id:p.id,manifest:`${p.id}/manifest.json`}))},null,2));
console.log(`Built ${projects().length} Agent adapters under adapters/. Upstream app builds are separate.`);
