export type DataStatus = 'verified' | 'vendor' | 'historical' | 'conflict' | 'unknown';

export type BillingCycle = 'monthly' | 'quarterly' | 'halfYear' | 'yearly' | 'twoYear' | 'threeYear' | 'oneTime';

export interface PlanItem {
  id: string;
  name: string;
  billingCycle: BillingCycle;
  priceYuan: number;         // 标价（元）
  monthlyEquivalentYuan: number; // 月均折算价格（元/月）
  trafficGB: number;         // 流量（GB）
  resetPolicy: 'monthly' | 'oneTime';
  deviceLimit?: number | null; // 设备上限，null表示不限制
  notes?: string;
  isPopular?: boolean;
}

export interface SpeedTestNode {
  region: string;
  latencyMs: number | null;
  downloadMbps: number | null;
  note?: string;
}

export interface SpeedTestRecord {
  testDate: string;
  isPeak: boolean;
  environment: string;
  dataStatus: DataStatus;
  nodes: SpeedTestNode[];
  summary: string;
}

export interface UnlockMatrix {
  chatgpt: 'supported' | 'partial' | 'unsupported' | 'unknown';
  claude: 'supported' | 'partial' | 'unsupported' | 'unknown';
  gemini: 'supported' | 'partial' | 'unsupported' | 'unknown';
  netflix: 'supported' | 'partial' | 'unsupported' | 'unknown';
  disney: 'supported' | 'partial' | 'unsupported' | 'unknown';
  youtube: 'supported' | 'partial' | 'unsupported' | 'unknown';
  tiktok: 'supported' | 'partial' | 'unsupported' | 'unknown';
  spotify: 'supported' | 'partial' | 'unsupported' | 'unknown';
  hbo: 'supported' | 'partial' | 'unsupported' | 'unknown';
}

export interface BrandEntity {
  id: string;
  slug: string;
  name: string;
  aliases: string[];
  tagline: string;
  launchYear: number | null;
  isPartner: boolean; // 是否为合作品牌（如光速云）
  colorAccent: string; // 品牌主色调
  affiliateUrl: string;
  promoCode: string | null;
  discountSummary: string;
  entryVerified: boolean;
  linkFormatNotes?: string;
  networkType: 'IEPL' | 'IPLC' | 'BGP' | 'Mixed' | 'Direct' | 'Unknown';
  protocols: string[];
  nodeCountSummary: string;
  coverageRegions: string[];
  clientSupport: {
    hasCustomApp: boolean;
    supportsClash: boolean;
    supportsShadowrocket: boolean;
    supportsSingbox: boolean;
    supportsV2ray: boolean;
    thirdPartyImportNotes: string;
  };
  startingPriceMonthlyYuan: number; // 最低折算月门槛
  plans: PlanItem[];
  speedTest: SpeedTestRecord;
  unlockMatrix: UnlockMatrix;
  pros: string[];
  cons: string[];
  riskWarnings: string[];
  targetAudience: string[];
  unsuitableAudience: string[];
  summaryFirstAnswer: string; // Answer-first 核心总结 (80-200字)
  dataStatus: DataStatus;
  observedAt: string;
  verifiedAt: string | null;
  updatedAt: string;
}
