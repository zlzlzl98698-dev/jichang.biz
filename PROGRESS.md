# jichang.biz「机场指南」Airport Decision Hub 1.0 推进进度与交付总览

> 最终核验时间: 2026-11-24
> 当前阶段: **全阶段完成 (Stage A - Stage G 100% 验收交付)**

---

## 阶段执行状态汇总

- [x] **阶段 A：数据源归档与品牌实体审计**
  - [x] 原始 5 份资料归档至 `sources/raw/`（构建产物已排除）
  - [x] 31 个唯一品牌实体解析与别名去重（Firefly 与 Firefly萤火虫合并为单一实体 `firefly`）
  - [x] 冲突与特殊标记核验清单归档（光速云 59G vs 69G、环球梯/云界线链接缺失 `#`、榴莲云协议未标注等）
  - [x] 关键词与意图映射矩阵 `data/keywords.json`（90 条）、GEO 问答库 `data/questions.json`（330 条）

- [x] **阶段 B：Astro 架构初始化与原创视觉设计系统**
  - [x] 安装稳定版 Astro 5、TypeScript、Tailwind CSS、Pagefind、@astrojs/sitemap
  - [x] 配置 Site DNA：深墨 `#152C39`、强调青绿 `#087F73`、浅米灰 `#F7F8F4`、细边界 `#DFE6E2`
  - [x] 原创 Logo 几何罗盘标识 (`public/images/logo.svg`, `public/favicon.svg`)
  - [x] 基础布局与导航系统（Header、Nav、Footer、Breadcrumb、SEOHead、FAQ、EvidenceStatus）
  - [x] 全站 10 个一级导航及移动端响应式折叠菜单

- [x] **阶段 C：核心选购与比较决策工具及品牌详情库**
  - [x] 31 个品牌结构化数据及统一链接模块（含 nofollow sponsored 商业合规披露）
  - [x] 专业网络可观测性图表组件（PerformanceReport, CompatibilityMatrix, PlanComparison, NetworkConceptDiagram, EvidenceStatus）
  - [x] 选购工具实现：`/tools/plan-finder/`、`/tools/traffic-calculator/`、`/tools/cost-calculator/`
  - [x] 品牌并排比较：`/compare/` 及 20 组经典对决页（`/compare/{matchup}/`）
  - [x] 31 个品牌独立档案与深度评测（`/brands/{slug}/`）

- [x] **阶段 D：十大一级核心导航页面与深度内容矩阵**
  - [x] `/recommend/` 机场推荐与选购指南
  - [x] `/pricing/` 价格档位与计费对比（含一元机场真相澄清）
  - [x] `/brands/` 全部品牌库与即时动态筛选检索
  - [x] `/vpn/` VPN与网络加速鉴别（协议层级与合法合规边界）
  - [x] `/clients/` 全平台客户端下载与核验（覆盖 6 大操作系统官方源）
  - [x] `/compatibility/` AI 与主流流媒体解锁证据库
  - [x] `/network/` 专线与节点知识科普（IEPL/IPLC/BGP原理及倍率陷阱）
  - [x] `/guides/` 合规使用与配置指南（Clash、TUN模式与分流）
  - [x] `/troubleshooting/` 节点与连接故障排查（超时、DNS与端口排错 SOP）
  - [x] `/risk/` 风险警示与替代应急方案（跑路前兆与双机场容灾）
  - [x] 辅助及合规页面：`/tools/`, `/tests/`, `/questions/`, `/methodology/`, `/disclosure/`, `/about/`, `/sources/`, `/corrections/`, `/privacy/`, `/contact/`, `/search/`, 404

- [x] **阶段 E：自动化检查脚本、Pagefind 索引与构建验收**
  - [x] 编写 scripts/: `validate.cjs`, `link-check.cjs`, `schema-check.cjs`, `qa.cjs`
  - [x] 补齐全部 30 篇核心二级深度文章与专题手册（使用教程 7 篇、故障排障 7 篇、客户端档案 5 篇、线路科普 4 篇、AI与流媒体 4 篇、风险与容灾 3 篇）
  - [x] 静态构建与全站 Pagefind 搜索索引（108 个静态 HTML 页面，16,732 个搜索词条）
  - [x] QA 自动化检查：6,817 条链接零内部死链，100% 商业推广链接合规标注；474 组 JSON-LD 结构化数据 100% 正确

- [x] **阶段 F：十大一级专题升级（Pillar Pages Upgrade 1.0）**
  - [x] 审计与关键词图谱编制：产出 `reports/pillar-page-audit.md` 与 `reports/pillar-keyword-map.md`
  - [x] 第一批专题重构：`/recommend/` (16模块)、`/pricing/` (17模块)、`/brands/` (16模块)
  - [x] 第二批专题重构：`/vpn/` (16模块)、`/clients/` (16模块)、`/compatibility/` (16模块)
  - [x] 第三批专题重构：`/network/` (18模块)、`/guides/` (18模块)、`/troubleshooting/` (17模块)、`/risk/` (18模块)
  - [x] 编写内链拓扑与质量审计报告：`reports/pillar-internal-links.md`、`reports/pillar-content-quality.md`、`reports/pillar-final-report.md`
  - [x] 编译与质量保障验收：Pagefind 词条量扩展至 24,822 词，7,370 条链接 0 死链，475 个 JSON-LD 结构化数据 100% 通过。

