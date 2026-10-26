import { getResponsiveScale } from "./responsiveLayout";

export function getTripCardLayoutMetrics(width, height) {
  const scale = getResponsiveScale(width, height);
  const isTablet = width >= 600;
  const isVeryShort = height < 620;
  const isShort = height < 700;
  const cardWidth = Math.min(220 * scale, width - 40);

  return {
    cardWidth: isTablet ? Math.min(cardWidth, 240) : cardWidth,
    cardHeight: Math.min(270 * scale, height * 0.34),
    cardRadius: 30 * scale,
    titleSize: (isTablet ? 20 : 18) * scale,
    locationSize: 15 * scale,
    ratingSize: 13 * scale,
    cardMarginTop: isVeryShort ? 3 * scale : isShort ? 5 * scale : 10 * scale,
    infoMargin: 10 * scale,
    infoPadding: 12 * scale,
    infoRadius: 20 * scale,
  };
}
