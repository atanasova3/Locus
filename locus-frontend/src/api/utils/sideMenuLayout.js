export function getSideMenuLayoutMetrics(width, height) {
  const isVerySmall = width < 350;
  const isSmall = width < 380;
  const isTablet = width >= 600;
  const isVeryShort = height < 620;
  const isShort = height < 700;

  const panelWidth = isTablet
    ? Math.min(width * 0.42, 360)
    : isVerySmall
    ? Math.min(width * 0.62, 210)
    : isSmall
    ? Math.min(width * 0.56, 220)
    : Math.min(width * 0.48, 360);

  const panelInset = isTablet ? 34 : isVerySmall ? 12 : isSmall ? 16 : 26;
  const panelBottomInset = isTablet ? 34 : isVerySmall ? 12 : isSmall ? 16 : 26;
  const panelHeight = Math.max(300, height - panelInset - panelBottomInset);
  const gradientPaddingTop = isVeryShort ? 18 : isShort ? 24 : 34;
  const gradientPaddingBottom = isVeryShort ? 18 : isShort ? 24 : 34;
  const logoutReserve = isVeryShort ? 54 : isShort ? 62 : 74;
  const availableRowHeight =
    (panelHeight -
      gradientPaddingTop -
      gradientPaddingBottom -
      logoutReserve) /
    7;
  const menuItemHeight = Math.max(
    42,
    Math.min(65, availableRowHeight)
  );
  const logoutHeight = isVeryShort ? 36 : isShort ? 38 : 40;
  const logoutBottom = isVeryShort ? 18 : isShort ? 24 : 34;
  const itemsHeight =
    panelHeight -
    gradientPaddingTop -
    gradientPaddingBottom -
    logoutHeight -
    logoutBottom -
    10;

  return {
    panelWidth,
    panelHeight,
    panelInset,
    panelBottomInset,
    gradientPaddingHorizontal: isTablet ? 16 : isVerySmall ? 5 : 9,
    gradientPaddingTop,
    gradientPaddingBottom,
    menuItemHeight,
    itemTextSize: isVerySmall ? 13 : isTablet ? 17 : 15,
    iconSize: isVerySmall ? 20 : isTablet ? 26 : 23,
    itemsHeight: Math.max(120, itemsHeight),
    logoutHeight,
    logoutTextSize: isVerySmall ? 14 : 16,
    logoutBottom,
    logoutHorizontal: isVerySmall ? 6 : 10,
  };
}
