import * as fs from 'fs';
import * as path from 'path';
import { BRANDS } from '../src/data/brands';

// Simple pinyin helper or romanizer for common keywords
function getPinyin(str: string): string {
  // basic transliteration map for common terms
  const map: Record<string, string> = {
    '机场': 'jichang',
    '推荐': 'tuijian',
    '评测': 'pingce',
    '排行': 'paihang',
    '靠谱': 'kaopu',
    '稳定': 'wending',
    '便宜': 'pianyi',
    '一元': 'yiyuan',
    '月付': 'yuefu',
    '不限时': 'buxianshi',
    '光速云': 'guangsu-yun',
    '微风': 'weifeng',
    '暮光': 'muguang',
    '大佬云': 'dalaoyun',
    '星岛梦': 'xingdaomeng',
    '二猫': 'ermao',
    '闪电鼠': 'shandianshu',
    '唯兔': 'weitu',
    '飞猫': 'feimao',
    '萤火虫': 'yinghuochong',
    '跑路': 'paolu',
    '节点': 'jiedian',
    '超时': 'chaoshi',
    '订阅': 'dingyue',
    '更新': 'gengxin',
    '失败': 'shibai',
    '专线': 'zhuanxian',
    '解锁': 'jiesuo',
    '教程': 'jiaocheng',
    '对比': 'duibi'
  };
  let res = str.toLowerCase();
  for (const [k, v] of Object.entries(map)) {
    res = res.replace(new RegExp(k, 'g'), v + '-');
  }
  return res.replace(/[^a-z0-9-]+/g, '').replace(/-+/g, '-').replace(/^-|-$/g, '') || 'keyword';
}

interface LongtailRow {
  keyword_id: string;
  keyword: string;
  pinyin: string;
  cluster_l1: string;
  cluster_l2: string;
  intent: 'Informational' | 'How-to' | 'Troubleshooting' | 'Comparison' | 'Commercial' | 'Navigational' | 'Transactional';
  search_volume_tier: 'High' | 'Medium' | 'Low' | 'Longtail';
  competition_tier: 'High' | 'Medium' | 'Low';
  target_url: string;
  mapped_entity: string;
  status: 'active' | 'priority' | 'candidate';
}

const longtailKeywords: LongtailRow[] = [];
let kwIndex = 1;
function addKw(row: Omit<LongtailRow, 'keyword_id' | 'pinyin'>) {
  longtailKeywords.push({
    keyword_id: `kw-lt-${String(kwIndex++).padStart(4, '0')}`,
    pinyin: getPinyin(row.keyword),
    ...row
  });
}

