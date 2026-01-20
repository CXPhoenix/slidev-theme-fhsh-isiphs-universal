# 📝 更新日誌 (Changelog)

本檔案記錄專案的所有重要變更。

本專案遵循 [Semantic Versioning](https://semver.org/lang/zh-TW/) 語意化版本規範。

---

## [1.1.0] - 2026-01-20

### ✨ 新增功能 (Added)

#### 🎨 章節版面圖片自訂
- ✨ 新增 `sectionImg` 參數
  - 支援從單頁 frontmatter 自訂章節圖片
  - 支援從全域設定 (`$slidev.configs`) 設定預設圖片
- ✨ 新增 `sectionImgStyleClass` 參數
  - 支援自訂章節圖片的 Tailwind CSS 類別
  - 可調整圖片位置、大小與樣式

## [1.0.1] - 2024-09-30

### ♻️ 重構 (Refactored)

#### 🎨 背景圖片載入機制優化
- ✨ 使用 Vite glob import 動態載入背景圖片資源，取代原本的靜態路徑陣列
- 🔒 新增 courseLevel 邊界檢查（範圍 0-2），避免索引超出範圍錯誤
- 🐛 修正 bgImg computed 使用方式，正確解析並套用資源 URL
- 🎨 統一程式碼風格，將雙引號改為單引號

#### 🔧 技術改進
- **檔案**：`shared/useTheme.js`
  - 使用 `import.meta.glob()` 進行資源動態載入
  - 提升效能與可維護性
- **檔案**：`layouts/base.vue`
  - 修正 computed 使用方式
  - 改善資源 URL 解析邏輯

---

## [1.0.0] - 2024-09-30

### 🎉 首次正式發布

這是 **Slidev Theme FHSH & ISIP.hs Universal** 的首次正式發布，整合了原本獨立的兩個 Slidev 主題包（`slidev-theme-fhsh-aisp` 與 `slidev-theme-isip.hs`）成為單一通用主題系統。

---

### 🎯 新增功能 (Added)

#### 🎨 雙主題整合系統
- 🎭 整合 FHSH AiSP 與 ISIP.hs 兩個主題為單一系統
- 🎭 新增 `themeName` frontmatter 參數控制主題風格
  - 支援 `fhsh` 主題（適用於 FHSH AiSP）
  - 支援 `isip.hs` 主題（適用於 ISIP.hs）
- 🎭 根據 `themeName` 參數動態載入對應圖片資源
  - Logo 圖片（logo.png）
  - 章節圖片（section-img.png）
  - 口號圖片（slogon.svg）

#### 🎚️ 課程等級色彩系統
- 🎨 新增 `courseLevel` frontmatter 參數控制課程等級
  - Level 0（初級）：清新綠色調背景
  - Level 1（中級）：專業藍色調背景
  - Level 2（高級）：活力橘色調背景
- 🎨 新增 `useTheme.js` 工具模組控制主題配置
  - `$themeBg()` - 根據 courseLevel 返回背景圖片
  - `$themeImg()` - 根據 themeName 動態載入圖片資源
  - `$customThemeConfig()` - 讀取 frontmatter 配置

#### 📐 版面配置系統
- 🏠 新增 **cover** - 封面版面
  - 支援主題標誌與口號圖片的動態載入
  - 根據 themeName 參數套用對應圖片配置
- 📝 新增 **default** - 標準內容版面
  - 支援標題、段落、清單、程式碼等內容
  - 整合主題背景圖片與頁碼
- 🏷️ 新增 **section** - 章節分隔版面
  - 大標題置中顯示
  - 支援主題圖片背景
- 🖼️ 新增 **image** - 圖片展示版面
  - 全背景圖片顯示
- 🎮 新增 **quiz** - 互動測驗版面
  - 整合 MultiChoice 組件
  - 支援答案驗證
  - 支援視覺反饋
  - 支援線上/離線模式
- 🎯 新增 **base** - 基礎版面
  - 統一頁碼顯示邏輯
  - 支援 `skipPageNumberLayouts` 設定

#### 🧩 自訂組件
- 📑 新增 **ToC（目錄組件）**
  - 自動產生簡報目錄
  - 支援自訂版面篩選（`layoutsIncludeInToc`）
  - 支援顯示範圍設定（`tocShowRange`）
  - 自動排除封面頁與設定 `skipInToc` 的投影片
- 🎯 新增 **MultiChoice（互動測驗組件）**
  - 支援多選題測驗
  - 答案驗證功能
  - 支援三種視覺反饋（綠色/紅色/黃色邊框）
  - WebSocket 連線支援（開發中）
  - 離線測驗模式與線上模式

#### 💻 程式碼功能增強
- ✏️ 新增整合 **Monaco Editor** 支援
  - 配置 `setup/monaco.ts` 設定檔
  - 自訂行號顯示與編輯器尺寸
  - 支援 `{monaco}` 程式碼區塊標記
- 🎨 新增整合 **Shiki** 語法突顯
  - 使用 vitesse-light 與 vitesse-dark 主題
  - 支援多種程式語言語法突顯
  - 設定檔 `setup/shiki.ts`

#### 🔤 字體與樣式系統
- 🔤 新增整合 **edukai** 自訂字體（edukai-fixed.woff2）
- 🔤 新增多層次字體堆疊
  - 無襯線字體：edukai, Noto Sans TC
  - 等寬字體：Source Code Pro, Noto Sans Mono
  - 襯線字體：Zen Antique, Noto Serif Traditional Chinese
- 🔤 新增統一 CSS 樣式系統（`styles/layout.css`）
  - 標題樣式（h1/h2/h3）
  - 段落與清單樣式
  - 表格與程式碼樣式
  - 自訂元件樣式與動畫（漸入、漸出、縮放）

#### 🎨 資源與圖片
- 🎨 新增三個課程等級背景圖片
  - `lv1-bg.svg`（綠色 - 初級）
  - `lv2-bg.svg`（藍色 - 中級）
  - `lv3-bg.svg`（橘色 - 高級）
- 🎨 新增雙主題 FHSH 主題圖片資源（`assets/fhsh/`）
  - logo.png
  - section-img.png
  - slogon.svg
- 🎨 新增雙主題 ISIP.hs 主題圖片資源（`assets/isip.hs/`）
  - logo.png
  - section-img.png
  - slogon.svg
- 🎨 新增自訂字體檔案（`assets/fonts/`）
  - edukai-fixed.woff2

---

### ⚙️ 技術規格 (Technical)

#### 📦 套件配置
- 📦 套件名稱：`@cxphoenix/slidev-theme-fhsh-isiphs-universal`
- 📦 版本號：1.0.0
- 📦 Node.js 版本要求：>= 18.0.0
- 📦 套件管理器：pnpm@10.5.2
- 📦 Slidev 版本：^52.1.0

#### 🔧 開發工具鏈
- 🔧 TypeScript 型別支援（@slidev/types）
- 🔧 Vue Composition API 整合（@vueuse/core）
- 🔧 Prettier 程式碼格式化工具
- 🔧 Playwright 測試框架（截圖與匯出）

#### 📜 開發指令
- 📜 `pnpm run dev` - 啟動開發伺服器
- 📜 `pnpm run build` - 建置靜態檔案
- 📜 `pnpm run export` - 匯出 PDF
- 📜 `pnpm run screenshot` - 產生 PNG 截圖

#### 🎨 預設配置
- 🎨 色彩模式：light
- 🎨 寬高比：16/9
- 🎨 標題範本：`%s | FHSH AiSP X ISIP.hs`
- 🎨 預設版面：default
- 🎨 MDC 支援：已啟用
- 🎨 Favicon：FHSH AiSP Logo

---

### 📚 文件與說明 (Documentation)

- 📄 新增完整 README.md
  - 專案介紹與設計理念
  - 安裝與設定說明
  - 主題配置說明（themeName、courseLevel）
  - 版面配置使用說明
  - 組件使用範例（ToC、MultiChoice）
  - 程式碼功能說明
  - 開發與貢獻指南
- 📄 新增 CHANGELOG.md（本檔案）
- 📄 新增 example.md 範例簡報
  - 展示所有版面配置
  - 測驗功能範例
  - 組件使用範例
  - 程式碼範例（Monaco editor）
- 📄 新增 CLAUDE.md 開發指南
  - 開發指令說明
  - 專案架構說明
  - 撰寫指南（繁體中文、emoji 使用）
  - Commit message 規範
- 📄 新增 Usage.md（使用說明與配置範例）
- 📄 新增 GEMINI.md（AI 輔助開發指南）

---

### 🎯 主題特色說明

#### 從雙主題包整合為通用版本

本版本整合了原本兩個獨立的 Slidev 主題整合為單一通用主題：

**整合前**：
- `@cxphoenix/slidev-theme-fhsh-aisp` - FHSH AiSP 專用
- `@cxphoenix/slidev-theme-isip.hs` - ISIP.hs 專用
- 需要個別安裝與維護兩個套件

**整合後（v1.0.0）**：
- `@cxphoenix/slidev-theme-fhsh-isiphs-universal` - 通用主題
- 透過 `themeName` 參數彈性切換主題風格
- 統一的配置與管理方式

#### 主要設計理念與特點
- 🔄 **彈性切換**：透過 themeName 參數輕鬆切換課程視覺風格
- 🎨 **等級區分**：透過 courseLevel 統一背景配色與視覺分級
- 🧩 **組件強化**：ToC 與 MultiChoice 組件提供豐富互動與功能
- 💻 **開發友善**：整合 Monaco editor 統一程式碼展示與編輯

---

### 🚀 未來規劃 (Roadmap)

後續開發規劃與待實作功能：

- 🎯 MultiChoice 組件增強（WebSocket 模式）
- 📐 更多版面配置選項
- 🎨 主題色彩自訂系統
- 🧩 更多互動組件（計時器、OTI）
- 🌙 深色模式支援
- 🔤 更多字體選項

---

### 💡 從舊主題遷移指引

#### 升級到通用主題

如果您正在使用 `@cxphoenix/slidev-theme-fhsh-aisp` 或 `@cxphoenix/slidev-theme-isip.hs`，可以透過以下步驟升級：

1. **移除舊主題**
   ```bash
   pnpm remove @cxphoenix/slidev-theme-fhsh-aisp
   # 或
   pnpm remove @cxphoenix/slidev-theme-isip.hs
   ```

2. **安裝通用主題**
   ```bash
   pnpm add @cxphoenix/slidev-theme-fhsh-isiphs-universal
   ```

3. **更新 frontmatter 設定**
   ```yaml
   ---
   # 舊版
   theme: '@cxphoenix/slidev-theme-fhsh-aisp'

   # 新版
   theme: '@cxphoenix/slidev-theme-fhsh-isiphs-universal'
   themeName: 'fhsh'      # 或 'isip.hs'
   courseLevel: 0         # 選擇 0/1/2
   ---
   ```

4. **測試與驗證**
   - 檢查所有版面配置與動畫是否正常
   - 檢查圖片資源是否正確載入
   - 測試互動測驗功能（如有使用）

---

### 🙏 致謝 (Acknowledgments)

感謝所有對本主題做出貢獻的人：

- 🏫 **復興高中 AI 資安學程** - 提供需求與測試環境
- 🏫 **復興高中資訊安全實務課程** - 提供需求與測試環境
- 🎬 **Slidev 團隊** - 提供優秀的簡報框架
- 💻 **開發貢獻者** - 提供技術支援與回饋

---

## 版本格式說明

版本號格式：`[主版本.次版本.修訂版]`

- **主版本**：不相容的 API 變更
- **次版本**：向下相容的新功能
- **修訂版**：向下相容的問題修正

類別：
- 🎯 **Added（新增）**：新功能
- ♻️ **Changed（變更）**：現有功能的變更
- 🗑️ **Deprecated（棄用）**：即將移除的功能
- ❌ **Removed（移除）**：已移除的功能
- 🐛 **Fixed（修正）**：錯誤修正
- 🔒 **Security（安全性）**：安全性相關修正

---

[1.0.1]: https://github.com/CXPhoenix/slidev-theme-fhsh-isiphs-universal/releases/tag/v1.0.1
[1.0.0]: https://github.com/CXPhoenix/slidev-theme-fhsh-isiphs-universal/releases/tag/v1.0.0