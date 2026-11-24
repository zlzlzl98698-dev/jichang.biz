# Cloudflare Pages 静态部署说明

本项目采用 Astro 纯静态输出 (`dist/`)，非常适合部署在 Cloudflare Pages。

### 1. 构建设置
- **构建命令 (Build command)**: `npm run build`
- **构建输出目录 (Build output directory)**: `dist`
- **Node.js 版本**: `>=18.17.0` (推荐 20 或 22)
  可在 Cloudflare Pages 环境变量中设置：`NODE_VERSION = 22`

### 2. 域名与规范化
- 生产域名: `https://jichang.biz`
- 尾部斜杠: Astro 配置已启用 `trailingSlash: 'always'`，与 Cloudflare 静态路由原生匹配。
- 预览部署 (Preview Deployments): Cloudflare 默认分配预览域名（如 `*.pages.dev`）。如需在预览环境下禁止搜索引擎收录，可在 Cloudflare Response Headers 中为非生产环境注入 `X-Robots-Tag: noindex, nofollow`。

### 3. 构建无外部依赖
- 生产构建完全基于本地经审核的结构化数据与静态集合，不依赖任何第三方运行时 API Key 即可顺利完成打包与 Pagefind 索引生成。
