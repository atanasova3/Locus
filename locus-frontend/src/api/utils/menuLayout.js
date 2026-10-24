export function getMenuLayoutMetrics(width, height) {
  const isVerySmall = width < 350;
  const isSmall = width < 380;
  const isTablet = width >= 600;
  const isVeryShort = height < 620;
  const isShort = height < 700;

  const horizontalPadding = isTablet
    ? Math.min(width * 0.08, 70)
    : isVerySmall
    ? 12
    : isSmall
    ? 16
    : 25;

  return {
    menuHeight: isVerySmall ? 47 : isSmall ? 53 : isTablet ? 68 : 60,
    logoSize: isVerySmall ? 26 : isSmall ? 29 : isTablet ? 40 : 35,
    iconSize: isVerySmall ? 35 : isSmall ? 39 : isTablet ? 50 : 45,
    menuGap: isVerySmall ? 18 : isSmall ? 13 : isTablet ? 35 : 20,
    menuWidth: width - horizontalPadding * 5,
    bottomPosition: isVeryShort
      ? height * 0.025
      : isShort
      ? height * 0.035
      : isTablet
      ? height * 0.055
      : height * 0.06,
  };
}
