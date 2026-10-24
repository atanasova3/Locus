export function getMyProfileLayoutMetrics(width, height) {
  const isVerySmall = width < 350;
  const isSmall = width < 380;
  const isTablet = width >= 600;
  const isVeryShort = height < 620;
  const isShort = height < 700;

  const horizontalPadding = isTablet ? Math.min(width * 0.08, 70) : isSmall ? 13 : 18;
  const contentWidth = Math.min(width - horizontalPadding * 2, isTablet ? 560 : 460);
  const topMargin = isVeryShort ? 4 : isShort ? 8 : 12;
  const bottomMargin = isVeryShort ? 8 : 16;
  const panelHeight = Math.min(
    height * 0.75,
    height - topMargin - bottomMargin - 12
  );
  const scale = Math.max(0.7, Math.min(1, width / 390, panelHeight / 740));

  return {
    horizontalPadding,
    contentWidth,
    topMargin,
    bottomMargin,
    panelHeight,
    scale,
    panelPadding: (isTablet ? 25 : isVerySmall ? 12 : 18) * scale,
    titleSize: (isTablet ? 35 : isVerySmall ? 25 : 31) * scale,
    rowTextSize: (isTablet ? 21 : isVerySmall ? 16 : 19) * scale,
    sectionTextSize: (isVerySmall ? 14 : 16) * scale,
    rowHeight: (isVeryShort ? 29 : isShort ? 33 : 37) * scale,
    sectionGap: (isVeryShort ? 7 : isShort ? 10 : 14) * scale,
    panelRadius: (isTablet ? 45 : 40) * scale,
  };
}
