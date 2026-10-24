export function getTripCardLayoutMetrics(width, height) {
  const isVerySmall = width < 350;
  const isSmall = width < 380;
  const isTablet = width >= 600;
  const isVeryShort = height < 620;
  const isShort = height < 700;

  return {
    cardWidth: isVerySmall ? 175 : isSmall ? 187 : isTablet ? 240 : 220,
    cardHeight: isVerySmall ? 200 : isSmall ? 205 : 270,
    cardRadius: isVerySmall ? 25 : 30,
    titleSize: isVerySmall ? 16 : isTablet ? 20 : 18,
    locationSize: isVerySmall ? 13 : isTablet ? 16 : 15,
    ratingSize: isVerySmall ? 11 : isTablet ? 14 : 13,
    cardMarginTop: isVeryShort ? 3 : isShort ? 5 : 10,
    infoMargin: isVerySmall ? 7 : 10,
    infoPadding: isVerySmall ? 9 : 12,
    infoRadius: isVerySmall ? 16 : 20,
  };
}
