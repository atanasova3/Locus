import { getResponsiveScale } from "./responsiveLayout";

export function getAddTripCardLayoutMetrics(width, height) {
  const scale = getResponsiveScale(width, height);
  const isTablet = width >= 600;
  const isVeryShort = height < 620;
  const isShort = height < 700;
  const cardWidth = Math.min(220 * scale, width - 40);
  const cardHeight = Math.min(270 * scale, height * 0.34);

  return {
    cardWidth: isTablet ? Math.min(cardWidth, 240) : cardWidth,
    cardHeight,
    cardRadius: 30 * scale,
    titleSize: 30 * scale,
    descriptionSize: 14 * scale,
    cardMarginTop: isVeryShort ? 3 * scale : isShort ? 5 * scale : 10 * scale,
    titleMarginBottom: 12 * scale,
    descriptionPadding: Math.min(23 * scale, cardWidth * 0.1),
    descriptionLineHeight: 15 * scale,
  };
}