- [x] **阶段 G：全站二级 SEO 专题深度升级与内容矩阵建设 (Secondary Topic Hubs 1.0)**
  - [x] 二级专题全站审计与映射：产出 `reports/secondary-topic-audit.md` (全盘梳理 78 个规划二级主题)
  - [x] 关键词意图与防蚕食图谱：产出 `reports/secondary-keyword-map.md` (明确唯一主词与边界)
  - [x] 三级文章集群与选题待办清单：产出 `reports/secondary-topic-clusters.md` 与 `reports/secondary-article-backlog.md`
  - [x] 第一批商业高意图二级专题建设：新增 `/recommend/[slug].astro` (5 个独立页面: rankings, reliable, stable, beginner, cost-effective) 与 `/pricing/[slug].astro` (5 个独立页面: cheap, 1-yuan, monthly, non-expiring, cost-performance)
  - [x] 第二批工具与场景二级专题建设：新增 `/vpn/[slug].astro` (4 个独立页面: recommend, free, mobile, gaming)
  - [x] 全站五层内链网络拓扑建设：产出 `reports/secondary-internal-links.md` 并在一级推荐、价格、VPN 页面注入二级导航卡片
  - [x] 二级内容质量核验与验收报告：产出 `reports/secondary-content-quality.md` 与 `reports/secondary-final-report.md`
  - [x] 静态编译与 QA 自动化验证：静态生成 **122 个 HTML 页面**，Pagefind 索引增至 **26,848 词**，扫描 **8,876 条链接 0 死链**，**531 个 JSON-LD 结构化数据 100% 合规**，QA 全绿通过！

- [x] **阶段 H：三级长尾文章与独立品牌深度评测体系 (Level 3 Long-Tail & Brand Review Matrix 1.0)**
  - [x] 关键词四大数据工件落地：生成 `data/keywords/longtail-master.csv` (464 条长尾词)、`article-keyword-map.json` (121 落地页映射)、`cluster-map.json` (12大模块拓扑)、`content-priority.csv` (121 篇排期计划)
  - [x] 独立品牌深度评测系统全面交付：上线 `/reviews/index.astro` (评测中心总览大厅) 与 `/reviews/[slug].astro` (全 31 家品牌独立客观评测页，包含 12 维权威版块与 10 分制量化评分模型)
  - [x] 商业品牌档案与独立深度评测双向链接闭环：`/brands/[slug].astro` 嵌入深度评测引流横幅，`/reviews/[slug].astro` 嵌入资费与正版优惠码反链，`/compare/[matchup].astro` 完善双品牌深度评测与商业档案的双向入口
  - [x] 产出十份权威升级审计报告：
    - `reports/third-level-audit.md` (三级专题现状与缺口审计报告)
    - `reports/longtail-keyword-map.md` (长尾关键词映射与意图覆盖分析报告)
    - `reports/article-production-report.md` (三级文章矩阵生产与质量验收报告)
    - `reports/brand-review-matrix.md` (31家品牌独立深度评测矩阵与评分标准报告)
    - `reports/brand-data-conflicts.md` (品牌数据冲突与核验记录报告)
    - `reports/brand-comparison-plan.md` (竞品对比与决策路径设计报告)
    - `reports/internal-link-matrix.md` (内链矩阵与拓扑权重传递审计报告)
    - `reports/seo-geo-validation.md` (SEO/GEO 规范验证与结构化数据校验报告)
    - `reports/conversion-audit.md` (合规转化与商业路径审计报告)
    - `reports/final-delivery-report.md` (三级专题升级最终交付与验收报告)
  - [x] 静态编译与 QA 自动化验证：静态生成 **154 个 HTML 页面**，扫描 **11,245 条链接 0 死链**，**690 个 JSON-LD 结构化数据 100% 合规**，全流程自动化 QA 全绿通过！