// 1. Generate brand-related longtails for 31 brands
BRANDS.forEach(brand => {
  const slug = brand.slug;
  const name = brand.name;
  
  addKw({
    keyword: `${name}怎么样`,
    cluster_l1: 'reviews',
    cluster_l2: slug,
    intent: 'Informational',
    search_volume_tier: brand.isPartner ? 'High' : 'Medium',
    competition_tier: 'Medium',
    target_url: `/reviews/${slug}/`,
    mapped_entity: brand.id,
    status: 'active'
  });

  addKw({
    keyword: `${name}评测2026`,
    cluster_l1: 'reviews',
    cluster_l2: slug,
    intent: 'Comparison',
    search_volume_tier: brand.isPartner ? 'High' : 'Medium',
    competition_tier: 'Medium',
    target_url: `/reviews/${slug}/`,
    mapped_entity: brand.id,
    status: 'active'
  });

  addKw({
    keyword: `${name}测速与延迟实测`,
    cluster_l1: 'reviews',
    cluster_l2: slug,
    intent: 'Informational',
    search_volume_tier: 'Medium',
    competition_tier: 'Low',
    target_url: `/reviews/${slug}/#performance`,
    mapped_entity: brand.id,
    status: 'active'
  });

  addKw({
    keyword: `${name}优缺点分析适合谁`,
    cluster_l1: 'reviews',
    cluster_l2: slug,
    intent: 'Comparison',
    search_volume_tier: 'Low',
    competition_tier: 'Low',
    target_url: `/reviews/${slug}/#pros-cons`,
    mapped_entity: brand.id,
    status: 'active'
  });

  addKw({
    keyword: `${name}官网入口核验`,
    cluster_l1: 'brands',
    cluster_l2: slug,
    intent: 'Navigational',
    search_volume_tier: 'High',
    competition_tier: 'High',
    target_url: `/brands/${slug}/`,
    mapped_entity: brand.id,
    status: 'active'
  });

  addKw({
    keyword: `${name}最新优惠码与套餐价格`,
    cluster_l1: 'brands',
    cluster_l2: slug,
    intent: 'Transactional',
    search_volume_tier: 'Medium',
    competition_tier: 'Medium',
    target_url: `/brands/${slug}/#pricing`,
    mapped_entity: brand.id,
    status: 'active'
  });

  addKw({
    keyword: `${name}靠谱吗会不会跑路`,
    cluster_l1: 'reviews',
    cluster_l2: slug,
    intent: 'Informational',
    search_volume_tier: 'Medium',
    competition_tier: 'Low',
    target_url: `/reviews/${slug}/#stability`,
    mapped_entity: brand.id,
    status: 'active'
  });

  addKw({
    keyword: `${name}支持ChatGPT和Netflix吗`,
    cluster_l1: 'reviews',
    cluster_l2: slug,
    intent: 'Informational',
    search_volume_tier: 'Medium',
    competition_tier: 'Low',
    target_url: `/reviews/${slug}/#compatibility`,
    mapped_entity: brand.id,
    status: 'active'
  });

  addKw({
    keyword: `${name}Clash订阅导入教程`,
    cluster_l1: 'guides',
    cluster_l2: 'clash-verge-rev-tutorial',
    intent: 'How-to',
    search_volume_tier: 'Low',
    competition_tier: 'Low',
    target_url: `/guides/clash-verge-rev-tutorial/`,
    mapped_entity: brand.id,
    status: 'active'
  });

  addKw({
    keyword: `${name}替代机场有哪些`,
    cluster_l1: 'compare',
    cluster_l2: 'alternatives',
    intent: 'Comparison',
    search_volume_tier: 'Low',
    competition_tier: 'Low',
    target_url: `/reviews/${slug}/#alternatives`,
    mapped_entity: brand.id,
    status: 'active'
  });
});

// 2. 20 Matchups longtail queries
const matchups = [
  ['guangsu', 'muguang', '光速云', '暮光云'],
  ['feimao', 'weifeng', '飞猫云', '微风网络'],
  ['weitu', 'firefly', '唯兔云', 'Firefly萤火虫'],
  ['jilian', 'guangnian', '极连快线', '光年网络'],
  ['dalaoyun', 'shandianshu', '大佬云', '闪电鼠'],
  ['sogo', 'yinxingren', 'SogoCloud', '隐形人加速器'],
  ['xingdaomeng', 'ermao', '星岛梦', '二猫云'],
  ['u1s1', 'sujie', 'U1S1', '速捷网络'],
  ['guangsu', 'weitu', '光速云', '唯兔云'],
  ['muguang', 'ermao', '暮光云', '二猫云'],
  ['feimao', 'lingmao', '飞猫云', '灵猫云'],
  ['weifeng', 'jilian', '微风网络', '极连快线'],
  ['shandianshu', 'yunjiexian', '闪电鼠', '云界线'],
  ['dalaoyun', 'liulianyun', '大佬云', '榴莲云'],
  ['xingdaomeng', 'tiziyun', '星岛梦', '梯子云'],
  ['sujie', 'kexin', '速捷网络', '可信网络'],
  ['shanyue', 'firefly', '山岳网络', 'Firefly萤火虫'],
  ['quanqiu', 'sogo', '环球梯', 'SogoCloud'],
  ['shenxing', 'guangnian', '神行网络', '光年网络'],
  ['lingdong', 'edgenova', '灵动云', 'EdgeNova']
];

