export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function getHelloLayoutMetrics(width, height) {
  const isVerySmall = width < 350;
  const isSmall = width < 380;
  const isTablet = width >= 600;

  const isVeryShort = height < 620;
  const isShort = height < 700;

  const buttonSize = isVerySmall
    ? 88
    : isSmall
    ? 94
    : isTablet
    ? 110
    : 100;

  const containerWidth = buttonSize;

  const containerHeight = isVeryShort
    ? 175
    : isShort
    ? 185
    : isTablet
    ? 220
    : 200;

  const goTextSize = clamp(
    width * 0.128,
    43,
    54
  );

  const arrowSmallSize = clamp(
    width * 0.069,
    24,
    27
  );

  const arrowLargeSize = clamp(
    width * 0.077,
    27,
    30
  );

  const bottomPosition = isVeryShort
    ? height * 0.025
    : isShort
    ? height * 0.035
    : isTablet
    ? height * 0.055
    : height * 0.05;

  const headerTop = isVeryShort
    ? height * 0.12
    : isShort
    ? height * 0.16
    : isTablet
    ? height * 0.2
    : height * 0.2;

  const logoTopOffset = clamp(height * 0.06, 32, 72);

  const headerHorizontalPadding = isTablet
    ? Math.min(width * 0.08, 70)
    : width * 0.05;

  const containerRadius = containerWidth * 0.55;
  const buttonRadius = buttonSize / 2;

  return {
    isVerySmall,
    isSmall,
    isTablet,
    isVeryShort,
    isShort,
    buttonSize,
    containerWidth,
    containerHeight,
    goTextSize,
    arrowSmallSize,
    arrowLargeSize,
    bottomPosition,
    headerTop,
    logoTopOffset,
    headerHorizontalPadding,
    containerRadius,
    buttonRadius,
  };
}
