# dsh-claude-ui

把 DeepSeek Harness 的 Web / 桌面界面换成接近 Claude Desktop 的样子。

- **主题层**：通过官方 `ctx.theme.overrideTokens` 叠加一层 token。冷灰色阶和 DeepSeek 蓝换成 Claude 的暖灰和陶土橙（`#D97757`）；浅色背景 `#FAF9F5`，深色背景 `#262624`，会跟随系统切换浅/深色
- **布局层**：注入一张样式表
  - 侧栏更安静
  - 欢迎语和助手正文用衬线体
  - 用户消息改成圆角气泡
  - 输入框是悬浮的圆角卡片，发送按钮为圆角方形
  - 工具卡片用细边框

- **欢迎语**：新会话的「探索未至之境」会换成 Claude 式的衬线体问候语，每次打开随机挑一句
  - 按时段分组：早上 5–11 点、下午 12–17 点、晚上 18–22 点、深夜 23–4 点，例如「早安，奈」「周三快乐，奈」「今天过得怎么样，奈？」「还没睡呀，奈？」
  - 另有一组随时可能出现的通用问候，周末白天还会加入周末问候
  - 同一时段内这句话保持不变，跨时段或跨天才换
  - 名字取自已登录的 DeepSeek 账号；没登录时显示不带名字的版本
  - 中文、英文各有一套
  - 鲸鱼图标保留，「预览版」徽标隐藏
  - 想增删问候语，改 `lib/client.js` 里的 `GREETINGS` 即可
- **侧栏插件市场**：如果同一 profile 里装了 [dshmarket](https://github.com/dsh-market/dsh-market)（社区插件市场，目录来自 awesome-dsh-plugin），并且你从没设置过它的「侧栏入口」，本插件会替你把这个开关打开一次。之后侧栏会出现「插件市场」，可以浏览、搜索、一键安装社区插件。如果你在市场设置里手动关掉了侧栏入口，本插件会尊重这个选择，不会再打开

插件卸载时主题层和布局层都会自动撤回，不改动任何官方文件。

## 安装 / 卸载（官方桌面版）

```bash
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" plugin --profile desktop add link:/Users/longyu/Agent/AI/dsh-claude-ui
```

```bash
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" plugin --profile desktop remove dsh-claude-ui
```

想要侧栏插件市场，再装上 dshmarket（1.73 及以上版本兼容 dsh 0.2.1）：

```bash
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" plugin --profile desktop add dshmarket
```

安装或卸载后，重启 DeepSeek Harness 生效。侧栏的市场入口第一次需要再刷新一次页面才会出现，因为市场在启动时读取开关状态，而本插件是在启动之后才把开关打开的。插件是以 link 方式安装的，修改 `lib/client.js` 后重启应用就能看到变化。

## 调整

- 配色：编辑 `lib/client.js` 里的 `STATIC_TOKENS` 和 `ALIAS_TOKENS`，每个 token 都写成 `{ light, dark }` 一对值
- 布局：编辑同一文件里的 `CSS`。CSS Module 的哈希前缀会随 dsh 版本变化，所以选择器只锚定 `data-slot` / `data-chat-flow-kind` 和 class 的后缀（例如 `[class$="_card"]`）

已在 dsh 0.2.1-rc.3 上验证。
