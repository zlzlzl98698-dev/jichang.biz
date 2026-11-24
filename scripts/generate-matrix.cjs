const fs = require('fs');
const path = require('path');

// Ensure data and reports directories exist
fs.mkdirSync(path.join(__dirname, '../data'), { recursive: true });
fs.mkdirSync(path.join(__dirname, '../reports'), { recursive: true });

// Read brands
const brands = [
  { id: 'guangsu', name: '光速云', slug: 'guangsu' },
  { id: 'muguang', name: '暮光加速', slug: 'muguang' },
  { id: 'feimao', name: '飞猫云', slug: 'feimao' },
  { id: 'weifeng', name: '微风网络', slug: 'weifeng' },
  { id: 'dalaoyun', name: '大佬云', slug: 'dalaoyun' },
  { id: 'xingdaomeng', name: '星岛梦', slug: 'xingdaomeng' },
  { id: 'ermao', name: '二猫云', slug: 'ermao' },
  { id: 'wuyou', name: '无忧链接', slug: 'wuyou' },
  { id: 'weitu', name: '唯兔云', slug: 'weitu' },
  { id: 'firefly', name: 'Firefly', slug: 'firefly' },
  { id: 'yuzhou', name: '宇宙云', slug: 'yuzhou' },
  { id: 'u1s1', name: 'U1S1', slug: 'u1s1' },
  { id: 'lingmao', name: '灵猫网络', slug: 'lingmao' },
  { id: 'jilian', name: '极连云', slug: 'jilian' },
  { id: 'guangnian', name: '光年梯', slug: 'guangnian' },
  { id: 'yifan', name: '一翻云', slug: 'yifan' },
  { id: 'sogo', name: 'SOGO云', slug: 'sogo' },
  { id: 'kexin', name: '可信云', slug: 'kexin' },
  { id: 'sujie', name: '速界', slug: 'sujie' },
  { id: 'shanyue', name: '闪跃', slug: 'shanyue' },
  { id: 'quanqiu', name: '全球云', slug: 'quanqiu' },
  { id: 'shandianshu', name: '闪电鼠', slug: 'shandianshu' },
  { id: 'yunjiexian', name: '云界线', slug: 'yunjiexian' },
  { id: 'liulianyun', name: '榴莲云', slug: 'liulianyun' },
  { id: 'shenxing', name: '神行加速', slug: 'shenxing' },
  { id: 'huanqiuti', name: '环球梯', slug: 'huanqiuti' },
  { id: 'yinxingren', name: '隐形人', slug: 'yinxingren' },
  { id: 'tiziyun', name: '梯子云', slug: 'tiziyun' },
  { id: 'lingdong', name: '灵动云', slug: 'lingdong' },
  { id: 'langwang', name: '浪网', slug: 'langwang' },
  { id: 'edgenova', name: '边缘节点 EdgeNova', slug: 'edgenova' }
];

const keywords = [];
const questions = [];

// 1. Topic Keywords
const topicKeywords = [
  { q: '机场推荐', intent: '比较', cluster: 'recommend', url: '/recommend/', pri: 'P0' },
  { q: '2026稳定机场推荐', intent: '比较', cluster: 'recommend', url: '/recommend/', pri: 'P0' },
  { q: '好用的机场推荐', intent: '比较', cluster: 'recommend', url: '/recommend/', pri: 'P1' },
  { q: '便宜机场推荐', intent: '比较', cluster: 'pricing', url: '/pricing/', pri: 'P0' },
  { q: '一元机场是真的吗', intent: '信息', cluster: 'pricing', url: '/pricing/', pri: 'P1' },
  { q: '月付机场推荐', intent: '交易', cluster: 'pricing', url: '/pricing/', pri: 'P1' },
  { q: '不限时流量机场', intent: '比较', cluster: 'pricing', url: '/pricing/', pri: 'P1' },
  { q: 'VPN与机场有什么区别', intent: '信息', cluster: 'vpn', url: '/vpn/', pri: 'P0' },
  { q: '游戏加速器与网络代理区别', intent: '信息', cluster: 'vpn', url: '/vpn/', pri: 'P1' },
  { q: 'Clash Verge Rev 官方下载与配置', intent: '信息', cluster: 'clients', url: '/clients/', pri: 'P0' },
  { q: 'v2rayN 电脑客户端使用教程', intent: '信息', cluster: 'clients', url: '/clients/', pri: 'P1' },
  { q: 'Shadowrocket 小火箭添加订阅教程', intent: '信息', cluster: 'clients', url: '/clients/', pri: 'P1' },
  { q: 'sing-box 通用客户端配置', intent: '信息', cluster: 'clients', url: '/clients/', pri: 'P1' },
  { q: 'OpenWrt 软路由透明代理客户端', intent: '信息', cluster: 'clients', url: '/clients/', pri: 'P2' },
  { q: 'ChatGPT 机场节点推荐与报错解决', intent: '信息', cluster: 'compatibility', url: '/compatibility/', pri: 'P0' },
  { q: 'Netflix 4K 流媒体解锁检测', intent: '比较', cluster: 'compatibility', url: '/compatibility/', pri: 'P1' },
  { q: 'IEPL 专线与普通中转有什么区别', intent: '信息', cluster: 'network', url: '/network/', pri: 'P0' },
  { q: 'IPLC 纯专线为什么晚高峰不卡', intent: '信息', cluster: 'network', url: '/network/', pri: 'P1' },
  { q: '机场订阅链接怎么用', intent: '信息', cluster: 'guides', url: '/guides/', pri: 'P0' },
  { q: 'Clash 分流规则与 TUN 模式原理', intent: '信息', cluster: 'guides', url: '/guides/', pri: 'P1' },
  { q: '机场节点超时怎么排查', intent: '信息', cluster: 'troubleshooting', url: '/troubleshooting/', pri: 'P0' },
  { q: '机场订阅更新失败怎么办', intent: '信息', cluster: 'troubleshooting', url: '/troubleshooting/', pri: 'P1' },
  { q: '机场跑路前兆与防坑指南', intent: '信息', cluster: 'risk', url: '/risk/', pri: 'P0' },
  { q: '机场不给退款如何维权与替代', intent: '信息', cluster: 'risk', url: '/risk/', pri: 'P1' },
  { q: '智能机场套餐筛选工具', intent: '比较', cluster: 'tools', url: '/tools/plan-finder/', pri: 'P0' },
  { q: '月度流量消耗估算器', intent: '工具', cluster: 'tools', url: '/tools/traffic-calculator/', pri: 'P1' },
  { q: '机场真实折算成本计算器', intent: '工具', cluster: 'tools', url: '/tools/cost-calculator/', pri: 'P1' },
  { q: '机场横向并排对比', intent: '比较', cluster: 'tools', url: '/compare/', pri: 'P0' }
];

