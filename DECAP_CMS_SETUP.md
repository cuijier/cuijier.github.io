# 博客网页管理后台（Decap CMS）

后台地址：<https://cuijier.github.io/admin/>

当前博客继续使用 Hexo + NexT + GitHub Pages。Decap CMS 负责编辑 `source/_posts/` 中的 Markdown 文章，图片上传到 `source/images/uploads/`。保存后的提交会触发现有 GitHub Actions 自动构建和部署。

## 首次启用：连接 Decap Turbo

GitHub Pages 是静态托管，不能安全地在浏览器里保存 GitHub 写入 Token。后台使用 Decap Turbo 的托管授权（免费方案支持 1 个站点和 1 个席位）。

1. 打开 <https://turbo.decapcms.org/>，使用 GitHub 账号注册/登录。
2. 在 Decap Turbo 中创建一个 Site，并连接 GitHub 仓库 `cuijier/cuijier.github.io`。
3. 授权 Decap Turbo 访问该仓库。仓库分支选择 `master`。
4. 在 Site 的 Overview 页面，将 Admin URL 添加为：
   `https://cuijier.github.io/admin/`
5. 在 Overview 页面复制该 Site 的 UUID / Site ID。
6. 将 Site ID 填入仓库文件 `source/admin/config.yml` 的 `backend.turbo_site_id`，替换 `REPLACE_WITH_DECAP_TURBO_SITE_ID`。
7. 提交该配置变更并等待 GitHub Actions 部署完成。
8. 访问 <https://cuijier.github.io/admin/>，点击 Login with Turbo，即可管理文章。

官方连接说明：<https://decapcms.org/docs/turbo-connecting-a-site/>
官方免费方案说明：<https://decapcms.org/turbo/>

## 编辑规则

- 文章集合对应 `source/_posts/`。
- 新文章默认发布；关闭“发布文章”会在 Front Matter 写入 `published: false`。
- 修改已有文章时，建议保留原来的固定链接，避免旧链接失效。
- 图片会提交到 `source/images/uploads/`，文章中使用 `/images/uploads/文件名` 引用。
- 每次保存/发布会向 GitHub `master` 提交变更，触发 Actions 构建与 GitHub Pages 部署。

## 安全

不要把 GitHub Personal Access Token、OAuth Client Secret 或其他密钥写入 `source/admin/config.yml` 或任何前端文件。认证由 Decap Turbo 托管处理。
