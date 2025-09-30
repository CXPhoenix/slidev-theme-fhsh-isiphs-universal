# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Slidev theme package for FHSH ISIP.hs Universal (復興高中 資訊安全課程通用版). Key commands:

- `pnpm run dev` - Start development server with example.md for live preview
- `pnpm run build` - Build the example presentation to static files
- `pnpm run export` - Export example.md to PDF
- `pnpm run screenshot` - Generate PNG screenshots of example.md

Package manager: **pnpm** (required, specified in packageManager field)

## Architecture

This is a Slidev theme package that provides custom layouts and styling for presentations:

### Core Structure
- `layouts/` - Vue components for different slide layouts (cover, default, section, image, quiz, base)
- `styles/` - CSS styling (layout.css) imported via index.ts
- `setup/shiki.ts` - Code syntax highlighting configuration using vitesse themes
- `setup/monaco.ts` - Monaco editor configuration for code editing features
- `components/` - Custom Vue components (MultiChoice, ToC)
- `assets/` - Theme assets (logos, backgrounds, images, custom fonts)

### Theme Configuration
- Package exports as `@cxphoenix/slidev-theme-fhsh-isiphs-universal`
- Default fonts: edukai, Fira Mono, Noto Sans TC (sans), Zen Antique, Noto Serif Traditional Chinese (serif), Source Code Pro, Noto Sans Mono (mono)
- Aspect ratio: 16/9
- Title template: "%s | FHSH AiSP X ISIP.hs"
- Color schema: light
- Favicon: "https://security-program.fhsh.taipei/New AiSP LOGO.png"

### Layout System
- `base.vue` - Base layout with page numbering (skipped on certain layouts)
- `cover.vue` - Cover/title slide layout
- `default.vue` - Standard content layout
- `section.vue` - Section divider layout
- `image.vue` - Image background layout
- `quiz.vue` - Interactive quiz layout with MultiChoice component support

### Development Workflow
- Use `example.md` as the test presentation file
- All layouts inherit from base.vue which provides page numbering
- Styling is centralized in styles/layout.css
- Code highlighting uses Shiki with vitesse-light/dark themes
- Monaco editor configured for enhanced code editing with custom line numbers and sizing

## Key Files to Understand
- `package.json` - Contains theme defaults and scripts
- `layouts/base.vue` - Core layout logic and page numbering
- `styles/layout.css` - Main styling (check for modifications)
- `example.md` - Test presentation file for development

No linting, testing, or TypeScript configuration is present in this project.

## Writing Guidelines

- 撰寫 README 或是 USAGE 時，全部都使用台灣慣用繁體中文用語書寫，專業名詞使用英文書寫，並且要多增加 emoji 以增添整體豐富度。
- 任何的文件撰寫都不要使用中國大陸用語。

## Commit Message Guidelines

- 撰寫 git commit message 時，需要使用台灣慣用繁體中文用語書寫，要加入 emoji 增加 commit message 的豐富。
- Commit message 的標題結構通常為 `{emoji} {this stage work}({file or module}): {change abstract}`
  - 範例：`✨ feat(base): 增加頁碼`
- Commit message 內容需要以列點方式呈現，每一點最前方都要加入對應的 emoji
  - 詳細說明要清楚描述變更的內容、原因和影響
- git commit message 只要直接在 stdout 呈現，不用幫我執行 git commit 動作
- 任何的文件撰寫都不要使用中國大陸用語。