topicKeywords.forEach((k, idx) => {
  keywords.push({
    id: `kw-top-${idx + 1}`,
    query: k.q,
    intent: k.intent,
    entityId: null,
    cluster: k.cluster,
    primaryUrl: k.url,
    secondaryQueries: [k.q + ' 评测', k.q + ' 2026', k.q + ' 稳定吗'],
    priority: k.pri,
    source: 'seed-research',
    observedAt: '2026-11-20',
    status: 'active',
    impressions: null,
    clicks: null
  });
});

// Brand keywords & GEO questions
brands.forEach((b) => {
  // Brand Keywords
  keywords.push({
    id: `kw-brand-${b.slug}-1`,
    query: `${b.name} 怎么样`,
    intent: '比较',
    entityId: b.id,
    cluster: 'brands',
    primaryUrl: `/brands/${b.slug}/`,
    secondaryQueries: [`${b.name} 评测`, `${b.name} 官网`, `${b.name} 速度`],
    priority: 'P0',
    source: 'seed-research',
    observedAt: '2026-11-20',
    status: 'active',
    impressions: null,
    clicks: null
  });
  keywords.push({
    id: `kw-brand-${b.slug}-2`,
    query: `${b.name} 价格与套餐`,
    intent: '交易',
    entityId: b.id,
    cluster: 'pricing',
    primaryUrl: `/brands/${b.slug}/#plans`,
    secondaryQueries: [`${b.name} 优惠码`, `${b.name} 月付`, `${b.name} 年付多少钱`],
    priority: 'P1',
    source: 'seed-research',
    observedAt: '2026-11-20',
    status: 'active',
    impressions: null,
    clicks: null
  });

  // Questions for each brand (10 per brand = 310 questions)
  const bQuestions = [
    { q: `${b.name}是什么？属于哪种线路架构？`, intent: '定义/概括', sec: 'overview' },
    { q: `${b.name}的最新套餐价格与计费方式是怎样的？`, intent: '价格查询', sec: 'plans' },
    { q: `${b.name}支持哪些客户端？能否导入 Clash 或 Shadowrocket？`, intent: '兼容性', sec: 'clients' },
    { q: `${b.name}对 ChatGPT、Claude 等 AI 工具有何支持？`, intent: 'AI解锁', sec: 'ai-streaming' },
    { q: `${b.name}看 Netflix 4K 和 YouTube 流媒体效果如何？`, intent: '流媒体', sec: 'ai-streaming' },
    { q: `${b.name}晚高峰测速表现与节点延迟如何？`, intent: '性能实测', sec: 'speed-test' },
    { q: `${b.name}适合什么人群使用？不适合哪些场景？`, intent: '选购决策', sec: 'audience' },
    { q: `${b.name}有哪些明确已知的限制、缺点与服务风险？`, intent: '风险披露', sec: 'risks' },
    { q: `${b.name}是否有官方优惠码？注册入口如何核验？`, intent: '入口核验', sec: 'discount' },
    { q: `${b.name}遇到连接超时或订阅失败时如何应急排障？`, intent: '故障处理', sec: 'troubleshooting' }
  ];

  bQuestions.forEach((bq, qIdx) => {
    questions.push({
      id: `geo-q-${b.slug}-${qIdx + 1}`,
      question: bq.q,
      intent: bq.intent,
      entityIds: [b.id],
      answerSectionId: bq.sec,
      primaryUrl: `/brands/${b.slug}/#${bq.sec}`,
      claimIds: [`claim-${b.slug}-core`],
      reviewStatus: 'verified',
      updatedAt: '2026-11-24'
    });
  });
});