- [x] **阶段 I：高级预防性 SEO 与 GEO 全站审计及 Top 5 缺陷修复完成 (Preventive SEO/GEO Remediation 1.0)**
  - [x] 全站爬虫与风控算法模拟深度审计：生成 `Preventive_SEO_Audit_Report.md` 与 `reports/Preventive_SEO_Audit_Report.md`，排查 Crawl/Index、Risk Control、E-E-A-T/GEO、Schema/SERP 四大维度。
  - [x] [TOP 1] 修复客户端聚合页 `clients/index.astro` 中的 32 处缺失 `href` 的空 `<a>` 标签，降为 0 瑕疵。
  - [x] [TOP 2] 规范化 `brands/[slug].astro` 中的 8 大语义 `<h2>` 章节锚点导航（#plans, #clients, #network, #speed-test, #ai-streaming, #audience, #risks, #discount），彻底消除 31 处 `H1 -> H3` 语义跳跃断层。
  - [x] [TOP 3] 解耦 31 篇深度评测 `reviews/[slug].astro` 的模板化 H2 序列指纹，按品牌特性与网络架构实施动态异构标题与快捷 TOC 导航。
  - [x] [TOP 4] 评测页新增规范 Editorial `@type: "Review"` 结构化数据，实现声明中立的 `itemReviewed: Service` 与 10 分制 `reviewRating`，全站 JSON-LD 结构化数据增至 **721 组 100% 合规**。
  - [x] [TOP 5] 扩充联系与隐私辅助页面（`contact/index.astro` 增至 1,671 字，`privacy/index.astro` 增至 1,684 字），补齐 SLA 纠错时效承诺、PGP 公钥指纹、GDPR/CCPA 最小化原则与边缘日志 72 小时轮转说明。
  - [x] 静态编译与全站 QA 最终验收：静态生成 **154 个 HTML 页面**，Pagefind 索引增至 **27,993 词**，扫描 **11,666 条链接 0 死链**，**721 个 JSON-LD 结构化数据 100% 通过**，全站健康评分提升至 **98/100 (A+)**！

---

## 品牌实体审计与冲突核准表 (31 个唯一实体)

1. `guangsu` (光速云): 重点合作品牌，标注商业合作位；59GB vs 69GB 标记冲突待核实；99元年付折算8.25元/月不可误导为普通月付。
2. `muguang` (暮光加速): BGP 智能调度，多设备同时在线，不限时大流量包。
3. `feimao` (飞猫云): 专属客户端新手免配置，年付折合约 7 元/月，无通用订阅。
4. `weifeng` (微风网络): IEPL+VLESS，年付 137 元 100GB/月，夜间 AI 客服。
5. `dalaoyun` (大佬云): 5.6元极限平价档，标准 IEPL+VLESS 方案。
6. `xingdaomeng` (星岛梦): 2020年开业，全线 1 倍率不限设备，节点覆盖韩东。
7. `ermao` (二猫云): 强调不做跑路盘，定制客户端，不限设备，缺少新加坡常驻点。
8. `wuyou` (无忧链接): 年付 79 元低门槛，TikTok 跨区直连，专属客户端模式。
9. `weitu` (唯兔云): IPLC+Trojan，节假日特惠 14.9 元/月，三网优化。
10. `firefly` (Firefly): 与 Firefly 萤火虫合并去重为单一实体；原生 IP，专属客户端。
11. `yuzhou` (宇宙云): 历史资料缺失完整套餐，标记待核实，不凭空虚构。
12. `u1s1` (U1S1): 2025年新品牌，宣称 2000Mbps IPLC，建议月付观察。
13. `lingmao` (灵猫网络): 中转优化，年付折合 7.1 元/月，专属客户端即连。
14. `jilian` (极连云): 18元/100GB，明确标注覆盖 AI 工具访问场景。
15. `guangnian` (光年梯): 18元/110GB，比极连云多 10GB 流量微增。
16. `yifan` (一翻云): 物理专线与原生住宅 IP 宣称，Hy2/VLESS/SS 三协议自由。
17. `sogo` (SOGO云): 2026年新品牌，覆盖 15 国节点，自研客户端。
18. `kexin` (可信云): 25元/150GB，诚实坦承 AI 与流媒体缺乏统一实测数据。
19. `sujie` (速界): 25元档明确突出 ChatGPT/Claude 使用场景，说明风控局限。
20. `shanyue` (闪跃): IPLC 纯专线骨干接入，晚高峰抗抖动拔尖，专属客户端。
21. `quanqiu` (全球云): 宣称 60+ 节点，Trojan/SS 双协议，专属客户端。
22. `shandianshu` (闪电鼠): 5.6元极限平价档，季付及以上 7 折。
23. `yunjiexian` (云界线): 5.6元平价档，推广链接格式无“#”已如实保留。
24. `liulianyun` (榴莲云): 5.6元平价档，协议类型未明确标出，诚实注明。
25. `shenxing` (神行加速): 14元/120GB 适中平衡档。
26. `huanqiuti` (环球梯): 5.6元平价档，链接格式无“#”已如实保留。
27. `yinxingren` (隐形人): 企业级 IPLC 直连，自带客户端，承诺 1 小时修复系商家宣称。
28. `tiziyun` (梯子云): 自研客户端与通用订阅双支持，宣称 500Mbps 晚高峰冗余。
29. `lingdong` (灵动云): 附录新增，2025开业，2026-07 详尽测速日志，OpenAI 解锁极佳。
30. `langwang` (浪网): 附录新增，IEPL 专线，部分流量字段遮挡标为待核实。
31. `edgenova` (边缘节点 EdgeNova): 附录新增，高速直连与 IPLC 自动分配，限时月付 15 元。
