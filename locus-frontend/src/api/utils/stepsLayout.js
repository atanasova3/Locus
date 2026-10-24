export function getStepsLayoutMetrics(width, height) {
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

  return {
    isVerySmall,
    isSmall,
    isTablet,
    isVeryShort,
    isShort,
    modalHorizontalPadding,
    modalWidth: isTablet
      ? Math.min(width * 0.72, 650)
      : width - modalHorizontalPadding * 2,
    modalHeight: isVeryShort
      ? 320
      : isShort
      ? 350
      : isTablet
      ? 470
      : isSmall
      ? 390
      : 400,
    modalRadius: isVerySmall ? 24 : isTablet ? 36 : 32,
    modalTopPadding: isVeryShort
      ? 38
      : isShort
      ? 43
      : isTablet
      ? 55
      : 45,
    modalSidePadding: isVerySmall ? 14 : isSmall ? 16 : isTablet ? 25 : 18,
    closeSize: isVerySmall ? 26 : isTablet ? 34 : 30,
    closeFontSize: isVerySmall ? 24 : isTablet ? 32 : 28,
    closeRight: isVerySmall ? 12 : isTablet ? 20 : 17,
    closeTop: isVeryShort ? 7 : isTablet ? 12 : 10,
    questionHeight: isTablet ? 48 : isVerySmall ? 40 : 44,
    questionGap: isTablet ? 35 : isVeryShort ? 18 : isShort ? 25 : 30,
  };
}
