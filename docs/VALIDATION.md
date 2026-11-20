# 驗證紀錄

## 2026-11-20：動態設計與影音資源統合完成

- 新增 20 個影音能力項目，總計 40 個項目、37 個獨立上游 repo；所有來源路徑存在且有 commit 紀錄。
- 分類：動態設計 5、3D 與視覺特效 7、動畫與影片 4、聲音與音訊 3、渲染與交付 1。
- 重建後共有 49,012 個文件／摘要片段、40 份 Agent manifest；正體中文摘要標示為 `catalog-summary`。
- 12 項測試全部通過：包含新增來源的真實 Git commit 與 adapter 一致性、正體中文搜尋、RST／Texinfo 讀取，以及既有 MCP、REST、Git 更新保護等測試。
- 原列 blender-agents 來源無法取得，已改收錄 Scenario 官方 skills 集合並註明替代關係。
- 原始碼、文件與授權檔維持上游原文；Fullend 介面分類、摘要、執行需求及報告使用正體中文。
- 本次完成的是資源庫收錄與檢索統合，沒有安裝第三方執行環境、模型權重、Blender 擴充套件，也沒有進行影片／音訊產出實測。管理介面的視覺互動仍未經瀏覽器驗證。

日期：2026-11-19（Asia/Taipei）

本次新增版本管理與 GitHub 新增入口：9 項測試通過，新增真實 Git clone、上游變更偵測、fast-forward 更新、重複來源與本地修改保護、背景工作互斥測試。17 個上游已實際連線檢查，15 個相同、2 個不同（Astryx、Agent Browser）；此次只更新檢查結果，未更新這兩個 repo。UI 新入口通過 JavaScript 語法檢查，未完成瀏覽器互動驗證。

- 20 個能力項目、17 個去重後的 GitHub repo 均已下載，commit 記錄於 data/repos.lock.json。
- 文件索引：20,685 個片段、20 個項目；data/chunks.jsonl 可匯入外部 RAG。
- 7 項 Node 測試通過：來源完整性、帶 commit 的檢索、來源路徑限制、框架產生與覆寫保護、HTTP 路由與 Host/Origin 限制、MCP 初始化與工具呼叫、AI 協定請求／回覆格式。
- AI 格式使用本機 mock 測試，未發出付費請求；真實供應商與 CLI 生成尚待金鑰、安裝及登入。
- Fullend 後端可啟動，HTTP 回應由實際本機連線驗證。Codex 內建瀏覽器連線逾時，未完成視覺／互動 QA。
- adapters/ 是 Fullend 的 Agent 能力登錄建置產物，不是上游產品的編譯輸出。上游個別編譯、Docker 啟動、模型權重與 Git LFS 檔案下載未執行，詳見 docs/PROJECTS.md。
- 本機未偵測到 claude、codex、gemini、docker、pnpm、uv 命令。Fullend 本身不依賴這些工具即可執行專案目錄、檢索、MCP 與 REST。
