# Apache 静态部署备选说明

如果选择在传统 Apache / OpenLiteSpeed 服务器上托管 `dist/` 产物：

### 1. 静态根目录
将 `dist/` 下的全部静态文件部署到网站 DocumentRoot（例如 `/var/www/jichang.biz/html/`）。

### 2. 伪静态与规则文件
`public/.htaccess` 文件已随构建复制到 `dist/.htaccess`，包含：
1. 强制 301 重定向到 HTTPS；
2. 保持 URL 尾部斜杠 (`trailingSlash: 'always'`)，避免产生重复页面；
3. 将 404 错误指向自定义生成的 `/404.html`；
4. 设置安全防护响应头（`nosniff`, `SAMEORIGIN`, `strict-origin-when-cross-origin`）。

### 3. Apache 模块需求
确保服务器已启用：
- `mod_rewrite`
- `mod_headers`
