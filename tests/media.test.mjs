import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {ROOT,projects,readJSON,readSource,search,sourceFiles,isDocument} from '../src/library.mjs';
import {mediaProjects} from '../catalog/media-import.mjs';

test('影音來源已下載，版本與 Agent 登錄一致',()=>{
 const ps=projects();assert.equal(mediaProjects.length,20);
 for(const seed of mediaProjects){const p=ps.find(x=>x.id===seed.id);assert.ok(p?.available,p?.id);assert.equal(p.integrationLevel,'source-index-only');const commit=execFileSync('git',['-C',path.join(ROOT,p.localPath),'rev-parse','HEAD'],{encoding:'utf8'}).trim();assert.equal(commit,p.source.commit,p.id);const adapter=readJSON(`adapters/${p.id}/manifest.json`,null);assert.equal(adapter?.source.commit,commit,p.id);assert.ok(p.requirements&&p.licenseNote&&p.recommendation)}
 assert.equal(new Set(ps.map(p=>p.id)).size,ps.length);
});
test('正體中文摘要可檢索，標示為 Fullend 摘要而非上游原文',()=>{
 for(const [id,query] of [['whisperx','字幕'],['audiocraft','音樂'],['ffmpeg','轉碼']]){
 const results=search(query,{project:id});assert.ok(results.some(x=>x.kind==='catalog-summary'&&x.text.includes(query)),id);
 }
 assert.match(projects().find(p=>p.id==='audiocraft').licenseNote,/非商業/);
 assert.match(projects().find(p=>p.id==='remotion-skills').reuseStatus,/授權未明確/);
});
test('支援 Python 與 FFmpeg 的 RST、Texinfo 文件',()=>{
 assert.ok(isDocument('doc/api.rst'));assert.ok(isDocument('doc/ffmpeg.texi'));assert.equal(isDocument('media/file.mp4'),false);
 const files=sourceFiles('ffmpeg');assert.ok(files.some(f=>f.endsWith('.texi')));assert.ok(readSource('ffmpeg','doc/ffmpeg.texi').text.length>100);
 const pythonDocs=sourceFiles('librosa');assert.ok(pythonDocs.some(f=>f.endsWith('.rst')));
});