matchups.forEach(([b1, b2, n1, n2]) => {
  const matchupKey = `${b1}-vs-${b2}`;
  addKw({
    keyword: `${n1}和${n2}哪个好`,
    cluster_l1: 'compare',
    cluster_l2: matchupKey,
    intent: 'Comparison',
    search_volume_tier: 'Medium',
    competition_tier: 'Low',
    target_url: `/compare/${matchupKey}/`,
    mapped_entity: `${b1},${b2}`,
    status: 'active'
  });

  addKw({
    keyword: `${n1}对比${n2}延迟与晚高峰稳定性`,
    cluster_l1: 'compare',
    cluster_l2: matchupKey,
    intent: 'Comparison',
    search_volume_tier: 'Low',
    competition_tier: 'Low',
    target_url: `/compare/${matchupKey}/`,
    mapped_entity: `${b1},${b2}`,
    status: 'active'
  });
});

// 3. Guides & Tutorials longtails
const guideArticles = [
  { slug: 'clash-verge-rev-tutorial', title: 'Clash Verge Rev 教程', kws: ['Clash Verge Rev使用教程', 'Clash Verge Rev安装与订阅导入', 'Clash Verge Rev配置规则模式', 'Clash Verge Rev Mac安装打不开'] },
  { slug: 'shadowrocket-setup', title: 'Shadowrocket 小火箭配置', kws: ['小火箭添加节点教程', 'Shadowrocket订阅导入失败', 'Shadowrocket分流规则配置', 'iOS小火箭节点超时'] },
  { slug: 'tun-mode-explained', title: 'TUN 虚拟网卡模式', kws: ['TUN模式是什么意思', 'Clash开启TUN模式没网', 'TUN模式与系统代理区别', '游戏代理怎么开TUN'] },
  { slug: 'rule-routing-guide', title: '分流规则原理', kws: ['Clash分流规则怎么写', 'Rule直连与代理分流设置', '如何让国内网站不走代理', '自定义机场分流规则'] },
  { slug: 'v2rayn-windows-guide', title: 'v2rayN Windows 指南', kws: ['v2rayN使用教程2026', 'v2rayN导入VLESS节点', 'v2rayN设置系统代理无反应', 'v2rayN怎么开全局'] },
  { slug: 'openclash-router-guide', title: 'OpenClash 软路由配置', kws: ['OpenClash旁路由设置', 'OpenClash透明代理DNS配置', '软路由OpenClash节点无速度', 'OpenClash更新内核教程'] },
  { slug: 'safe-subscription-management', title: '订阅安全与防泄露', kws: ['机场订阅链接泄露怎么办', '节点订阅被蹭网解决', '自建订阅转换安全吗', '如何重置机场订阅TOKEN'] }
];

guideArticles.forEach(g => {
  g.kws.forEach(k => {
    addKw({
      keyword: k,
      cluster_l1: 'guides',
      cluster_l2: g.slug,
      intent: 'How-to',
      search_volume_tier: 'Medium',
      competition_tier: 'Low',
      target_url: `/guides/${g.slug}/`,
      mapped_entity: 'clash',
      status: 'active'
    });
  });
});

// 4. Troubleshooting longtails
const troubleArticles = [
  { slug: 'node-timeout', title: '节点全部超时', kws: ['机场节点全部超时不可用', '节点延迟测试全是Timeout', '为什么节点突然全部红了', '节点超时是不是机场跑路了'] },
  { slug: 'subscription-update-failed', title: '订阅更新失败', kws: ['Clash订阅更新失败Network Error', '小火箭更新订阅提示解析错误', '订阅链接浏览器能打开软件打不开', '机场更新订阅403错误'] },
  { slug: 'connected-no-internet', title: '连上但无法上网', kws: ['代理连上了但是网页打不开', 'Clash显示有速度但没有网络', '节点测试通过但无法访问Google', '连上梯子微信断网怎么解决'] },
  { slug: 'dns-leak-and-pollution', title: 'DNS 污染与泄漏', kws: ['DNS泄漏怎么测试', '代理软件防DNS污染设置', '国外网站解析成国内IP怎么修复', 'DoH与DoT安全配置'] },
  { slug: 'port-conflict-7890', title: '7890 端口冲突', kws: ['端口7890被占用怎么解决', 'Clash提示port 7890 occupied', '修改Clash混合代理端口', 'Windows关闭占用7890端口的进程'] },
  { slug: 'ai-access-denied-1020', title: 'AI 访问受限 1020', kws: ['ChatGPT提示Error 1020 Access Denied', 'Claude显示App unavailable in region', '解决OpenAI屏蔽机房IP', '访问ChatGPT节点怎么选'] },
  { slug: 'system-proxy-reset', title: '系统代理未关闭打不开网页', kws: ['关掉代理后电脑断网', '关闭Clash后浏览器打不开网页', '重置Windows系统代理设置', '解决关闭梯子无法访问国内网站'] }
];

