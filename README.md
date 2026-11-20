# Fullend · Agent Design Library

本機設計與影音專案庫：40 個能力項目、37 個上游 repo，提供正體中文管理介面、MCP stdio 工具、REST API、文件索引與多供應商 AI 連接。

新加入的 20 個影音資源依「動態設計」「3D 與視覺特效」「動畫與影片」「聲音與音訊」「渲染與交付」分類。完整收錄判斷、來源替代關係、授權條件及執行需求見 [影音收錄說明](docs/MOTION-MEDIA.md)。

這些項目已納入來源管理與文件檢索；尚未安裝第三方執行環境、模型權重或渲染服務。Fullend 摘要與介面使用正體中文，上游檔案保持原文。搜尋結果的 `[Fullend 正體中文摘要]` 是本地整理內容，並非上游原文或真實來源檔案路徑；`kind: catalog-summary` 可供外部 RAG 辨識。

## 啟動

需要 Node.js 22 以上與 Git。Fullend 本身只使用 Node 內建模組，不必執行 npm install。

```powershell
cd D:\MasonAI\Fullend
npm start
```

開啟 http://127.0.0.1:4310。也可以執行 `./start.ps1`。服務只監聽本機；不要直接轉發到公網。

## 工作流程

1. 專案庫：搜尋、分類及查看每個專案的本地路徑、commit、授權提示。
2. 知識檢索：搜尋 README / SKILL / 文件，取得片段、原始路徑及 commit 來源連結。
3. AI 引擎：選擇 API / CLI、讀取模型清單或手動輸入 ID、設定推理強度與輸出上限。
4. 建立框架：選擇參考專案，產生可直接開啟的 HTML、DESIGN.md、AGENTS.md 與 fullend.context.json。
5. Agent 連接：將 MCP 設定加入客戶端，或從 REST API 呼叫相同工具。

起始框架不會自動安裝所選的第三方元件。Agent 應依 context 中的本地來源、README 與授權，在目標產品中完成整合。

## 目錄

| 路徑 | 內容 |
| --- | --- |
| catalog/projects.json | 去重後的能力登錄與正體中文說明 |
| catalog/providers.json | AI 供應商及可擴充連接設定 |
| repos/ | 37 個上游 Git checkout，保留各自的授權檔案 |
| data/repos.lock.json | 實際下載 commit 與狀態 |
| data/inventory.json | 從上游 package.json 讀出的執行環境及 scripts |
| data/chunks.jsonl | 可匯入外部 RAG 的文件片段 |
| docs/PROJECTS.md | 各專案版本、授權檔與建置命令清單 |
| src/ | REST、MCP、AI 轉接與索引程式 |
| public/ | 管理介面 |
| integrations/ | MCP JSON 與 Codex TOML 設定範例 |
| generated/ | 新建的框架 |

## 來源與更新

管理介面的「專案庫」現在可使用：

- **檢查全部版本**：比對每個 repo 的本地 commit 與 GitHub 預設分支 HEAD；顯示最後檢查時間。相同 repo 的技能共用版本狀態。
- **專案詳情 → 檢查最新版本**：顯示本地／上游 commit、分支、package.json 版本與精確 tag。這不是正式 Release 檢查；根目錄套件版本可能是 monorepo 的 0.0.0。
- **更新原始碼與索引**：重新檢查來源，只接受沒有本地修改的預設分支 fast-forward；不使用 reset 或強制覆寫。更新後重建 inventory、RAG 索引與 adapters。外部向量資料庫仍需重新匯入 JSONL。
- **新增 GitHub 專案**：輸入公開 GitHub repository 首頁網址，可選名稱、分類、描述；下載後自動登錄與建立索引。拒絕重複 repo 或已存在的目錄。新增的是原始碼資源，不會執行第三方依賴安裝或建置腳本。

操作採背景工作，一次執行一個。可以繼續瀏覽或重新整理頁面，服務必須保持執行；重啟服務不會恢復未完成工作。若下載中斷，可能保留 `.incoming-*` 暫存目錄供檢查，不會覆寫原有資料。若來源已更新但索引失敗，介面會明確回報，按更新可重新產生。

新增 API：`POST /api/repositories/check`、`check-all`、`update`、`add`。單項檢查／更新 body 為 `{"id":"專案ID"}`；新增為 `{"url":"https://github.com/owner/repo","category":"backend"}`。回傳 job ID 後，以 `GET /api/jobs/ID` 查詢結果。檢查時間是快照，不能保證之後上游沒有新 commit。

