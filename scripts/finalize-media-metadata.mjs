import fs from 'node:fs';
import path from 'node:path';
import {ROOT,readJSON,saveJSON} from '../src/library.mjs';
const projects=readJSON('catalog/projects.json',[]);
const notes={
 'theatre-js':'@theatre/core 採 Apache-2.0；@theatre/studio 採 AGPL-3.0-only；整合及散布須依所用套件授權。',
 'remotion-skills':'下載版本未在根目錄提供 LICENSE；先作本地文件參考，重用或散布前確認授權。Remotion 引擎另有商業授權條件。',
 'motion-ai-kit':'下載版本未在根目錄提供 LICENSE；先作本地參考。文件搜尋與部分工具免費，MotionScore 等功能需要 Motion+。',
 'anatomy-reveal':'MIT；另有 THIRD_PARTY_NOTICES.md，使用或散布前一併閱讀。',
 'audiocraft':'程式碼採 MIT；官方模型權重採 CC BY-NC 4.0（非商業），不可把程式碼授權套用到模型權重。',
 'scenario-blender-skills':'官方技能集合採 MIT；另行使用 Blender 擴充套件時為 GPL-3.0-or-later，Scenario 雲端生成需帳號與付費額度。'
};
for(const p of projects.filter(p=>p.collection==='motion-media-2026-11')){
 if(notes[p.id])p.licenseNote=notes[p.id];
 if(['remotion-skills','motion-ai-kit'].includes(p.id)){p.recommendation='有條件收錄';p.reuseStatus='授權未明確，先作本地參考'}
 const base=path.join(ROOT,'repos',p.repo.replace('/','--'));
 if(fs.existsSync(base))p.licenseFiles=fs.readdirSync(base).filter(name=>/^(licen[sc]e|copying|notice|third_party_notices)/i.test(name)&&fs.statSync(path.join(base,name)).isFile()).map(name=>`${p.localPath}/${name}`);
 p.sourceEvidence=p.id==='hairline'?'https://hairline.lucasmarkes.com/skills':p.id==='anatomy'?'https://skills.wheresryan.sh/anatomy':p.id==='anatomy-reveal'?'https://www.typingmind.com/skills/annnguyentt-anatomy-reveal':p.url;
}
saveJSON('catalog/projects.json',projects);
let report=fs.readFileSync(path.join(ROOT,'docs/MOTION-MEDIA.md'),'utf8').split('\n## 下載版本授權補充')[0];
report+='\n## 下載版本授權補充\n\n'+Object.entries(notes).map(([id,note])=>`- ${id}：${note}`).join('\n')+'\n\n每個項目的確切 commit 見 data/repos.lock.json；授權檔路徑也已加入 catalog/projects.json。\n';
fs.writeFileSync(path.join(ROOT,'docs/MOTION-MEDIA.md'),report);
