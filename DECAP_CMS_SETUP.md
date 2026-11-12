# 博客网页管理后台（Decap CMS）

后台地址：<https://cuijier.github.io/admin/>

博客继续使用 Hexo + NexT + GitHub Pages。Decap CMS 用来编辑 `source/_posts/` 中的 Markdown 文章，图片上传到 `source/images/uploads/`。每次保存都会提交到 GitHub 的 `master` 分支，并由现有 GitHub Actions 自动构建、部署。

## 首次启用：连接 Decap Turbo

GitHub Pages 是静态托管，不能把 GitHub 写入 Token 安全地放在浏览器端。因此这里使用 Decap Turbo 提供的托管 GitHub 登录和 API 代理。

1. 打开 <https://turbo.decapcms.org/>，使用有该仓库管理权限的 GitHub 账号登录。
2. 在 Decap Turbo 中连接 GitHub，并安装/授权 Decap Turbo GitHub App 访问仓库 `cuijier/cuijier.github.io`。
3. 创建一个 Site：
   - Git provider：GitHub
   - Repository：`cuijier/cuijier.github.io`
   - Branch：`master`
   - Config path：`source/admin/config.yml`（注意：这是 Hexo 源目录中的路径，不是生成后的网站路径）
   - Admin interface URL：`https://cuijier.github.io/admin/`
4. 创建完成后，在 Site 的 Overview 页面复制 Site ID（UUID）。
5. 修改仓库文件 `source/admin/config.yml`，把 `backend.turbo_site_id` 的 `REPLACE_WITH_DECAP_TURBO_SITE_ID` 替换为刚复制的真实 Site ID。
6. 将这次修改提交到 `master`，等待 GitHub Actions 部署完成。
7. 打开 <https://cuijier.github.io/admin/>，点击 Login with Turbo 并授权登录。

## 当前编辑能力

- 文章集合：`source/_posts/`，支持新增、编辑、删除文章。
- 可编辑字段：标题、发布日期、固定链接、分类、标签、是否发布、Markdown 正文。
- 图片上传目录：`source/images/uploads/`；文章内引用路径为 `/images/uploads/文件名`。
- 修改旧文章时请保留原固定链接，避免旧文章 URL 变化。
- 关闭“发布文章”会在 Front Matter 中写入 `published: false`。

## 重要说明

- `source/admin/config.yml` 必须原样发布为网站的 `/admin/config.yml`。Hexo 默认会把 YAML 数据文件转换成 JSON，因此项目的 `_config.yml` 已设置 `skip_render: admin/**/*`。
- Turbo 的 Config path 必须填写仓库内的 `source/admin/config.yml`，否则 Turbo 无法读取集合配置。
- 不要把 GitHub Personal Access Token、OAuth Client Secret 或其他密钥写入前端文件。
- 如果后台提示 Unknown site_id，请核对配置文件中的 Site ID 是否与 Turbo Overview 页面完全一致；如果提示无法访问仓库，请检查 GitHub App 是否安装在正确的账号且勾选了该仓库。

官方文档：
- <https://decapcms.org/docs/turbo-getting-started/>
- <https://decapcms.org/docs/turbo-connecting-a-site/>
- <https://decapcms.org/docs/turbo-troubleshooting-faq/>