troubleArticles.forEach(t => {
  t.kws.forEach(k => {
    addKw({
      keyword: k,
      cluster_l1: 'troubleshooting',
      cluster_l2: t.slug,
      intent: 'Troubleshooting',
      search_volume_tier: 'High',
      competition_tier: 'Low',
      target_url: `/troubleshooting/${t.slug}/`,
      mapped_entity: 'troubleshooting',
      status: 'active'
    });
  });
});

// 5. Network & Compatibility & Risk longtails
const otherL3 = [
  { slug: 'iepl-vs-iplc', l1: 'network', kws: ['IEPL和IPLC的区别是什么', '内网专线和公网中转区别', '为什么专线机场晚高峰不卡', '游戏加速器用IEPL还是IPLC'] },
  { slug: 'latency-jitter-packet-loss', l1: 'network', kws: ['网络延迟与抖动丢包率怎么看', '晚高峰丢包严重的原因', 'Ping值低但是看视频卡顿', '如何用MTR诊断网络节点'] },
  { slug: 'rate-multiplier-explained', l1: 'network', kws: ['机场流量倍率是什么意思', '高倍率节点跑流量太快', '3倍率和0.1倍率节点区别', '如何避免流量倍率陷阱'] },
  { slug: 'residential-ip-truth', l1: 'network', kws: ['原生住宅IP真假辨别', '机房IP和家庭宽带IP区别', '跨境电商防关联原生IP', '原生IP能解锁奈飞吗'] },
  { slug: 'chatgpt-node-guide', l1: 'compatibility', kws: ['支持ChatGPT的机场节点推荐', 'ChatGPT对节点IP的要求', '为什么有的节点打不开OpenAI', 'ChatGPT注册干净IP推荐'] },
  { slug: 'claude-clean-ip', l1: 'compatibility', kws: ['Claude可用节点挑选技巧', 'Claude封号与IP纯净度', '独享原生IP访问Claude', 'Claude网页版提示地区不支持'] },
  { slug: 'netflix-4k-unlock', l1: 'compatibility', kws: ['奈飞4K原生解锁机场', 'Netflix提示使用了代理/解锁失败', '流媒体解锁DNS中转原理', '非自制剧解锁是什么意思'] },
  { slug: 'tiktok-crossborder-setup', l1: 'compatibility', kws: ['TikTok跨境电商专用网络环境', 'TikTok零播放与节点IP黑名单', '美国住宅IP运营TikTok', '手机伪装度与网络环境配置'] },
  { slug: 'airport-runaway-signs', l1: 'risk', kws: ['机场跑路前兆有哪些', '怎么判断机场是不是快跑路了', '终身套餐能买吗', 'TG群全员禁言是不是跑路'] },
  { slug: 'dual-airport-redundancy', l1: 'risk', kws: ['双机场备份方案怎么配置', '主备机场自动故障切换', '防止一家机场跑路断网配置', '高可用双订阅容灾技巧'] },
  { slug: 'refund-terms-analysis', l1: 'risk', kws: ['机场买错可以退款吗', '机场服务条款退款争议', '支付宝微信付款如何维权', '虚拟货币付款不可逆风险'] }
];

