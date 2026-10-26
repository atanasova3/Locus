import { getResponsiveScale } from "./responsiveLayout";

export function getHelloTextLayoutMetrics(width, height) {
  const scale = getResponsiveScale(width, height);
  const isVeryShort = height < 620;

  return {
    titleSize: 64 * scale,
    logoWidth: Math.min(width - 40, 280 * scale),
    logoHeight: 65 * scale,
    subtitleSize: 24 * scale,
    logoMarginTop: isVeryShort ? -2 * scale : 0,
    subtitleMarginTop: 0,
  };
}
