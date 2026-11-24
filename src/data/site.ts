export const SITE_CONFIG = {
  name: '机场指南',
  domain: 'https://jichang.biz',
  description: '面向合法授权使用场景的网络服务选购、套餐对比、品牌实测资料与技术排错决策平台。',
  locale: 'zh-CN',
  author: '机场指南编辑部',
  launchYear: 2026,
  tagline: '中立、透明、有据可循的跨境网络选购决策中心',
  disclaimer: '本站定位为选购决策与技术知识库，不冒充任何品牌官方或独立认证机构。所有商业合作均依法合规披露，不影响评测数据的真实性与风险预警。'
};

// 搜索引擎站长平台安全验证配置 (上线接入时填入各大站长平台提供的正式验证码，无验证码时留空，严禁编造虚假代码)
export const VERIFICATION_CONFIG = {
  google: '', // Google Search Console: <meta name="google-site-verification" content="..." />
  bing: '',   // Bing Webmaster Tools: <meta name="msvalidate.01" content="..." />
  shenma: '', // 神马站长平台: <meta name="shenma-site-verification" content="..." />
  baidu: ''   // 百度搜索资源平台: <meta name="baidu-site-verification" content="..." />
};

export const NAV_ITEMS = [
  { label: '机场推荐', href: '/recommend/', description: '用途、预算与稳定性综合推荐' },
  { label: '价格套餐', href: '/pricing/', description: '便宜、月付、年付与不限时资费对比' },
  { label: '品牌库', href: '/brands/', description: '31 家去重品牌主档案与评测' },
  { label: 'VPN鉴别', href: '/vpn/', description: '企业VPN与网络加速服务对比' },
  { label: '客户端', href: '/clients/', description: '全平台代理软件官方来源与教程' },
  { label: 'AI与流媒体', href: '/compatibility/', description: 'ChatGPT、Claude与Netflix解锁记录' },
  { label: '线路节点', href: '/network/', description: 'IEPL、IPLC专线与BGP拓扑原理' },
  { label: '使用教程', href: '/guides/', description: '订阅导入、TUN模式与分流配置' },
  { label: '故障排查', href: '/troubleshooting/', description: '节点超时、订阅失败与DNS排错' },
  { label: '风险预警', href: '/risk/', description: '跑路预警、服务中断与替代应急方案' }
];

export const TOOL_ITEMS = [
  { label: '品牌深度评测', href: '/reviews/', description: '31家品牌独立客观评分与技术评测' },
  { label: '套餐筛选器', href: '/tools/plan-finder/', description: '按预算、用量与设备精准匹配' },
  { label: '流量估算器', href: '/tools/traffic-calculator/', description: '测算日均与月度实际用量' },
  { label: '成本计算器', href: '/tools/cost-calculator/', description: '折算真实月均费用与每GB单价' },
  { label: '并排对比', href: '/compare/', description: '多品牌参数与实测同屏比对' }
];