otherL3.forEach(o => {
  o.kws.forEach(k => {
    addKw({
      keyword: k,
      cluster_l1: o.l1,
      cluster_l2: o.slug,
      intent: 'Informational',
      search_volume_tier: 'Medium',
      competition_tier: 'Low',
      target_url: `/${o.l1}/${o.slug}/`,
      mapped_entity: o.l1,
      status: 'active'
    });
  });
});

// 6. Level 2 Topic Hubs & Level 1 Hubs longtails
const hubKws = [
  // recommend
  { k: '2026综合性能最好的机场', l1: 'recommend', l2: 'rankings', u: '/recommend/rankings/', i: 'Comparison' },
  { k: '真正稳定靠谱的专线机场推荐', l1: 'recommend', l2: 'reliable', u: '/recommend/reliable/', i: 'Comparison' },
  { k: '晚高峰抗抖动稳定机场推荐', l1: 'recommend', l2: 'stable', u: '/recommend/stable/', i: 'Comparison' },
  { k: '小白新手一键翻墙机场推荐', l1: 'recommend', l2: 'beginner', u: '/recommend/beginner/', i: 'Comparison' },
  { k: '平价高性价比学生党机场推荐', l1: 'recommend', l2: 'cost-effective', u: '/recommend/cost-effective/', i: 'Comparison' },
  // pricing
  { k: '便宜好用机场推荐月付几块钱', l1: 'pricing', l2: 'cheap', u: '/pricing/cheap/', i: 'Commercial' },
  { k: '一元机场靠谱吗真实测速', l1: 'pricing', l2: '1-yuan', u: '/pricing/1-yuan/', i: 'Commercial' },
  { k: '支持月付防跑路机场推荐', l1: 'pricing', l2: 'monthly', u: '/pricing/monthly/', i: 'Commercial' },
  { k: '不限时不过期流量包机场', l1: 'pricing', l2: 'non-expiring', u: '/pricing/non-expiring/', i: 'Commercial' },
  { k: '性价比最高的专线机场梯队', l1: 'pricing', l2: 'cost-performance', u: '/pricing/cost-performance/', i: 'Commercial' },
  // vpn
  { k: '好用的正规VPN推荐指南', l1: 'vpn', l2: 'recommend', u: '/vpn/recommend/', i: 'Comparison' },
  { k: '免费VPN软件安全吗有木马吗', l1: 'vpn', l2: 'free', u: '/vpn/free/', i: 'Informational' },
  { k: '手机安卓苹果一键连接VPN', l1: 'vpn', l2: 'mobile', u: '/vpn/mobile/', i: 'How-to' },
  { k: '游戏加速器和机场节点有什么区别', l1: 'vpn', l2: 'gaming', u: '/vpn/gaming/', i: 'Informational' }
];

hubKws.forEach(h => {
  addKw({
    keyword: h.k,
    cluster_l1: h.l1,
    cluster_l2: h.l2,
    intent: h.i as any,
    search_volume_tier: 'High',
    competition_tier: 'Medium',
    target_url: h.u,
    mapped_entity: h.l1,
    status: 'active'
  });
});

console.log(`Generated ${longtailKeywords.length} longtail keywords.`);

// Ensure output dir
const outDir = path.resolve('data/keywords');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Write longtail-master.csv
const csvHeaders = 'keyword_id,keyword,pinyin,cluster_l1,cluster_l2,intent,search_volume_tier,competition_tier,target_url,mapped_entity,status';
const csvLines = [csvHeaders];
longtailKeywords.forEach(k => {
  csvLines.push(`"${k.keyword_id}","${k.keyword}","${k.pinyin}","${k.cluster_l1}","${k.cluster_l2}","${k.intent}","${k.search_volume_tier}","${k.competition_tier}","${k.target_url}","${k.mapped_entity}","${k.status}"`);
});
fs.writeFileSync(path.join(outDir, 'longtail-master.csv'), csvLines.join('\n'), 'utf8');

// 2. Write article-keyword-map.json
interface ArticleKeywordEntry {
  article_id: string;
  title: string;
  target_url: string;
  cluster_l1: string;
  cluster_l2: string;
  intent: string;
  primary_keyword: string;
  secondary_keywords: string[];
  semantic_variations: string[];
  lsi_keywords: string[];
  word_count_target: number;
  status: 'published' | 'active';
}

