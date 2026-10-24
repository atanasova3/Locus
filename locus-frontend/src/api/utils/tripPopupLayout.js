import { clamp } from "./verificationLayout";

export function getTripPopupLayoutMetrics(width, height) {
  const isVerySmall = width < 350;
  const isSmall = width < 380;
  const isTablet = width >= 600;
  const isVeryShort = height < 620;
  const isShort = height < 700;

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
    modalHeight: isVeryShort
      ? 350
      : isShort
      ? 350
      : isTablet
      ? 470
      : isSmall
      ? 390
      : 430,
    modalRadius: isVerySmall ? 24 : isTablet ? 36 : 32,
    modalTopPadding: isVeryShort
      ? 38
      : isShort
      ? 43
      : isTablet
      ? 55
      : 50,
    modalSidePadding: isVerySmall ? 14 : isSmall ? 16 : isTablet ? 25 : 18,
    closeSize: isVerySmall ? 26 : isTablet ? 34 : 30,
    closeFontSize: isVerySmall ? 24 : isTablet ? 32 : 28,
    closeRight: isVerySmall ? 12 : isTablet ? 20 : 17,
    closeTop: isVeryShort ? 7 : isTablet ? 12 : 10,
    titleSize: clamp(width * 0.08, 24, isTablet ? 38 : 32),
    titleMarginTop: isVeryShort ? 0 : isTablet ? 3 : 0,
    lineMarginTop: isVerySmall ? 5 : isShort ? 7 : 8,
    emptySize: clamp(width * 0.04, 14, isTablet ? 18 : 16),
    emptyMarginTop: isVeryShort ? 7 : isShort ? 9 : 11,
    cardsPaddingTop: isVeryShort ? 3 : isShort ? 4 : 5,
    cardsGap: isVerySmall ? 16 : isSmall ? 20 : isTablet ? 10 : 25,
    cardWidth: isVerySmall ? 175 : isSmall ? 187 : isTablet ? 260 : 220,
  };
}
