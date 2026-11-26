
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function getContactsLayoutMetrics(width, height) {
  const isVerySmall = width < 350;
  const isSmall = width < 380;
  const isTablet = width >= 600;
  const isLandscape = width > height;

  const scale = clamp(
    Math.min(width / 390, height / 844),
    0.72,
    1
  );

  const panelWidth = isTablet
    ? Math.min(width * 0.46, 520)
    : isVerySmall
    ? width * 0.92
    : isSmall
    ? width * 0.88
    : width * 0.84;

  // Изчисляваме височината според всички 4 реда
  const backHeight = 25 * scale;
  const titleHeight = 32 * scale;
  const dividerHeight = 2;
  const rowHeight = clamp(38 * scale, 27, 38);
  const rowGap = clamp(7 * scale, 3, 7);

  const verticalPadding = clamp(height * 0.012, 7, 12);
  const titleMarginTop = 10 * scale;
  const socialMarginTop = 8 * scale;

  const contentHeight =
    verticalPadding * 2 +
    backHeight +
    titleMarginTop +
    titleHeight +
    6 +
    dividerHeight +
    socialMarginTop +
    rowHeight * 4 +
    rowGap * 3;

  // Не допускаме съдържанието да бъде отрязано
  const panelHeight = clamp(
  Math.max(contentHeight, height * 0.16),
  contentHeight,
  height * 0.65
);

  return {
    panelWidth,
    panelHeight,

    panelRadius: isVerySmall ? 22 : isTablet ? 34 : 28,

    horizontalPadding: panelWidth * 0.075,
    verticalPadding,

    backFontSize: clamp(14 * scale, 11, 16),
    backIconSize: 19 * scale,

    titleSize: clamp(27 * scale, 20, 30),
    titleMarginTop,

    dividerMarginTop: 6 * scale,

    socialMarginTop,
    socialRowHeight: rowHeight,
    socialRowGap: rowGap,

    iconColumnWidth: 38 * scale,
    iconTextGap: 12 * scale,
    iconSize: clamp(23 * scale, 17, 24),

    socialTextSize: clamp(15 * scale, 12, 15),
  };
}
