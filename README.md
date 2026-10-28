# dsh-claude-ui

把 DeepSeek Harness 的界面换成接近 Claude Desktop 的样子。

- **配色**：暖灰底色配陶土橙（`#D97757`），浅色 / 深色跟随系统
- **布局**：衬线体正文、圆角用户气泡、悬浮输入框、更素净的侧栏
- **欢迎语**：新会话标题换成按时段变化的问候，如「早安，小明」「周三快乐，小明」，名字取自登录的 DeepSeek 账号；鲸鱼保留
- **插件市场**：同时装了 [dshmarket](https://github.com/dsh-market/dsh-market) 时，自动在侧栏打开「插件市场」入口（你手动关掉过就不再打开）

不改动任何官方文件，卸载后界面恢复原样。

> 适用于 DeepSeek Harness 0.2.1。dsh 仍在预览阶段，升级后部分样式可能失效。

## 安装

**界面安装**：侧栏 **插件** → **添加插件** 右侧小箭头 → **安装第三方插件**，填入下面的地址，安装后点 **立即启用** 并重启应用。

```
git+https://github.com/NaianCN/dsh-claude-ui.git
```

**命令行安装**（macOS 桌面版）：

```bash
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" plugin --profile desktop add git+https://github.com/NaianCN/dsh-claude-ui.git
```

用 npm 装的 `dsh web`，把前面的路径换成 `dsh`、profile 换成 `web`。

想要侧栏插件市场，再装一个 dshmarket（1.73 及以上），重启后多刷新一次页面（⌘R）即可：

```bash
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" plugin --profile desktop add dshmarket
```

## 更新与卸载

Git 安装不会自动更新，更新就是先卸载再重装。卸载可在 **插件** 页面操作，或执行：

```bash
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" plugin --profile desktop remove dsh-claude-ui
```

## 常见问题

- **装完界面没变**：要完全退出应用再打开，只关窗口时应用可能还留在菜单栏
- **问候语没有名字**：没有登录 DeepSeek 账号

## 自定义

所有代码都在 `lib/client.js`，改完重启应用生效，无需构建：

- 配色：`STATIC_TOKENS` 和 `ALIAS_TOKENS`，每项是 `{ light, dark }`
- 样式：`CSS`。选择器只依赖 `data-*` 属性和 class 后缀，以适应 dsh 版本间的哈希变化
- 问候语：`GREETINGS`

本地开发时用 link 安装，改动直接生效：

```bash
git clone https://github.com/NaianCN/dsh-claude-ui.git
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" plugin --profile desktop add link:$(pwd)/dsh-claude-ui
```

## 许可

MIT
