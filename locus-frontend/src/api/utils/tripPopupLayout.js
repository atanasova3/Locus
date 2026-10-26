import { clamp } from "./verificationLayout";
import { getResponsiveScale } from "./responsiveLayout";

export function getTripPopupLayoutMetrics(width, height) {
  const isVerySmall = width < 350;
  const isSmall = width < 380;
  const isTablet = width >= 600;
  const isVeryShort = height < 620;
  const isShort = height < 700;
  const scale = getResponsiveScale(width, height);

  const modalHorizontalPadding = isTablet
    ? Math.min(width * 0.08, 70)
    : isSmall
    ? 16
    : 24;

  const modalWidth = isTablet
    ? Math.min(width * 0.72, 650)
    : width - modalHorizontalPadding * 2;

  return {
    modalHorizontalPadding,
    modalWidth,
    modalHeight: Math.min(height - 32, isVeryShort
      ? 350
      : isShort
      ? 350
      : isTablet
      ? 470
      : isSmall
      ? 390
      : 430),
    modalRadius: (isVerySmall ? 24 : isTablet ? 36 : 32) * scale,
    modalTopPadding: isVeryShort
      ? 38
      : isShort
      ? 43
      : isTablet
      ? 55
      : 50,
    modalSidePadding: isVerySmall ? 14 : isSmall ? 16 : isTablet ? 25 : 18,
    closeSize: (isVerySmall ? 26 : isTablet ? 34 : 30) * scale,
    closeFontSize: (isVerySmall ? 24 : isTablet ? 32 : 28) * scale,
    closeRight: (isVerySmall ? 12 : isTablet ? 20 : 17) * scale,
    closeTop: (isVeryShort ? 7 : isTablet ? 12 : 10) * scale,
    titleSize: clamp(width * 0.08, 24, isTablet ? 38 : 32) * scale,
    titleMarginTop: (isVeryShort ? 0 : isTablet ? 3 : 0) * scale,
    lineMarginTop: (isVerySmall ? 5 : isShort ? 7 : 8) * scale,
    emptySize: clamp(width * 0.04, 14, isTablet ? 18 : 16) * scale,
    emptyMarginTop: (isVeryShort ? 7 : isShort ? 9 : 11) * scale,
    cardsPaddingTop: (isVeryShort ? 3 : isShort ? 4 : 5) * scale,
    cardsGap: (isVerySmall ? 16 : isSmall ? 20 : isTablet ? 10 : 25) * scale,
    cardWidth: Math.min(
      isVerySmall ? 175 : isSmall ? 187 : isTablet ? 260 : 220,
      modalWidth - (isVerySmall ? 14 : isSmall ? 16 : isTablet ? 25 : 18) * 2
    ),
    cardHeight: Math.min(270 * scale, height * 0.34),
  };
}