const articleMap: Record<string, ArticleKeywordEntry> = {};

// 31 Brand Reviews
BRANDS.forEach(b => {
  const url = `/reviews/${b.slug}/`;
  articleMap[url] = {
    article_id: `art-review-${b.slug}`,
    title: `${b.name} 深度评测报告 (2026最新实测与优缺点)`,
    target_url: url,
    cluster_l1: 'reviews',
    cluster_l2: b.slug,
    intent: 'Comparison',
    primary_keyword: `${b.name}怎么样`,
    secondary_keywords: [`${b.name}评测2026`, `${b.name}测速实测`, `${b.name}优缺点`, `${b.name}适合谁`],
    semantic_variations: [`${b.name}好用吗`, `${b.name}稳定不稳定`, `${b.name}跑路风险`],
    lsi_keywords: [b.networkType, '晚高峰丢包', '流媒体解锁', '套餐性价比', '自研客户端'],
    word_count_target: b.isPartner ? 10000 : 4500,
    status: 'published'
  };

  const brandUrl = `/brands/${b.slug}/`;
  articleMap[brandUrl] = {
    article_id: `art-brand-${b.slug}`,
    title: `${b.name} 官网入口核验、最新套餐与优惠码`,
    target_url: brandUrl,
    cluster_l1: 'brands',
    cluster_l2: b.slug,
    intent: 'Commercial',
    primary_keyword: `${b.name}官网入口`,
    secondary_keywords: [`${b.name}优惠码`, `${b.name}套餐价格`, `${b.name}注册`],
    semantic_variations: [`${b.name}最新网址`, `${b.name}打折活动`],
    lsi_keywords: ['官方正版', 'AFF透明披露', '套餐周期', 'VLESS协议'],
    word_count_target: 3500,
    status: 'published'
  };
});

// 20 Matchups
matchups.forEach(([b1, b2, n1, n2]) => {
  const matchupKey = `${b1}-vs-${b2}`;
  const url = `/compare/${matchupKey}/`;
  articleMap[url] = {
    article_id: `art-compare-${matchupKey}`,
    title: `${n1} vs ${n2} 深度横向评测与选购对比`,
    target_url: url,
    cluster_l1: 'compare',
    cluster_l2: matchupKey,
    intent: 'Comparison',
    primary_keyword: `${n1}和${n2}哪个好`,
    secondary_keywords: [`${n1}对比${n2}`, `${n1}与${n2}延迟`, `两家机场区别`],
    semantic_variations: [`买${n1}还是买${n2}`, `${n1}和${n2}谁更稳定`],
    lsi_keywords: ['专线质量', '晚高峰抖动', '流媒体解锁差异', '单G价格对比'],
    word_count_target: 4000,
    status: 'published'
  };
});

// L3 Guides, Troubleshooting, Compatibility, Network, Risk
const l3All = [
  ...guideArticles.map(g => ({ ...g, l1: 'guides', intent: 'How-to' })),
  ...troubleArticles.map(t => ({ ...t, l1: 'troubleshooting', intent: 'Troubleshooting' })),
  ...otherL3.map(o => ({ ...o, title: o.slug, intent: 'Informational' }))
];

l3All.forEach(a => {
  const url = `/${a.l1}/${a.slug}/`;
  articleMap[url] = {
    article_id: `art-${a.l1}-${a.slug}`,
    title: a.title,
    target_url: url,
    cluster_l1: a.l1,
    cluster_l2: a.slug,
    intent: a.intent,
    primary_keyword: a.kws[0],
    secondary_keywords: a.kws.slice(1),
    semantic_variations: [a.kws[0] + '怎么做', a.kws[0] + '解决办法'],
    lsi_keywords: ['代理节点', '配置错误', '网络协议', '排障步骤'],
    word_count_target: 3000,
    status: 'published'
  };
});

