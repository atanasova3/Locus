export function getAddTripCardLayoutMetrics(width, height) {
  const isVerySmall = width < 350;
  const isSmall = width < 380;
  const isTablet = width >= 600;
  const isVeryShort = height < 620;
  const isShort = height < 700;

  return {
    cardWidth: isVerySmall ? 175 : isSmall ? 187 : isTablet ? 240 : 220,
    cardHeight: isVerySmall ? 200 : isSmall ? 205 : 270,
    cardRadius: isVerySmall ? 25 : 30,
    titleSize: isVerySmall ? 23 : isSmall ? 28 : 30,
    descriptionSize: isVerySmall ? 12 : isSmall ? 13 : 14,
    cardMarginTop: isVeryShort ? 3 : isShort ? 5 : 10,
    titleMarginBottom: isVerySmall ? 8 : 12,
    descriptionPadding: isVerySmall ? 14 : isSmall ? 18 : 23,
    descriptionLineHeight: isVerySmall ? 13 : isSmall ? 14 : 15,
  };
}
