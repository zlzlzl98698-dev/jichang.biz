# 全站二级专题现状与规划审计报告 (Secondary Topic Audit Report)

> 报告生成时间：2026-11-24  
> 站点：[jichang.biz](https://jichang.biz/) · 机场指南 Airport Decision Hub 1.0  
> 审计标准：10 大一级主题下二级专题的独立性、搜索意图、现有覆盖度与落地规划。

---

## 1. 架构定位与层级关系

- **一级专题 (Pillar Pages / Hubs)**：负责核心大词与全景决策总览（如“机场推荐”、“价格与套餐”、“客户端软件”）。
- **二级专题 (Topic Hubs / Category Guides)**：负责细分搜索意图、中长尾关键词与特定决策场景（如“稳定机场”、“便宜机场”、“免费 VPN”）。
- **三级文章 (In-Depth Guides & SOPs)**：负责解决具体操作步骤、技术原理与长尾痛点（如“TUN 模式配置”、“节点超时排错”）。
- **品牌评测与对决 (Reviews & Matchups)**：31 家独立品牌档案库与 20 组 Head-to-Head 深度评测。
- **商业详情页**：负责套餐明细、官方入口核验与经披露的推广转化。

---

## 2. 10 大一级主题下 78 个二级专题细分审计与映射总表

下表审计了指令中规划的 78 个细分主题，并结合项目实际路由判定其处理策略（已有页面升级、独立新建二级页面、或与一级页面整合）：

| 一级分类 | 二级专题编号与名称 | 目标核心关键词 | 搜索意图 | 当前状态与处理策略 | 建议路由 / 承载形式 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **01. 推荐** | 01.1 机场排行 | 机场排行榜、机场综合排名 | 比较选择 | **新建独立二级专题** | `/recommend/rankings/` |
| **01. 推荐** | 01.2 靠谱机场 | 靠谱机场、靠谱机场推荐 | 信任核验 | **新建独立二级专题** | `/recommend/reliable/` |
| **01. 推荐** | 01.3 稳定机场 | 稳定机场、晚高峰稳定节点 | 质量诉求 | **新建独立二级专题** | `/recommend/stable/` |
| **01. 推荐** | 01.4 好用的机场 | 好用的机场、新手机场 | 易用性 | 整合至 `/recommend/beginner/` | 避免同意图竞争 |
| **01. 推荐** | 01.5 新手机场推荐 | 新手机场推荐、机场新手入门 | 新手上路 | **新建独立二级专题** | `/recommend/beginner/` |
| **01. 推荐** | 01.6 高性价比机场 | 性价比机场、实惠机场推荐 | 成本价值 | **新建独立二级专题** | `/recommend/cost-effective/` |
| **01. 推荐** | 01.7 机场推荐方法 | 机场怎么选、机场挑选标准 | 决策方法 | 复用 `/recommend/` 核心模块 | `/recommend/#decision-framework` |
| **02. 价格** | 02.1 便宜机场 | 便宜机场、低价机场推荐 | 极限预算 | **新建独立二级专题** | `/pricing/cheap/` |
| **02. 价格** | 02.2 一元机场 | 一元机场、一元机场推荐 | 试水与低门槛 | **新建独立二级专题** | `/pricing/1-yuan/` |
| **02. 价格** | 02.3 一分机场 | 一分机场、一分钱机场 | 活动福利 | 整合至 `/pricing/1-yuan/` | 澄清活动性质 |
| **02. 价格** | 02.4 月付机场 | 月付机场、按月付费机场 | 灵活防风险 | **新建独立二级专题** | `/pricing/monthly/` |
| **02. 价格** | 02.5 不限时机场 | 不限时机场、永久流量包 | 备用低频 | **新建独立二级专题** | `/pricing/non-expiring/` |
| **02. 价格** | 02.6 性价比套餐 | 流量价格对比、每GB成本 | 算账决策 | **新建独立二级专题** | `/pricing/cost-performance/` |
| **02. 价格** | 02.7 年付机场 | 年付机场、机场年付优惠 | 长期大促 | 整合至 `/pricing/monthly/` | 对比剖析年付风险 |
| **02. 价格** | 02.8 大流量机场 | 大流量机场、1TB机场 | 重度下载 | 整合至 `/pricing/cost-performance/` | 大包梯队对比 |
| **03. 品牌** | 03.1 机场品牌库 | 机场品牌大全、品牌查询 | 档案检索 | **已有完整页面** | `/brands/` (动态检索库) |
| **03. 品牌** | 03.2 机场品牌评测 | 机场评测、深度评测 | 决策选择 | **已有 31 篇深度评测** | `/brands/[slug]/` |
| **03. 品牌** | 03.3 品牌官网入口 | 机场官网、官方域名核验 | 入口安全 | 嵌入各品牌主档案与品牌首页 | `/brands/#verification` |
| **03. 品牌** | 03.4 品牌套餐价格 | 品牌资费、套餐明细 | 资费查询 | 整合于品牌库与各品牌页 | `/brands/[slug]/#plans` |
| **03. 品牌** | 03.5 机场优惠码 | 机场优惠码、折扣码 | 促销折扣 | 嵌入品牌库与品牌卡片 | `/brands/#coupons` |
| **03. 品牌** | 03.6 品牌替代品 | 机场替代品、机场平替 | 容灾替代 | **已有 20 组对决页面** | `/compare/` 及子页面 |
| **03. 品牌** | 03.7 品牌运营风险 | 机场状态、停运记录 | 风险预警 | 关联 `/risk/` 专题 | `/risk/airport-runaway-signs/` |
| **04. VPN** | 04.1 VPN 推荐 | VPN 推荐、好用的 VPN | 跨国与企业选型 | **新建独立二级专题** | `/vpn/recommend/` |
| **04. VPN** | 04.2 免费 VPN | 免费 VPN、免费加速器 | 零成本需求 | **新建独立二级专题** | `/vpn/free/` |
| **04. VPN** | 04.3 手机 VPN | 手机 VPN、移动端网络加速 | 移动终端 | **新建独立二级专题** | `/vpn/mobile/` |
| **04. VPN** | 04.4 安卓 VPN | Android VPN、安卓梯子 | 系统生态 | 整合至 `/vpn/mobile/` | 避免移动系统分裂 |
| **04. VPN** | 04.5 Windows VPN | Windows VPN、PC VPN | 桌面端 | 整合至 `/vpn/recommend/` | 桌面与移动分区 |
| **04. VPN** | 04.6 VPN 软件评测 | VPN 速度评测、安全评测 | 工具对比 | 整合至 `/vpn/recommend/` | 架构评测表 |
| **04. VPN** | 04.7 游戏加速器 | 游戏加速器、低延迟加速 | 电竞低时延 | **新建独立二级专题** | `/vpn/gaming/` |
| **04. VPN** | 04.8 VPN 与代理区别 | VPN和代理区别、技术对比 | 科普认知 | **已有深度解析** | `/vpn/#protocol-comparison` |
| **05. 客户端** | 05.1 Clash Verge Rev | Clash Verge Rev 下载教程 | 现代化客户端 | **已有深度档案** | `/clients/clash-verge-rev/` |
| **05. 客户端** | 05.2 Clash Meta/CMFA | Clash Meta Android 教程 | 移动端开源 | 整合至 `/clients/clash-verge-rev/` 与 Android 分区 |
| **05. 客户端** | 05.3 v2rayN / v2rayNG | v2rayN 教程、Windows 工具 | 经典核心调度 | **已有深度档案** | `/clients/v2rayn/` |
| **05. 客户端** | 05.4 Shadowrocket | Shadowrocket、小火箭教程 | iOS 统治级工具 | **已有深度档案** | `/clients/shadowrocket/` |
| **05. 客户端** | 05.5 Mihomo | Mihomo 内核演进、配置结构 | 内核底座 | 整合于 Clash Verge 档案 | 内核演进章节 |
| **05. 客户端** | 05.6 sing-box | sing-box 客户端使用指南 | 通用代理平台 | **已有深度档案** | `/clients/sing-box/` |
| **05. 客户端** | 05.7 常用客户端推荐 | 代理客户端对比、客户端排行 | 选型决策 | **已有二级首页** | `/clients/` (操作系统矩阵) |
| **05. 客户端** | 05.8 软路由 OpenClash | OpenClash 全屋透明代理 | 路由网关 | **已有深度档案** | `/clients/openclash/` |
| **06. AI/流媒体** | 06.1 ChatGPT 机场 | ChatGPT 节点、1020 报错 | AI 生产力 | **已有深度指南** | `/compatibility/chatgpt-node-guide/` |
| **06.  AI/流媒体** | 06.2 Claude 机场 | Claude 节点、原生 IP 防封 | AI 严格风控 | **已有深度指南** | `/compatibility/claude-clean-ip/` |
| **06. AI/流媒体** | 06.3 Gemini 机场 | Gemini 访问网络要求 | 谷歌生态 | 整合于 AI 专题矩阵 | `/compatibility/#ai-models` |
| **06. AI/流媒体** | 06.4 AI 连接排障 | AI 报错、Access Denied | 排障修复 | **已有专项排障** | `/troubleshooting/ai-access-denied-1020/` |
| **06. AI/流媒体** | 06.5 Netflix 解锁 | Netflix 4K 解锁、仅自制剧 | 流媒体版权 | **已有深度指南** | `/compatibility/netflix-4k-unlock/` |
| **06. AI/流媒体** | 06.6 YouTube 加速 | YouTube 4K/8K 码率与缓冲 | 视频极清吞吐 | 整合于流媒体专区 | `/compatibility/#youtube-metrics` |
| **06. AI/流媒体** | 06.7 TikTok 跨区出海 | TikTok 节点环境搭建防黑屏 | 出海商业 | **已有深度指南** | `/compatibility/tiktok-crossborder-setup/` |
| **06. AI/流媒体** | 06.8 解锁测试工具与排行 | 流媒体解锁测试方法 | 验证测试 | **已有二级首页** | `/compatibility/` (31 品牌矩阵) |
| **07. 线路** | 07.1 IEPL 与 IPLC 专线 | IEPL、IPLC 专线原理 | 物理内网不过墙 | **已有深度科普** | `/network/iepl-vs-iplc/` |
| **07. 线路** | 07.2 延迟抖动丢包率 | 节点延迟、网络健康度 | 网络物理极限 | **已有深度科普** | `/network/latency-jitter-packet-loss/` |
| **07. 线路** | 07.3 节点流量倍率 | 节点倍率真相、防扣量陷阱 | 计费陷阱 | **已有深度科普** | `/network/rate-multiplier-explained/` |
| **07. 线路** | 07.4 原生住宅 IP 真伪 | 住宅 IP 识别、风控天梯 | 解锁风控底座 | **已有深度科普** | `/network/residential-ip-truth/` |
| **07. 线路** | 07.5 地区节点特性 (港日新美) | 香港/日本/新加坡节点比较 | 节点选择 | **已有二级首页** | `/network/` (地理节点图谱) |
| **07. 线路** | 07.6 晚高峰性能压测 SOP | 晚高峰测速、单线程吞吐 | 科学压测 | 整合于线路首页 | `/network/#evening-peak-sop` |
| **08. 教程** | 08.1 Clash Verge 配置 | Clash Verge Rev 上手教程 | 桌面配置 | **已有实战教程** | `/guides/clash-verge-rev-tutorial/` |
| **08. 教程** | 08.2 Shadowrocket 配置 | Shadowrocket 订阅导入 | iOS 配置 | **已有实战教程** | `/guides/shadowrocket-setup/` |
| **08. 教程** | 08.3 TUN 虚拟网卡模式 | TUN 模式原理与防漏网 | 全局接管 | **已有实战教程** | `/guides/tun-mode-explained/` |
| **08. 教程** | 08.4 规则分流原理 | DIRECT/PROXY/REJECT 原理 | 智能分流 | **已有实战教程** | `/guides/rule-routing-guide/` |
| **08. 教程** | 08.5 v2rayN 教程 | v2rayN 内核管理使用指南 | Win 经典 | **已有实战教程** | `/guides/v2rayn-windows-guide/` |
| **08. 教程** | 08.6 OpenClash 软路由 | OpenWrt 软路由透明网关 | 全屋网关 | **已有实战教程** | `/guides/openclash-router-guide/` |
| **08. 教程** | 08.7 订阅安全保管 | Token 防盗刷、订阅防泄露 | 资产自保 | **已有实战教程** | `/guides/safe-subscription-management/` |
| **09. 排障** | 09.1 节点大面积超时 | 节点超时、Timeout/-1ms | 握手与入口故障 | **已有专项排障** | `/troubleshooting/node-timeout/` |
| **09. 排障** | 09.2 订阅更新失败 | 订阅更新失败、下载为空 | 代理死锁阻断 | **已有专项排障** | `/troubleshooting/subscription-update-failed/` |
| **09. 排障** | 09.3 连上打不开网页 | 连上了但打不开外网 | DNS 与分流死循环 | **已有专项排障** | `/troubleshooting/connected-no-internet/` |
| **09. 排障** | 09.4 DNS 污染与泄露 | DNS 污染诊断、Fake-IP | 域名解析安全 | **已有专项排障** | `/troubleshooting/dns-leak-and-pollution/` |
| **09. 排障** | 09.5 端口冲突 7890 | 7890 端口占用、客户端崩溃 | 端口抢占与僵尸进程 | **已有专项排障** | `/troubleshooting/port-conflict-7890/` |
| **09. 排障** | 09.6 ChatGPT 1020 报错 | Access Denied 1020 解决 | Cloudflare 防火墙 | **已有专项排障** | `/troubleshooting/ai-access-denied-1020/` |
| **09. 排障** | 09.7 退出断网自愈 | 关闭代理后国内网络断开 | 系统代理注册表残留 | **已有专项排障** | `/troubleshooting/system-proxy-reset/` |
| **10. 风险** | 10.1 机场跑路前兆 | 机场跑路前兆、骨折吸资 | 跑路预警 | **已有专项深度文章** | `/risk/airport-runaway-signs/` |
| **10. 风险** | 10.2 双机场容灾备用 | 双机场主备容灾体系搭建 | 高可用容灾 | **已有专项深度文章** | `/risk/dual-airport-redundancy/` |
| **10. 风险** | 10.3 霸王退款条款真相 | 机场不退款条款与维权自保 | 消费者权益 | **已有专项深度文章** | `/risk/refund-terms-analysis/` |

---

## 3. 本次重点新增与升级规划

经审计分析，全站 **已有 30 篇高权威三级文章** 完好承载了客户端、AI 流媒体、线路、教程、排障与风险子专题。

然而，在商业意图极高的 **机场推荐（`/recommend/`）**、**价格与套餐（`/pricing/`）** 以及 **VPN 与加速器（`/vpn/`）** 下，尚未设立独立的二级 Topic Hub 页面，导致用户从大词无法平滑进入细分场景选择。因此，本次建设的核心突破点为：

1. **创建 `/recommend/[slug].astro` 动态二级专题系统**：
   - `/recommend/rankings/` (机场排行榜与综合天梯榜)
   - `/recommend/reliable/` (靠谱机场与防跑路挑选标准)
   - `/recommend/stable/` (稳定机场推荐与晚高峰抗抖动专题)
   - `/recommend/beginner/` (新手机场推荐与免配置新手入门)
   - `/recommend/cost-effective/` (高性价比机场推荐与综合价值评估)
2. **创建 `/pricing/[slug].astro` 动态二级专题系统**：
   - `/pricing/cheap/` (便宜机场与平价梯子精选)
   - `/pricing/1-yuan/` (一元机场真相与一分钱试用套路拆解)
   - `/pricing/monthly/` (月付机场推荐与灵活续费防跑路指南)
   - `/pricing/non-expiring/` (不限时机场与永久流量包深度测评)
   - `/pricing/cost-performance/` (机场套餐性价比排行与每 GB 成本折算)
3. **创建 `/vpn/[slug].astro` 动态二级专题系统**：
   - `/vpn/recommend/` (VPN 综合推荐与企业级应用)
   - `/vpn/free/` (免费 VPN 真实代价与安全隐私避坑)
   - `/vpn/mobile/` (手机与安卓/iOS 网络加速专题)
   - `/vpn/gaming/` (海外游戏加速器与电竞低延迟专线对比)
4. **升级并完善现有一级专题与二级专题之间的全景双向内链拓扑**。
