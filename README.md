# Evensong / 晚祷 — 非官方 GitHub Pages 镜像

**本 GitHub Pages 站点只是为了让中国用户更方便地访问和体验游戏，并提供简体中文界面与字幕。我们不是原作者，也不代表原作者。** GitHub Pages 在不同地区的可用性与加载速度可能不同。

原作 **Evensong** 由 **Kevin Ngo（[@kevin_t_ngo](https://x.com/kevin_t_ngo)）**发布。请支持原作者：

- 原站：https://evensong-phi.vercel.app/
- 原作者发布帖：https://x.com/kevin_t_ngo/status/2120238844754923874
- 原作者 GitHub：https://github.com/kevintngo （截至检查时，其公开仓库中没有 Evensong）
- 本镜像：https://LouisYang841.github.io/evensong-mirror/

## 中文支持

默认使用简体中文，可在标题或暂停画面顶部切换 English。语言选择会保存；切换语言会重新加载并重新开始游戏。也可以使用 `?lang=zh-CN` 或 `?lang=en`。已翻译菜单、设置、操作提示、触屏按钮、首领名称和剧情字幕。保留原作标志与英文配音，中文字体使用设备自带字体。

## 来源与署名

截至 2026-11-14，经 GitHub 仓库、代码与网页搜索，未找到与原站对应、可确认由原作者发布的公开 GitHub 仓库。因此本仓库是根据原站公开提供的浏览器文件整理的**非官方访问镜像**，不是原始开发仓库，也不包含原作开发历史、Blender 工具或完整开发环境。

本镜像的改动包括简体中文翻译、语言切换、来源说明和 GitHub Pages 配置。原作游戏代码、美术、模型、音乐及配音的权利归各自权利人所有；本仓库不主张这些内容的原创权，也不为原作内容另行授予许可。未在原站找到项目级开源许可证；可访问的文件不代表已获开源许可。已有第三方版权注释应保留。如原作者提供正式仓库或提出移除要求，将据此更新或移除镜像。

## 部署与本地运行

这是普通 HTML / JavaScript / Three.js 静态应用，无需 Node 构建或后端服务。GitHub Pages 使用 `main` 分支根目录，`.nojekyll` 禁用 Jekyll 处理。保留相对路径，因此支持 `/evensong-mirror/` 这样的项目子目录。派生部署请同步修改本 README、`src/mirror.js` 中的仓库链接和 `index.html` 中的分享地址。

本地可用任意静态 HTTP 服务打开仓库根目录。正常游戏无需服务器接口；原作的开发截图、录制与性能测试模式依赖专用开发服务，不属于本 Pages 镜像支持范围。

---

## English

This unofficial GitHub Pages mirror is simply intended to make the game easier for Chinese users to access, with a Simplified Chinese UI and subtitles. **We are not the original creators and are not affiliated with them.** Availability and speed vary by region.

Original game: **Evensong**, published by **Kevin Ngo (@kevin_t_ngo)**. See the original site and creator links above. No matching official public GitHub repository was found in the searches conducted on November 14, 2026. This repository packages browser-served files from the original deployment, plus Chinese localization and mirror attribution; it is not the original development repository.

Choose English or 简体中文 on the title/pause screen. Changing language reloads and restarts the game. Original voices and logo are retained. No project-wide open-source license was located; original content remains subject to its respective rights holders, and this mirror grants no new license over it.
