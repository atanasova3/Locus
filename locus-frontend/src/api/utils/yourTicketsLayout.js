import { getResponsiveScale } from "./responsiveLayout";

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function getYourTicketsLayoutMetrics(width, height) {
  const isVerySmall = width < 350;
  const isSmall = width < 380;
  const isTablet = width >= 600;
  const isVeryShort = height < 620;
  const isShort = height < 700;
  const scale = getResponsiveScale(width, height);

  const horizontalPadding = isTablet
    ? Math.min(width * 0.08, 70)
    : isVerySmall
    ? 8
    : isSmall
    ? 10
    : 12;

  const popupWidth = isTablet
    ? Math.min(width * 0.72, 650)
    : width - horizontalPadding * 2;

  const popupHeight = isVeryShort
    ? clamp(height * 0.42, 280, 320)
    : isShort
    ? clamp(height * 0.54, 330, 390)
    : isTablet
    ? clamp(height * 0.58, 420, 530)
    : clamp(height * 0.50, 350, 422);

  const cardHeight = popupHeight * (isVeryShort ? 0.63 : 0.62);

  return {
    popupWidth,
    popupHeight,
    popupRadius: (isVerySmall ? 26 : isTablet ? 38 : 34) * scale,
    horizontalPadding: popupWidth * (isTablet ? 0.055 : isVerySmall ? 0.035 : 0.04),
    verticalPadding: popupHeight * (isVeryShort ? 0.075 : 0.09),
    titleSize: clamp(width * 0.077, isVerySmall ? 21 : 24, isTablet ? 36 : 30) * scale,
    ticketIconSize: (isVerySmall ? 27 : isTablet ? 40 : 35) * scale,
    closeTop: (isVeryShort ? 10 : 15) * scale,
    closeRight: (isVerySmall ? 10 : isTablet ? 20 : 18) * scale,
    closeIconSize: (isVerySmall ? 24 : isTablet ? 32 : 29) * scale,
    dividerMarginTop: (isVerySmall ? 7 : 10) * scale,
    cardsGap: (isVerySmall ? 7 : isSmall ? 9 : isTablet ? 18 : 12) * scale,
    cardsMarginTop: popupHeight * (isVeryShort ? 0.025 : 0.06),
    cardHeight,
    cardRadius: (isVerySmall ? 22 : isTablet ? 36 : 30) * scale,
    borderSize: isVerySmall ? 3 : isTablet ? 4 : 3,
    cardIconSize: clamp(cardHeight * (isVeryShort ? 0.38 : 0.43), 44, isTablet ? 100 : 82) * scale,
    descriptionSize: clamp(width * 0.031, isVerySmall ? 10 : 11, isTablet ? 15 : 12) * scale,
    descriptionLineHeight: clamp(width * 0.039, isVerySmall ? 13 : 14, isTablet ? 18 : 15) * scale,
    descriptionMarginTop: (isVeryShort ? 5 : isTablet ? 10 : 8) * scale,
  };
}