// Level 2 Hubs
hubKws.forEach(h => {
  articleMap[h.u] = {
    article_id: `hub-l2-${h.l1}-${h.l2}`,
    title: h.k,
    target_url: h.u,
    cluster_l1: h.l1,
    cluster_l2: h.l2,
    intent: h.i,
    primary_keyword: h.k,
    secondary_keywords: [h.k + '实测', h.k + '选购指南'],
    semantic_variations: [h.k + '哪个好', h.k + '最新排名'],
    lsi_keywords: ['IEPL专线', '丢包率', 'SLA保障', '月付防跑路'],
    word_count_target: 4500,
    status: 'published'
  };
});

fs.writeFileSync(path.join(outDir, 'article-keyword-map.json'), JSON.stringify(articleMap, null, 2), 'utf8');

// 3. Write cluster-map.json
const clusterMap = {
  version: '1.0.0',
  updated_at: '2026-11-24',
  total_clusters_l1: 12,
  clusters: [
    {
      id: 'recommend',
      name: '机场推荐',
      url: '/recommend/',
      subclusters: [
        { id: 'rankings', name: '机场排行榜', url: '/recommend/rankings/' },
        { id: 'reliable', name: '靠谱机场', url: '/recommend/reliable/' },
        { id: 'stable', name: '稳定机场', url: '/recommend/stable/' },
        { id: 'beginner', name: '小白新手入门', url: '/recommend/beginner/' },
        { id: 'cost-effective', name: '高性价比精选', url: '/recommend/cost-effective/' }
      ]
    },
    {
      id: 'pricing',
      name: '价格与套餐',
      url: '/pricing/',
      subclusters: [
        { id: 'cheap', name: '便宜机场', url: '/pricing/cheap/' },
        { id: '1-yuan', name: '一元机场', url: '/pricing/1-yuan/' },
        { id: 'monthly', name: '月付周期', url: '/pricing/monthly/' },
        { id: 'non-expiring', name: '不限时流量包', url: '/pricing/non-expiring/' },
        { id: 'cost-performance', name: '极致性价比', url: '/pricing/cost-performance/' }
      ]
    },
    {
      id: 'reviews',
      name: '品牌深度评测',
      url: '/reviews/',
      subclusters: BRANDS.map(b => ({
        id: b.slug,
        name: `${b.name} 评测`,
        url: `/reviews/${b.slug}/`,
        mapped_entity: b.id
      }))
    },
    {
      id: 'brands',
      name: '品牌档案与官网核验',
      url: '/brands/',
      subclusters: BRANDS.map(b => ({
        id: b.slug,
        name: `${b.name} 档案`,
        url: `/brands/${b.slug}/`,
        mapped_entity: b.id
      }))
    },
    {
      id: 'compare',
      name: '竞品对比决策',
      url: '/compare/',
      subclusters: matchups.map(([b1, b2, n1, n2]) => ({
        id: `${b1}-vs-${b2}`,
        name: `${n1} vs ${n2}`,
        url: `/compare/${b1}-vs-${b2}/`
      }))
    },
    {
      id: 'guides',
      name: '使用教程',
      url: '/guides/',
      subclusters: guideArticles.map(g => ({
        id: g.slug,
        name: g.title,
        url: `/guides/${g.slug}/`
      }))
    },
    {
      id: 'troubleshooting',
      name: '故障排查',
      url: '/troubleshooting/',
      subclusters: troubleArticles.map(t => ({
        id: t.slug,
        name: t.title,
        url: `/troubleshooting/${t.slug}/`
      }))
    },
    {
      id: 'compatibility',
      name: 'AI与流媒体兼容',
      url: '/compatibility/',
      subclusters: [
        { id: 'chatgpt-node-guide', name: 'ChatGPT 节点选择', url: '/compatibility/chatgpt-node-guide/' },
        { id: 'claude-clean-ip', name: 'Claude 纯净 IP', url: '/compatibility/claude-clean-ip/' },
        { id: 'netflix-4k-unlock', name: 'Netflix 4K 解锁', url: '/compatibility/netflix-4k-unlock/' },
        { id: 'tiktok-crossborder-setup', name: 'TikTok 跨境网络', url: '/compatibility/tiktok-crossborder-setup/' }
      ]
    },
    {
      id: 'network',
      name: '线路与性能',
      url: '/network/',
      subclusters: [
        { id: 'iepl-vs-iplc', name: 'IEPL 与 IPLC 对比', url: '/network/iepl-vs-iplc/' },
        { id: 'latency-jitter-packet-loss', name: '时延抖动与丢包', url: '/network/latency-jitter-packet-loss/' },
        { id: 'rate-multiplier-explained', name: '倍率套路解析', url: '/network/rate-multiplier-explained/' },
        { id: 'residential-ip-truth', name: '原生住宅 IP 真相', url: '/network/residential-ip-truth/' }
      ]
    },
    {
      id: 'risk',
      name: '风险与替代',
      url: '/risk/',
      subclusters: [
        { id: 'airport-runaway-signs', name: '跑路前兆识别', url: '/risk/airport-runaway-signs/' },
        { id: 'dual-airport-redundancy', name: '双机场容灾配置', url: '/risk/dual-airport-redundancy/' },
        { id: 'refund-terms-analysis', name: '退款争议处理', url: '/risk/refund-terms-analysis/' }
      ]
    },
    {
      id: 'clients',
      name: '客户端软件',
      url: '/clients/',
      subclusters: [
        { id: 'clash-verge-rev', name: 'Clash Verge Rev', url: '/clients/clash-verge-rev/' },
        { id: 'v2rayn', name: 'v2rayN', url: '/clients/v2rayn/' },
        { id: 'shadowrocket', name: 'Shadowrocket', url: '/clients/shadowrocket/' },
        { id: 'sing-box', name: 'sing-box', url: '/clients/sing-box/' },
        { id: 'openclash', name: 'OpenClash', url: '/clients/openclash/' }
      ]
    },
    {
      id: 'vpn',
      name: 'VPN与加速器',
      url: '/vpn/',
      subclusters: [
        { id: 'recommend', name: '正规VPN推荐', url: '/vpn/recommend/' },
        { id: 'free', name: '免费VPN警示', url: '/vpn/free/' },
        { id: 'mobile', name: '手机VPN设置', url: '/vpn/mobile/' },
        { id: 'gaming', name: '游戏加速器辨析', url: '/vpn/gaming/' }
      ]
    }
  ]
};

