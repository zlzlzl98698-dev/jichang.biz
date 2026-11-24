# 十大一级专题内链网络拓扑报告 (Pillar Internal Links Map)

> 报告生成时间：2026-11-24  
> 站点：[jichang.biz](https://jichang.biz/) · 机场指南 Airport Decision Hub 1.0  
> 拓扑标准：四层网状交叉内链网络（Hub-to-Hub, Hub-to-Sub, Hub-to-Brand/Matchup, Hub-to-Tool）

---

## 1. 内链架构设计原则

1. **去孤岛化（Zero Orphan Pages）**：全站 108 个静态页面全部纳入深度不大于 3 次点击的网状链路中。
2. **相关性锚文本（Contextual Anchor Text）**：严禁无意义的“点击这里”，全部采用语义明确的业务锚文本（如“IEPL 物理专线科普”、“ChatGPT 1020 报错解决”、“双机场主备容灾”）。
3. **闭环决策流（Decision Funnel Loop）**：
   - 知识科普 ➔ 选型决策 ➔ 价格对比 ➔ 品牌评测 ➔ 客户反馈 / 风险预警。
4. **nofollow/sponsored 商业隔离**：站内所有内链全部传递内部权重（Dofollow）；所有第三方商业官网跳转严格打上 `target="_blank" rel="nofollow sponsored noopener"`。

---

## 2. 十大一级专题核心互联拓扑矩阵 (Hub-to-Hub Matrix)

下表呈现 10 大核心 Pillar Page 之间的双向互联映射：

| 一级专题 (Hub) | 核心关联的一级专题 | 主要互联场景与上下文 |
| :--- | :--- | :--- |
| **01. 机场推荐 (`/recommend/`)** | 价格、品牌、线路、兼容性、客户端 | 选购决策主漏斗，引导查看价格阶梯、线路本质、AI 解锁及客户端下载 |
| **02. 价格与套餐 (`/pricing/`)** | 推荐、品牌、风险、工具 | 预算决策流，引导查看高性价比品牌、防跑路小额月付、流量计算器 |
| **03. 机场品牌 (`/brands/`)** | 推荐、价格、对决、兼容性 | 31个品牌档案总览，引导查看品牌对决 (Matchups) 与 AI 解锁明细 |
| **04. VPN 与加速器 (`/vpn/`)** | 推荐、线路、客户端、排障 | 架构认知流，解析正规 VPN、游戏加速器与机场代理的本质差异 |
| **05. 客户端软件 (`/clients/`)** | 教程、排障、线路、兼容性 | 软件载体枢纽，引导查看全平台安装教程、TUN 模式与 7890 端口排错 |
| **06. AI 与流媒体 (`/compatibility/`)** | 推荐、品牌、线路、排障 | 业务需求流，引导查看流媒体解锁品牌、原生住宅 IP 识别与 1020 报错 |
| **07. 线路与节点 (`/network/`)** | 推荐、价格、对决、排障 | 物理技术底座，引导查看专线机场排行、倍率防扣量与晚高峰测速 SOP |
| **08. 使用教程 (`/guides/`)** | 客户端、排障、风险、工具 | 实战操作手册，引导查看全平台配置、订阅安全重置与系统代理自愈 |
| **09. 故障排查 (`/troubleshooting/`)** | 教程、线路、风险、客户端 | 急诊科排障流，引导查看节点超时恢复、系统时间同步与替代品牌容灾 |
| **10. 风险与替代 (`/risk/`)** | 推荐、价格、品牌、工具 | 风险控制中枢，引导查看双机场主备容灾、老牌稳定专线与退款防坑 |

---

## 3. 一级专题至二级子文章与三级长尾映射拓扑 (Hub-to-Sub)

| 一级专题 | 直属高权重子文章 (Sub-articles) |
| :--- | :--- |
| **01. 推荐** | `/recommend/` (整合全部推荐维度) ➔ 关联 `/compare/` 全部 20 组对决长文 |
| **02. 价格** | `/pricing/` (整合全价格梯度) ➔ 关联 `/tools/` 流量成本在线计算器 |
| **03. 品牌** | `/brands/` ➔ 31 家独立品牌深度档案 (`/brands/{slug}/`) |
| **04. VPN** | `/vpn/` (架构总览) ➔ 关联 `/clients/` 与 `/network/` |
| **05. 客户端** | `/clients/clash-verge-rev/`、`/clients/shadowrocket/`、`/clients/sing-box/`、`/clients/v2rayn/`、`/clients/clash-meta-for-android/` |
| **06. 兼容性** | `/compatibility/chatgpt-claude/`、`/compatibility/netflix-disney/`、`/compatibility/tiktok/`、`/compatibility/youtube-4k-8k/` |
| **07. 线路** | `/network/iepl-vs-iplc/`、`/network/latency-jitter-packet-loss/`、`/network/rate-multiplier-explained/`、`/network/residential-ip-truth/` |
| **08. 教程** | `/guides/clash-verge-rev-tutorial/`、`/guides/shadowrocket-setup/`、`/guides/tun-mode-explained/`、`/guides/rule-routing-guide/`、`/guides/v2rayn-windows-guide/`、`/guides/openclash-router-guide/`、`/guides/safe-subscription-management/` |
| **09. 排障** | `/troubleshooting/node-timeout/`、`/troubleshooting/subscription-update-failed/`、`/troubleshooting/connected-no-internet/`、`/troubleshooting/dns-leak-and-pollution/`、`/troubleshooting/port-conflict-7890/`、`/troubleshooting/ai-access-denied-1020/`、`/troubleshooting/system-proxy-reset/` |
| **10. 风险** | `/risk/airport-runaway-signs/`、`/risk/dual-airport-redundancy/`、`/risk/refund-terms-analysis/` |

---

## 4. 全站工具与权威底座内链渗透

所有 10 大专题页脚或“下一步决策”模块中，均统一嵌入了以下 4 个核心决策工具入口：
1. **综合机场推荐榜单** (`/recommend/`)：最终漏斗承接转化。
2. **品牌深度档案库** (`/brands/`)：全景 31 家品牌资质与套餐查验。
3. **品牌横向对决** (`/compare/`)：20 组 Head-to-Head 深度评测对比。
4. **流量与成本计算器** (`/tools/`)：动态交互式决策辅助。

---

## 5. 校验结果与合规审计

- **孤岛页面数量**：0 个
- **断链 (404 Broken Links)**：0 处（通过 `scripts/link-check.cjs` 静态 HTML AST 校验）
- **商业外链属性**：100% 具备 `target="_blank" rel="nofollow sponsored noopener"` 属性。
