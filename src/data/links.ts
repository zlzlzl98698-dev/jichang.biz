import { BRANDS } from './brands';

export interface AffiliateLinkInfo {
  brandId: string;
  brandName: string;
  url: string;
  promoCode: string | null;
  discountNote: string;
  isPartner: boolean;
  disclosureText: string;
  rel: string;
  target: string;
}

export const GLOBAL_DISCLOSURE = '【商业透明度声明】本站包含第三方推广赞助链接。若您通过链接注册或订阅，本站可能会获得一定佣金支持，但这绝不影响我们对品牌价格、稳定性、数据缺口及风险提示的独立客观评估。若无确凿凭证，本站不承诺推广链接对最终价格产生额外溢价或折让。';

export function getAffiliateLink(brandId: string): AffiliateLinkInfo | null {
  const brand = BRANDS.find(b => b.id === brandId || b.slug === brandId);
  if (!brand || !brand.affiliateUrl) return null;

  return {
    brandId: brand.id,
    brandName: brand.name,
    url: brand.affiliateUrl,
    promoCode: brand.promoCode,
    discountNote: brand.discountSummary,
    isPartner: brand.isPartner,
    disclosureText: brand.isPartner
      ? '（合作品牌商业展示：点击将跳转至光速云官方注册页面。本站设有商业合作位，但评测指标与证据数据严格保持独立）'
      : '（含推广链接：通过此链接注册可能为本站带来运营佣金，感谢您的支持）',
    rel: 'nofollow sponsored noopener',
    target: '_blank'
  };
}
