import { getResponsiveScale } from "./responsiveLayout";

export function getStartLogoLayoutMetrics(availableWidth, height) {
  const scale = getResponsiveScale(availableWidth, height);
  const safeWidth = Math.max(availableWidth, 1);
  const logoWidth = Math.min(170 * scale, safeWidth);

  return {
    logoWidth,
    logoHeight: logoWidth * (366 / 1792),
  };
}
