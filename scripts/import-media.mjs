import fs from 'node:fs';
import {mediaProjects} from '../catalog/media-import.mjs';
import {ROOT,readJSON,saveJSON} from '../src/library.mjs';
import path from 'node:path';
const projects=readJSON('catalog/projects.json',[]);
for(const p of mediaProjects){const existing=projects.find(x=>x.id===p.id||x.repo.toLowerCase()===p.repo.toLowerCase());if(existing){Object.assign(existing,p,{id:existing.id,localPath:existing.localPath})}else projects.push(p)}
saveJSON('catalog/projects.json',projects);
fs.mkdirSync(path.join(ROOT,'docs'),{recursive:true});
fs.writeFileSync(path.join(ROOT,'docs/MOTION-MEDIA.md'),'# 動態設計與影音資源收錄\n\n評估日期：2026-11-19。此批收錄為原始碼、文件索引與 Agent 登錄；沒有安裝模型、執行技能或啟動付費服務。\n\n原列 scenario-labs/blender-agents 無法取得，改採 Scenario 官方 scenario-labs/skills，並非宣稱兩者是同一個 repo。Blender 擴充套件參考 https://github.com/scenario-labs/blender-plugin ，本批沒有另外安裝。\n\n介面、分類、摘要及本文件使用正體中文；上游原始檔維持原文以保留版本與授權可追溯性。\n\n'+mediaProjects.map(p=>`## ${p.name}\n\n- 收錄判斷：${p.recommendation}\n- 官方來源：${p.url}\n- 用途：${p.description}\n- 授權／費用：${p.licenseNote}\n- 執行條件：${p.requirements}\n- 狀態：${p.executionStatus}\n`).join('\n')+'\n## 建議工作流程\n\n- 網頁動態：動態設計技能 → GSAP／Motion → VFX-JS。\n- 3D 展示：Three.js → Theatre.js → React 後製效果／Three.quarks。\n- 影片製作：Remotion 技能＋Remotion，或 HyperFrames → FFmpeg。\n- 教學解說：Anatomy／Hairline／Manim → FFmpeg。\n- 節拍與字幕：librosa／WhisperX → Remotion 或 HyperFrames → FFmpeg。\n- AudioCraft：先核對權重授權與運算環境，再決定是否用於目標產品。\n');
console.log(`已登錄 ${mediaProjects.length} 個影音項目，總計 ${projects.length} 個項目；請執行 sync、doctor、index、build。`);
await import('./finalize-media-metadata.mjs');