```powershell
npm run sync           # 下載尚未存在的 repo；既有 checkout 不更新
npm run sync -- --update # 明確更新 upstream；只允許 fast-forward
npm run doctor         # 重建來源、授權及建置資訊
npm run build          # 為所有已登錄項目建立 Agent manifests 及工具 schema
npm run index          # 重建本地文件索引
npm test               # 本機測試，不呼叫付費 AI
npm run scaffold -- my-project frontend-design shadcn-ui lucide
```

下載採 shallow clone；Git LFS 大型檔案不自動下載。不要將 repos 的第三方原始碼混入 Fullend 本身授權。Sync 不會自動執行第三方安裝腳本。不同 repo 包含技能、前端 monorepo、Python 工具或 Docker 平台，沒有共同的「build」命令。各上游完整應用尚未逐一安裝、編譯或啟動；現有 `buildStatus: not-run` 如實表示此狀態。

## MCP

從任意工作目錄可執行：

```json
{"mcpServers":{"fullend":{"command":"node","args":["D:/MasonAI/Fullend/src/mcp.mjs"]}}}
```

提供 `list_projects`、`get_project`、`search_library`、`list_source_files`、`read_source`、`create_starter`、`library_status`。使用 stdio JSON-RPC，stdout 只輸出協定內容。此服務是本地 library MCP，並未代理啟動 Magic、Figma、Stitch 或 Penpot 的遠端 MCP。

## REST / RAG

```text
GET  /api/projects
GET  /api/status
GET  /api/search?q=accessibility&project=frontend-design
GET  /api/source?id=frontend-design&path=SKILL.md
GET  /api/export
GET  /api/tools
POST /api/tools/call  {"name":"search_library","arguments":{"query":"contrast"}}
POST /api/index       {}
POST /api/scaffold    {"name":"demo","projectIds":["lucide"]}
GET  /api/providers
GET  /api/models?provider=ollama
POST /api/generate    {"providerId":"ollama","model":"YOUR_MODEL","prompt":"Hello","effort":"default"}
```

POST 請使用 `Content-Type: application/json`。瀏覽器請求只允許同 origin；無驗證的本機端點應僅供受信任程式使用。

RAG 匯出每行包括 `id, project, path, commit, sourceUrl, offset, text`。可自行 embedding 後寫入 Qdrant、Chroma、pgvector 等服務；本機搜尋目前為關鍵字排序，不是向量或語意搜尋。第三方文件內容視為不受信任資料，不能取代 Agent 的高優先級指令。

## AI 連接

複製 `.env.example` 為 `.env`，只在本機填入所需金鑰，重新啟動服務。金鑰不傳到前端、不寫入 provider 設定或版本控制。

- OpenAI / ChatGPT API：OpenAI chat completions。
- Claude API：Anthropic Messages。
- Gemini API：Google generateContent。
- Ollama、LM Studio、自訂 API：OpenAI-compatible endpoint，可在介面修改 URL 與金鑰環境變數名稱。
- Claude Code、Codex、Gemini CLI：需先安裝、登入，並設定 `FULLEND_ENABLE_CLI=1`；預設關閉。CLI 由後端 subprocess 呼叫，沿用本機 CLI 權限與設定。

API 模型清單來自所選供應商 `/models`，也可手動填入。不同模型支援的強度參數不同；選 `default` 不傳送強度參數。高／中／低不支援時，供應商可能回報錯誤，不會偷偷替換模型。網頁版 ChatGPT／Claude 的登入不是 API 金鑰，也不提供未經支援的瀏覽器登入轉接。

擴充新供應商：在 `catalog/providers.json` 新增唯一 ID，選擇 `openai`、`anthropic`、`gemini` 協定及 endpoint。新的協定可在 `src/ai.mjs` 加入 adapter。這是可擴充介面，並非已整合所有 AI 廠商、所有多模態功能。

目前 API 轉接已用本機 mock 驗證請求與回覆格式；尚未使用真實金鑰或登入執行端對端生成。API、模型下載、託管及部分授權可能收費，不能將原貼文的「全部 $0」當作保證。

參考：[Anthropic effort](https://platform.claude.com/docs/en/build-with-claude/effort)、[Gemini thinking](https://ai.google.dev/gemini-api/docs/thinking)、[OpenAI chat completions](https://developers.openai.com/api/reference/resources/chat/subresources/completions/methods/create)。各專案原始來源見 `catalog/projects.json`。
