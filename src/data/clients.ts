export interface ClientSoftware {
  id: string;
  name: string;
  slug: string;
  category: 'third-party' | 'custom';
  platforms: ('Windows' | 'Android' | 'iOS' | 'macOS' | 'Linux' | 'OpenWrt')[];
  coreKernel: string;
  protocols: string[];
  keyFeatures: string[];
  officialSourceType: 'GitHub' | 'App Store' | 'Official Site' | 'Docs';
  officialSourceUrl: string;
  isPaid: boolean;
  pricingNote?: string;
  recommendationLevel: 'recommended' | 'alternative' | 'legacy' | 'expert';
  notes: string;
}

export const CLIENT_LIST: ClientSoftware[] = [
  {
    id: 'clash-verge-rev',
    name: 'Clash Verge Rev',
    slug: 'clash-verge-rev',
    category: 'third-party',
    platforms: ['Windows', 'macOS', 'Linux'],
    coreKernel: 'Mihomo (Clash.Meta)',
    protocols: ['Shadowsocks', 'VMess', 'VLESS', 'Trojan', 'Hysteria 2', 'TUIC'],
    keyFeatures: ['TUN 虚拟网卡模式', '可视化规则分流', '订阅自动更新', '多架构原生支持（Intel/Apple Silicon）'],
    officialSourceType: 'GitHub',
    officialSourceUrl: 'https://github.com/clash-verge-rev/clash-verge-rev',
    isPaid: false,
    recommendationLevel: 'recommended',
    notes: '现代桌面端首选客户端，活跃度高，内置 Mihomo 核心支持最新协议与规则扩展。'
  },
  {
    id: 'v2rayn',
    name: 'v2rayN',
    slug: 'v2rayn',
    category: 'third-party',
    platforms: ['Windows', 'macOS', 'Linux'],
    coreKernel: 'Xray / sing-box / Mihomo',
    protocols: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks', 'Socks', 'Hysteria 2'],
    keyFeatures: ['多协议多内核切换', '大批量节点测速与排序', '路由自定义', '轻量低系统占用'],
    officialSourceType: 'GitHub',
    officialSourceUrl: 'https://github.com/2dust/v2rayN',
    isPaid: false,
    recommendationLevel: 'recommended',
    notes: 'Windows 平台老牌调试与节点管理利器，跨核心支持完备，技术排错能力强。'
  },
  {
    id: 'shadowrocket',
    name: 'Shadowrocket（小火箭）',
    slug: 'shadowrocket',
    category: 'third-party',
    platforms: ['iOS'],
    coreKernel: '自研高性能内核',
    protocols: ['Shadowsocks', 'VMess', 'VLESS', 'Trojan', 'Hysteria 2', 'TUIC', 'WireGuard'],
    keyFeatures: ['分流规则与场景策略', '节点延迟排序', '抓包与流量统计', 'iCloud 订阅备份'],
    officialSourceType: 'App Store',
    officialSourceUrl: 'https://apps.apple.com/app/shadowrocket/id932747118',
    isPaid: true,
    pricingNote: '美区 App Store 售价约 $2.99，需外区 Apple ID',
    recommendationLevel: 'recommended',
    notes: 'iOS 普及率最高的网络规则代理软件，性能稳定，对各类机场订阅支持度极高。'
  },
  {
    id: 'v2rayng',
    name: 'v2rayNG',
    slug: 'v2rayng',
    category: 'third-party',
    platforms: ['Android'],
    coreKernel: 'Xray-core',
    protocols: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks', 'Socks'],
    keyFeatures: ['分应用代理（分流黑白名单）', '订阅一键更新', '自定义路由规则', 'Material Design 界面'],
    officialSourceType: 'GitHub',
    officialSourceUrl: 'https://github.com/2dust/v2rayNG',
    isPaid: false,
    recommendationLevel: 'recommended',
    notes: '安卓端主流 Xray 客户端，配置直观，适合日常手机出海与分应用加速。'
  },
  {
    id: 'flclash',
    name: 'FlClash',
    slug: 'flclash',
    category: 'third-party',
    platforms: ['Windows', 'macOS', 'Linux', 'Android'],
    coreKernel: 'Mihomo',
    protocols: ['Shadowsocks', 'VMess', 'VLESS', 'Trojan', 'Hysteria 2'],
    keyFeatures: ['基于 Flutter 的跨平台统一 UI', '极简界面', '规则代理与策略组'],
    officialSourceType: 'GitHub',
    officialSourceUrl: 'https://github.com/chen08209/FlClash',
    isPaid: false,
    recommendationLevel: 'recommended',
    notes: '界面清新现代的跨平台新秀，多端交互体验一致。'
  },
  {
    id: 'hiddify',
    name: 'Hiddify',
    slug: 'hiddify',
    category: 'third-party',
    platforms: ['Windows', 'macOS', 'Linux', 'Android', 'iOS'],
    coreKernel: 'sing-box',
    protocols: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks', 'Hysteria 2', 'TUIC', 'SSH', 'WireGuard'],
    keyFeatures: ['一键智能模式', '全平台覆盖', '全自动节点测试与排序', '无需复杂配置'],
    officialSourceType: 'GitHub',
    officialSourceUrl: 'https://github.com/hiddify/hiddify-app',
    isPaid: false,
    recommendationLevel: 'recommended',
    notes: '基于 sing-box 打造的多协议客户端，零门槛设计对新手非常友好。'
  },
  {
    id: 'karing',
    name: 'Karing',
    slug: 'karing',
    category: 'third-party',
    platforms: ['Windows', 'macOS', 'Linux', 'Android', 'iOS'],
    coreKernel: 'sing-box',
    protocols: ['Clash/V2ray/sing-box 多协议'],
    keyFeatures: ['跨多端适配', '支持导入 Clash/V2ray 等订阅格式', '直观的分流管理'],
    officialSourceType: 'GitHub',
    officialSourceUrl: 'https://github.com/KaringX/karing',
    isPaid: false,
    recommendationLevel: 'recommended',
    notes: '兼容多种订阅格式的新兴 sing-box 客户端，已上架 App Store。'
  },
  {
    id: 'sing-box',
    name: 'sing-box 官方客户端',
    slug: 'sing-box',
    category: 'third-party',
    platforms: ['Windows', 'macOS', 'Linux', 'Android', 'iOS'],
    coreKernel: 'sing-box 原生',
    protocols: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks', 'ShadowTLS', 'Hysteria 2', 'TUIC'],
    keyFeatures: ['次世代通用代理平台', '极低内存占用与高性能', '强大的路由引擎与入站/出站规则'],
    officialSourceType: 'Official Site',
    officialSourceUrl: 'https://sing-box.sagernet.org/',
    isPaid: false,
    recommendationLevel: 'expert',
    notes: '底层架构严谨的高性能核心，适合进阶用户编写原生 JSON 规则。'
  },
  {
    id: 'stash',
    name: 'Stash',
    slug: 'stash',
    category: 'third-party',
    platforms: ['iOS', 'macOS'],
    coreKernel: 'Clash Meta 系',
    protocols: ['Shadowsocks', 'VMess', 'VLESS', 'Trojan', 'Hysteria 2', 'Snell'],
    keyFeatures: ['Clash 风格规则覆写', '策略组定制', '脚本重写', '按需连接与网关模式'],
    officialSourceType: 'App Store',
    officialSourceUrl: 'https://apps.apple.com/app/stash-rule-based-proxy/id1596063349',
    isPaid: true,
    pricingNote: '售价约 $3.99',
    recommendationLevel: 'recommended',
    notes: 'iOS 平台上的 Clash 最佳替代品，规则语法与 Clash 高度兼容。'
  },
  {
    id: 'openclash',
    name: 'OpenClash',
    slug: 'openclash',
    category: 'third-party',
    platforms: ['OpenWrt'],
    coreKernel: 'Mihomo / Clash Meta',
    protocols: ['全部主流协议'],
    keyFeatures: ['家庭/企业全屋透明网关', 'DNS 污染消除', '流媒体与游戏策略分流', '自动订阅更新'],
    officialSourceType: 'GitHub',
    officialSourceUrl: 'https://github.com/vernesong/OpenClash',
    isPaid: false,
    recommendationLevel: 'recommended',
    notes: '软路由/OpenWrt 环境下最主流的透明代理插件，功能极其丰富。'
  },
  {
    id: 'passwall2',
    name: 'PassWall 2',
    slug: 'passwall2',
    category: 'third-party',
    platforms: ['OpenWrt'],
    coreKernel: 'Xray / sing-box / Mihomo',
    protocols: ['VLESS', 'Trojan', 'Hysteria 2', 'SS', 'VMess'],
    keyFeatures: ['多节点负载均衡与分流', 'DNS 智能分流', 'TCP/UDP 独立分流策略'],
    officialSourceType: 'GitHub',
    officialSourceUrl: 'https://github.com/xiaorouji/openwrt-passwall',
    isPaid: false,
    recommendationLevel: 'recommended',
    notes: '软路由平台上以稳定低资源占用著称的多核心分流代理工具。'
  },
  {
    id: 'nikki',
    name: 'Nikki (原 ShellCrash / Mihomo LuCI)',
    slug: 'nikki',
    category: 'third-party',
    platforms: ['OpenWrt'],
    coreKernel: 'Mihomo',
    protocols: ['主流协议全覆盖'],
    keyFeatures: ['现代 LuCI 界面', '深度适配 OpenWrt 24.10+', '精简高效'],
    officialSourceType: 'GitHub',
    officialSourceUrl: 'https://github.com/morytyann/OpenWrt-nikki',
    isPaid: false,
    recommendationLevel: 'recommended',
    notes: '面向新版本 OpenWrt 系统的现代 Mihomo 客户端。'
  }
];
