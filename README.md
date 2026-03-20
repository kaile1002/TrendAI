# AI 热点监控工具

> 作者：[程序员kle]
>
> 本项目为自己学习项目，帮你提升项目能力，给简历增加亮点！
>



## 一、项目介绍

这是一套以 **AI 编程实战** 为核心的项目教程，基于 Express 5 + React 19 + OpenRouter + Socket.io，用 AI 编程的方式从 0 到 1 开发一个《AI 热点监控工具》，带你亲身体验 AI Vibe Coding 的完整工作流，学会用 AI 快速做出实用的提效工具！

![](https://pic.yupi.icu/1/image-20260304102630302.png)

输入要监控的关键词，系统自动从 Twitter、Bing、HackerNews、搜狗、B 站等 **8+** 个信息源聚合抓取内容，利用 AI 进行真假识别和相关性分析，并通过 WebSocket 实时推送和邮件通知用户。此外，还将热点监控能力封装为 **Agent Skills 技能包**，让 Cursor、VSCode Copilot、Claude Code 等 AI 编程工具也能直接使用。



### 为什么做这个项目？

kle作为 马上被淘汰 的前端程序员，要利用工具第一时间自动发现最新的热点（比如 AI 大模型的更新），并且及时给我发送通知，让我能够及时知道我的淘汰趋势。

既然如此，**不如做一个更通用的工具**。

这就是 AI 热点监控工具的起点：让 AI 帮你盯热点，第一时间获取优质信息！

![](https://pic.yupi.icu/1/AI%E7%83%AD%E7%82%B9%E7%9B%91%E6%8E%A7%E5%AF%B9%E8%AF%9D%E6%A1%86.jpg)



### 6 大核心能力

1）配置监控关键词，支持激活 / 暂停。

![](https://pic.yupi.icu/1/image-20260304102804249.png)



2）AI 自动从 8+ 数据源抓取和分析热点，利用 AI 进行查询扩展、真假识别、相关性分析和智能摘要。

![](https://pic.yupi.icu/1/image-20260304103025682.png)



3）多维度筛选和排序，按来源、重要性、时间范围筛选，按热度、相关性、时间排序。

![](https://pic.yupi.icu/1/image-20260304103219366.png)



4）全网搜索，输入关键词从多个数据源聚合搜索。

![](https://pic.yupi.icu/1/image-20260304103824666.png)



5）实时通知，WebSocket 实时推送 + 邮件通知。

![](https://pic.yupi.icu/1/image-20260304104139285.png)



6）Agent Skills 技能包，安装后在 Cursor、VSCode Copilot、Claude Code 中都能直接使用。

![](https://pic.yupi.icu/1/1772099941189-4fb78679-12ac-4b92-a7b4-b5b4645b09d4.png)



## 二、项目优势

本项目选题新颖，紧跟 AI 编程时代，以 **实用工具开发** 为导向，区别于增删改查的烂大街项目。项目内容精炼，**不到一周就能学完**，带你掌握 AI 编程的完整工作流，给你的简历和求职大幅增加竞争力！

技术丰富，覆盖 AI 编程全链路：

![](https://pic.yupi.icu/1/image-20260304101227060.png)

从这个项目中你可以学到：

- 如何用 AI 编程从 0 到 1 开发一个完整的工具？
- 如何安装和使用 MCP 增强 AI 能力？
- 如何安装和使用 Agent Skills 提升 AI 编程质量？
- 如何从多个信息源（Twitter、Bing、HN、B 站等）聚合抓取内容？
- 如何通过 OpenRouter 接入 AI 大模型，实现智能内容审核？
- 如何实现查询扩展（Query Expansion），提高信息检索的召回率？
- 如何基于 Socket.io 实现 WebSocket 实时推送？
- 如何使用 Aceternity UI 打造炫酷的科技感前端界面？
- 如何开发标准化的 Agent Skills 技能包，并在多种 AI 工具中验证？
- 如何在 AI 编程中进行人工确认、版本控制和迭代优化？



## 三、更多介绍

功能模块：

![](https://pic.yupi.icu/1/image-20260304101313199.png)

架构设计：

![](https://pic.yupi.icu/1/image-20260304101440202.png)



## 四、快速运行

> 详细的保姆级教程请参考 [本地运行指南](docs/LOCAL_SETUP.md)

### 前置条件

- Node.js ≥ 18（推荐 20 LTS）
- 一个 [OpenRouter API Key](https://openrouter.ai/settings/keys)（必需，用于 AI 分析）

### 1. 克隆并安装依赖

```bash
git clone https://github.com/kaile1002/TrendAI.git
cd TrendAI

# 后端
cd server
npm install
npx prisma generate
npx prisma db push

# 前端
cd ../client
npm install
```

### 2. 配置环境变量

```bash
cp server/.env.example server/.env
```

编辑 `server/.env`，至少填入 OpenRouter API Key：

```bash
OPENROUTER_API_KEY=sk-or-v1-你的key
# Twitter API Key（可选）
TWITTER_API_KEY=你的key
```

### 3. 启动服务（两个终端）

```bash
# 终端 1：启动后端（端口 3001）
cd server && npm run dev

# 终端 2：启动前端（端口 5173）
cd client && npm run dev
```

访问 **http://localhost:5173** ，输入关键词即可开始监控热点 🔥

| 服务 | 地址 |
|------|------|
| 前端页面 | http://localhost:5173 |
| 后端 API | http://localhost:3001 |
| 数据库管理 | `cd server && npx prisma studio`（可选） |

更多细节请查看 [保姆级本地运行指南](docs/LOCAL_SETUP.md)。