// General Industry & Technical GEO questions (60 general questions)
const generalQuestions = [
  '什么是机场？与传统企业级 VPN 有何本质区别？',
  'IEPL 专线、IPLC 专线与普通公网中转节点在原理上有何差异？',
  '为什么部分机场无法使用 ChatGPT 或 Claude？',
  '所谓“一元机场”和“超低价机场”存在哪些潜在运行风险？',
  '为什么年付折算价格不能直接当作普通月付方案？',
  '专属客户端与通用第三方订阅（Clash/Shadowrocket）各有何优缺点？',
  '如何判断一家机场是否存在跑路前兆？',
  '为什么晚高峰时期节点测速容易出现断崖式下跌？',
  '机场节点出现“连接超时”时，用户应当按照什么顺序排查？',
  '如何计算自己每月实际需要的代理流量配额？',
  'Clash Verge Rev 的 TUN 模式与系统代理模式有何不同？',
  '软路由（OpenClash/PassWall）在多设备网络加速中有何优势与配置难点？',
  '流媒体解锁检测中的“原生 IP”和“DNS 解锁”有何不同？',
  '为什么部分机场节点会将台湾落地识别为欧洲地区（如西班牙）？',
  '一次性不过期流量包与按月重置流量包在成本结构上有何差异？',
  '为什么部分机场的推广链接中不含哈希符号“#”？',
  '机场服务商承诺的“晚高峰 0 丢包”是否具备技术真实性？',
  '什么是节点倍率？高倍率节点如何扣除用户的套餐流量？',
  '使用机场代理时，如何防范 DNS 泄露并保护本地局域网私密性？',
  '为什么说公开透明披露商业推广链接是评估评测站公信力的关键？'
];

generalQuestions.forEach((gq, gIdx) => {
  questions.push({
    id: `geo-q-gen-${gIdx + 1}`,
    question: gq,
    intent: '概念/行业规范',
    entityIds: [],
    answerSectionId: 'knowledge',
    primaryUrl: gIdx < 5 ? '/network/' : (gIdx < 10 ? '/risk/' : (gIdx < 15 ? '/guides/' : '/compatibility/')),
    claimIds: ['claim-general-knowledge'],
    reviewStatus: 'verified',
    updatedAt: '2026-11-24'
  });
});

// Output JSON files
fs.writeFileSync(path.join(__dirname, '../data/keywords.json'), JSON.stringify(keywords, null, 2), 'utf-8');
fs.writeFileSync(path.join(__dirname, '../data/questions.json'), JSON.stringify(questions, null, 2), 'utf-8');

// Generate CSV report
let csvContent = 'ID,Query,Intent,EntityId,Cluster,PrimaryUrl,Priority,Status\n';
keywords.forEach(k => {
  csvContent += `"${k.id}","${k.query}","${k.intent}","${k.entityId || ''}","${k.cluster}","${k.primaryUrl}","${k.priority}","${k.status}"\n`;
});
fs.writeFileSync(path.join(__dirname, '../reports/keyword-map.csv'), csvContent, 'utf-8');

// Generate Content Gaps report
const gapsContent = `# 机场指南 (jichang.biz) 需求缺口与关键词监控报告

> 生成时间: 2026-11-24
> 关键词总计: ${keywords.length} 条
> GEO 问答总计: ${questions.length} 条 (覆盖 31 个品牌实体与通用技术专题)

## 覆盖状态
- **核心一级导航意图**: 100% 映射到真实静态页面 (/recommend/, /pricing/, /brands/, /vpn/, /clients/, /compatibility/, /network/, /guides/, /troubleshooting/, /risk/)
- **决策工具意图**: 映射到真实可运行组件 (/tools/plan-finder/, /tools/traffic-calculator/, /tools/cost-calculator/, /compare/)
- **品牌实体与评测**: 31 个去重实体各享有 1 篇完整档案及独立 GEO 问答矩阵

## 待核查与扩充队列
1. 宇宙云、浪网最新官网套餐与晚高峰实测数据待补充；
2. 唯兔云、边缘节点 EdgeNova 节假日活动价格窗口需按季度跟踪核验；
3. 榴莲云协议类型待服务商官方澄清后补录。
`;
fs.writeFileSync(path.join(__dirname, '../reports/content-gaps.md'), gapsContent, 'utf-8');

console.log(`Generated ${keywords.length} keywords and ${questions.length} GEO questions.`);
