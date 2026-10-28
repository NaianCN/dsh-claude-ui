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
  - 按时段分组：早上 5–11 点、下午 12–17 点、晚上 18–22 点、深夜 23–4 点，例如「早安，小明」「周三快乐，小明」「今天过得怎么样，小明？」「还没睡呀，小明？」
  - 另有一组随时可能出现的通用问候，周末白天还会加入周末问候
  - 同一时段内这句话保持不变，跨时段或跨天才换
  - 名字取自已登录的 DeepSeek 账号；没登录时显示不带名字的版本
  - 中文、英文各有一套
  - 鲸鱼图标保留，「预览版」徽标隐藏
  - 想增删问候语，改 `lib/client.js` 里的 `GREETINGS` 即可
- **侧栏插件市场**：如果同一 profile 里装了 [dshmarket](https://github.com/dsh-market/dsh-market)（社区插件市场，目录来自 awesome-dsh-plugin），并且你从没设置过它的「侧栏入口」，本插件会替你把这个开关打开一次。之后侧栏会出现「插件市场」，可以浏览、搜索、一键安装社区插件。如果你在市场设置里手动关掉了侧栏入口，本插件会尊重这个选择，不会再打开

插件卸载时主题层和布局层都会自动撤回，不改动任何官方文件。

## 安装

> 适用于 DeepSeek Harness **0.2.1**（在 0.2.1-rc.3 上验证）。dsh 仍处于预览阶段，升级后部分样式可能失效。

### 0. 先拿到仓库访问权限

本仓库目前是**私有**的，安装前需要：

1. 仓库所有者在 **Settings → Collaborators → Add people** 邀请你的 GitHub 账号，你在邮件或 GitHub 通知里接受邀请
2. 你的电脑能用自己的 GitHub 账号拉取私有仓库。最简单的做法是在终端执行一次：
   ```bash
   git ls-remote https://github.com/NaianCN/dsh-claude-ui.git
   ```
   提示输入时，用户名填你的 GitHub 用户名，密码处粘贴一个对该仓库有 **Contents: Read** 权限的 token（GitHub → Settings → Developer settings → Fine-grained tokens 生成）。能列出 `refs/heads/main` 就说明可以了，macOS 会把凭据记在钥匙串里

（如果仓库已改为公开，跳过这一步。）

### 方式一：在应用界面里安装（推荐）

1. 打开 DeepSeek Harness，点侧栏的 **插件**
2. 点 **添加插件** 右侧的小箭头，选 **安装第三方插件**
3. 在输入框填入下面的地址，点 **安装**：
   ```
   git+https://github.com/NaianCN/dsh-claude-ui.git
   ```
4. 安装完成后点 **立即启用**，然后**重启 DeepSeek Harness**

### 方式二：命令行安装

桌面版（macOS）：

```bash
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" plugin --profile desktop add git+https://github.com/NaianCN/dsh-claude-ui.git
```

用 npm 安装的 `dsh web`：

```bash
dsh plugin --profile web add git+https://github.com/NaianCN/dsh-claude-ui.git
```

装完重启 DeepSeek Harness（或重新运行 `dsh web`）即可。插件会自动挂载，不需要手动改任何配置文件。

### 可选：侧栏插件市场

想在侧栏加「插件市场」，再装上社区插件 [dshmarket](https://github.com/dsh-market/dsh-market)（1.73 及以上版本兼容 dsh 0.2.1）：

```bash
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" plugin --profile desktop add dshmarket
```

重启后再刷新一次页面（⌘R），侧栏就会出现「插件市场」。第一次需要多刷新这一次，是因为市场在启动时读取开关状态，而本插件是在启动之后才把开关打开的。

### 更新

通过 Git 地址安装的插件不会自动更新。有新版本时，先卸载再重新安装：

```bash
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" plugin --profile desktop remove dsh-claude-ui
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" plugin --profile desktop add git+https://github.com/NaianCN/dsh-claude-ui.git
```

### 卸载

在 **插件** 页面找到 dsh-claude-ui 卸载，或者执行：

```bash
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" plugin --profile desktop remove dsh-claude-ui
```

重启后界面会恢复原样。

### 常见问题

- **装完界面没变**：确认已经完整重启 DeepSeek Harness（关闭窗口后应用可能还在托盘里，要从菜单栏退出）
- **安装时报 403 / Authentication failed**：没有仓库访问权限，或者 token 权限不够，回到第 0 步检查
- **问候语没有名字**：名字取自已登录的 DeepSeek 账号，没有登录账号时只显示问候语

## 本地开发

把仓库克隆到本地，然后用 link 方式安装。这样修改 `lib/client.js` 后，重启应用就能看到效果，不需要构建：

```bash
git clone https://github.com/NaianCN/dsh-claude-ui.git
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" plugin --profile desktop add link:$(pwd)/dsh-claude-ui
```

## 调整

- 配色：编辑 `lib/client.js` 里的 `STATIC_TOKENS` 和 `ALIAS_TOKENS`，每个 token 都写成 `{ light, dark }` 一对值
- 布局：编辑同一文件里的 `CSS`。CSS Module 的哈希前缀会随 dsh 版本变化，所以选择器只锚定 `data-slot` / `data-chat-flow-kind` 和 class 的后缀（例如 `[class$="_card"]`）