fs.writeFileSync(path.join(outDir, 'cluster-map.json'), JSON.stringify(clusterMap, null, 2), 'utf8');

// 4. Write content-priority.csv
const priorityHeaders = 'id,title,type,cluster_l1,cluster_l2,priority,commercial_value,difficulty,word_count_target,release_batch,target_url,status';
const priorityLines = [priorityHeaders];

Object.values(articleMap).forEach(a => {
  const isPartner = a.target_url.includes('guangsu');
  const priority = isPartner || a.cluster_l1 === 'recommend' || a.cluster_l1 === 'pricing' ? 'P0' : (a.cluster_l1 === 'reviews' || a.cluster_l1 === 'compare' ? 'P1' : 'P2');
  const commercial = a.cluster_l1 === 'brands' || a.cluster_l1 === 'reviews' || a.cluster_l1 === 'pricing' ? 'High' : (a.cluster_l1 === 'recommend' || a.cluster_l1 === 'compare' ? 'Medium' : 'Low');
  const diff = a.word_count_target > 5000 ? 'Hard' : (a.word_count_target > 3000 ? 'Medium' : 'Easy');
  const batch = priority === 'P0' ? 'Batch-1' : (priority === 'P1' ? 'Batch-2' : 'Batch-3');

  priorityLines.push(`"${a.article_id}","${a.title.replace(/"/g, '""')}","${a.cluster_l1}","${a.cluster_l1}","${a.cluster_l2}","${priority}","${commercial}","${diff}","${a.word_count_target}","${batch}","${a.target_url}","${a.status}"`);
});

fs.writeFileSync(path.join(outDir, 'content-priority.csv'), priorityLines.join('\n'), 'utf8');
console.log('Successfully written all 4 keyword artifacts to data/keywords/');
