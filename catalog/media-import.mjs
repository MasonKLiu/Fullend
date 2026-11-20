// 本批來源登錄；只收錄原始碼，不啟用技能或執行第三方安裝。
export const mediaProjects=[
 ['motion-design-skill','動態設計技能','LottieFiles/motion-design-skill','motion','動態時序、緩動、編排與介面動畫原則','MIT；以下載版本 LICENSE 為準','讀取技能文件；實際產出仍需要 Agent 與動畫工具'],
 ['motion-ai-kit','Motion AI Kit','motiondivision/ai-kit','motion','CSS 彈簧動畫、文件檢索與動態效能分析','包含免費與 Motion+ 付費功能；程式碼授權請依個別檔案核對','需依官方說明設定 MCP；部分功能需要 Motion+'],
 ['remotion-skills','Remotion 官方技能','remotion-dev/skills','video','以 React 建立影片的 Agent 技能與實作指南','技能與 Remotion 引擎授權分開核對；不假設全部免費商用','讀取 SKILL.md；影片產出需要 Remotion 執行環境'],
 ['hairline','Hairline 互動線條圖形','lucasmarkes/hairline','motion','從概念或 SVG 建立可互動的線條圖形','MIT；品牌範例的商標另屬原權利人','Agent 技能；瀏覽器預覽與 Node.js 檢查工具'],
 ['anatomy','Anatomy 等軸測圖形','wheresryan22/anatomy','three-d','以機械構造解釋系統的等軸測互動圖形','MIT；以下載版本 LICENSE 為準','Agent 技能；SVG、HTML 與選用 WebGL'],
 ['anatomy-reveal','Anatomy Reveal 產品拆解','annnguyentt/anatomy-reveal-skill','three-d','產品爆炸圖、互動拆解頁面與揭示動畫','以下載版本授權檔為準','Node.js、Chrome、FFmpeg、ImageMagick；尚未安裝或實測'],
 ['scenario-blender-skills','Scenario Blender 技能集合','scenario-labs/skills','three-d','Blender 建模、材質、動畫與 Agent 工作流程；替代原清單無法取得的 blender-agents','技能集合與 Blender 擴充套件授權不同；雲端生成另需帳號與付費額度','Blender 與相應技能／MCP；本次僅收錄，不啟動外部服務'],
 ['three-js','Three.js','mrdoob/three.js','three-d','網頁 3D 場景、材質、鏡頭與動畫引擎','MIT；範例素材可能另有授權','瀏覽器與 WebGL／WebGPU；依目標專案安裝套件'],
 ['theatre-js','Theatre.js','theatre-js/theatre','three-d','視覺化時間軸與場景關鍵影格編輯','各套件授權可能不同；使用 Studio 或散布前確認 LICENSE','Node.js 與瀏覽器；搭配 Three.js 或其他場景'],
 ['react-postprocessing','React 後製效果','pmndrs/react-postprocessing','three-d','React Three Fiber 場景的輝光、景深與後製效果','以下載版本 LICENSE 為準','React、Three.js、React Three Fiber 與相容套件版本'],
 ['three-quarks','Three.quarks 粒子特效','Alchemist0823/three.quarks','three-d','Three.js 粒子系統、軌跡與視覺特效','以下載版本 LICENSE 為準；外部編輯器或素材另計','Three.js 與瀏覽器；需要場景整合'],
 ['vfx-js','VFX-JS 網頁特效','fand/vfx-js','motion','為網頁元素加入故障、發光與扭曲效果','以下載版本 LICENSE 為準','瀏覽器與 GPU 圖形能力'],
 ['gsap','GSAP 動畫時間軸','greensock/GSAP','motion','網頁動畫、捲動互動與時間軸編排','採 GSAP 自訂授權；免費使用不等於 MIT，須依官方條款','瀏覽器或前端專案；不需要把全部外掛加入核心依賴'],
 ['hyperframes','HyperFrames HTML 影片','heygen-com/hyperframes','video','以 HTML 建立影片並提供 Agent 製作流程','核心與雲端／Pro 功能分開；依下載版本授權及服務條款','Node.js 與官方渲染工具鏈；雲端 AI 功能可能收費'],
 ['remotion','Remotion React 影片','remotion-dev/remotion','video','以 React 元件組合、預覽與渲染影片','Remotion 自訂授權；部分公司或使用情境需要付費授權','Node.js、React 與渲染環境；先核對授權適用條件'],
 ['manim','Manim 數學動畫','ManimCommunity/manim','video','數學方程式、圖表與教學解說動畫','MIT；依賴與字型另需核對','Python 與圖形／影音依賴；LaTeX 功能可能需要 TeX'],
 ['audiocraft','AudioCraft 音樂與音效','facebookresearch/audiocraft','audio','研究用音樂、音效生成與音訊模型工具','程式碼與模型權重授權不同；官方模型權重有非商業限制','Python、PyTorch、模型權重與適當 GPU；本次不下載模型'],
 ['librosa','librosa 音訊分析','librosa/librosa','audio','節拍、音高與音訊特徵分析，供動畫同步使用','以下載版本 LICENSE 為準','Python 與音訊解碼依賴'],
 ['whisperx','WhisperX 字幕對齊','m-bain/whisperX','audio','語音辨識、詞級時間對齊與選用說話者分離','程式碼、語音模型與說話者模型的授權需分別核對','Python、FFmpeg 與模型；部分功能需 Hugging Face 授權／權杖'],
 ['ffmpeg','FFmpeg 編碼與交付','FFmpeg/FFmpeg','rendering','影音轉碼、合成、濾鏡與輸出交付','LGPL／GPL 取決於建置選項與連結元件；散布前確認實際組態','需另外安裝可執行檔；原始碼收錄不等於已安裝 FFmpeg']
].map(([id,name,repo,category,description,licenseNote,requirements])=>({id,name,repo,url:`https://github.com/${repo}`,category,description,licenseNote,requirements,tags:[{motion:'動畫 緩動', 'three-d':'3D 特效',video:'影片 渲染',audio:'音訊 音樂 字幕',rendering:'轉碼 交付'}[category],repo.split('/')[1]],subpath:'',localPath:`repos/${repo.replace('/','--')}`,collection:'motion-media-2026-11',integrationLevel:'source-index-only',reviewedAt:'2026-11-19',recommendation:['motion-ai-kit','theatre-js','gsap','remotion','audiocraft','scenario-blender-skills','whisperx','ffmpeg'].includes(id)?'有條件收錄':'建議收錄',executionStatus:'尚未安裝與實測'}));
