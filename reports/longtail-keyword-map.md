# 长尾关键词映射与意图覆盖分析报告 (Longtail Keyword Map & Intent Coverage)

## 1. 关键词体系概览
为系统化抢占搜索引擎（Google / Bing / 百度）与生成式 AI 搜索（ChatGPT Search / Perplexity / Gemini）的搜索流量，本项目在 `data/keywords/` 目录下建立了四维数据工件：
- `data/keywords/longtail-master.csv`：464 条全量长尾关键词主表，涵盖拼音、层级归属、意图分类、搜索量级与目标落地页。
- `data/keywords/article-keyword-map.json`：121 个核心落地页的主/次关键词、语义变体与 LSI 语义词映射表。
- `data/keywords/cluster-map.json`：12 大一级模块、全二级专题与三级文章的层级拓扑图谱。
- `data/keywords/content-priority.csv`：121 篇内容的分批排期、商业价值、撰写难度与字数目标。

## 2. 搜索意图分类与分布统计 (Search Intent Distribution)

| 搜索意图分类 | 关键词数量 | 占比 | 典型查询示例 | 核心承接落地页 |
| :--- | :--- | :--- | :--- | :--- |
| **Informational (信息型)** | 168 条 | 36.2% | `光速云怎么样`、`IEPL和IPLC的区别`、`机场跑路前兆有哪些` | `/reviews/{slug}/`, `/network/`, `/risk/` |
| **How-to (操作型)** | 62 条 | 13.4% | `Clash Verge Rev安装与订阅导入`、`小火箭添加节点教程` | `/guides/{slug}/` |
| **Troubleshooting (排障型)** | 48 条 | 10.3% | `节点延迟测试全是Timeout`、`ChatGPT 1020 Access Denied` | `/troubleshooting/{slug}/` |
| **Comparison (对比型)** | 88 条 | 19.0% | `光速云和暮光云哪个好`、`微风网络对比飞猫云晚高峰稳定性` | `/compare/{matchup}/`, `/recommend/` |
| **Commercial (商业调查型)** | 54 条 | 11.6% | `便宜好用机场推荐`、`一元机场靠谱吗真实测速`、`支持月付机场` | `/pricing/{slug}/`, `/recommend/` |
| **Navigational (寻址型)** | 31 条 | 6.7% | `光速云官网入口核验`、`微风网络官方网址防伪` | `/brands/{slug}/` |
| **Transactional (交易型)** | 13 条 | 2.8% | `光速云最新优惠码与套餐价格`、`机场折上折代金券` | `/brands/{slug}/#pricing` |
| **总计** | **464 条** | **100%** | 全覆盖长尾搜索生命周期 | 154 个高质量独立 URL |

## 3. 意图覆盖深度剖析

### 3.1 品牌长尾生态（31 家全覆盖，共 310+ 条长尾词）
针对每一个品牌实体，构建了 10 个维度的标准长尾搜索词群：
1. `[品牌]怎么样` -> 指向 `/reviews/{slug}/`（中立综合评测）
2. `[品牌]评测2026` -> 指向 `/reviews/{slug}/`（最新实测数据）
3. `[品牌]测速与延迟实测` -> 指向 `/reviews/{slug}/#speedtest`（晚高峰回传）
4. `[品牌]优缺点分析适合谁` -> 指向 `/reviews/{slug}/#pros-cons`（受众匹配）
5. `[品牌]官网入口核验` -> 指向 `/brands/{slug}/`（官方正版反查）
6. `[品牌]最新优惠码与套餐价格` -> 指向 `/brands/{slug}/#pricing`（资费与折扣）
7. `[品牌]靠谱吗会不会跑路` -> 指向 `/reviews/{slug}/#background`（存续年限与背书）
8. `[品牌]支持ChatGPT和Netflix吗` -> 指向 `/reviews/{slug}/#unlock`（原生解锁矩阵）
9. `[品牌]Clash订阅导入教程` -> 指向 `/guides/clash-verge-rev-tutorial/`（客户端指引）
10. `[品牌]替代机场有哪些` -> 指向 `/reviews/{slug}/#matchups`（竞品横向迁移）

### 3.2 故障排查与急救长尾（高转化意图）
用户在网络彻底中断、报错 1020 或节点全红超时时，搜索意图极其明确，且具有强烈的“寻求高稳定性平替服务商”的商业决策潜力。
- `节点超时 100% 丢包` 承接页不仅给出客户端 DNS/端口排查步骤，同时推荐 IEPL 物理专线备份（如光速云、微风网络）；
- `ChatGPT 1020 报错` 承接页在指导清除无痕 Cookie 之后，指出机房广播 IP 的局限性，引导用户选用具备原生家宽/商宽落地 IP 的机场。

### 3.3 20 组 1v1 竞品横评词群
覆盖 `[品牌A] vs [品牌B]`、`[品牌A]和[品牌B]哪个好`、`[品牌A]和[品牌B]晚高峰延迟对比`。
每个页面均配置了同台技术参数表（起步价格、专线类型、协议、自研客户端、解锁能力）及双方理由，打破传统评测博客的含糊其辞。

## 4. 优化效果与监控规划
1. **收录监测**：所有 URL 均已自动编入 `dist/sitemap-0.xml` 与 `sitemap-index.xml`；
2. **Pagefind 站内检索**：464 个长尾词均在构建阶段被 Pagefind 全文索引提取，用户在站内搜索输入框中可即时获得精确命中建议；
3. **GEO 语义匹配**：每篇评测首屏均具备 80-200 字的 Answer-First 结论，完全契合 Google AI Overviews、SearchGPT 及 Bing Copilot 的直接摘要抓取标准。
