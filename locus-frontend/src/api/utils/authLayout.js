export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function getAuthLayoutMetrics(width, height, variant = "login") {
  const isVerySmall = width < 350;
  const isSmall = width < 380;
  const isTablet = width >= 600;

  const isVeryShort = height < 620;
  const isShort = height < 700;

  const horizontalPadding = isTablet
    ? Math.min(width * 0.08, 70)
    : isSmall
    ? 21
    : 25;

  const contentWidth = Math.min(
    width - horizontalPadding * 2,
    700
  );

  const titleSize = clamp(
    width * 0.095,
    32,
    42
  );

  const labelSize = clamp(
    width * 0.051,
    17,
    21
  );

  const inputFontSize = clamp(
    width * 0.046,
    16,
    19
  );

  const buttonFontSize = clamp(
    width * 0.051,
    18,
    22
  );

  const inputHeight = isVerySmall
    ? 38
    : isSmall
    ? 40
    : isTablet
    ? 56
    : 48;

  const iconSize = clamp(
    width * 0.059,
    21,
    25
  );

  const smallFontSize = clamp(
    width * 0.038,
    13,
    16
  );

  const forgotFontSize = clamp(
    width * 0.036,
    13,
    15
  );

  const topPadding = isVeryShort
    ? 30
    : isShort
    ? 40
    : isTablet
    ? 110
    : 95;

  const headerMargin = isVeryShort
    ? 2
    : isShort
    ? 0
    : 35;

  const titleMargin = isVeryShort
    ? 2
    : isShort
    ? 0
    : 22;

  const fieldMargin =
    variant === "register"
      ? isVerySmall
        ? 3
        : isVeryShort
        ? 4
        : isShort
        ? 9
        : 16
      : isVerySmall
      ? 7
      : isVeryShort
      ? 9
      : isShort
      ? 12
      : 16;

  const labelMargin = isVerySmall ? 3 : 4;

  const primaryButtonMargin =
    variant === "register"
      ? isVeryShort
        ? 14
        : isShort
        ? 18
        : 22
      : isVeryShort
      ? 10
      : isShort
      ? 10
      : 22;

  const orMargin = isVeryShort
    ? 8
    : isShort
    ? 11
    : 15;

  return {
    clamp,
    isVerySmall,
    isSmall,
    isTablet,
    isVeryShort,
    isShort,
    horizontalPadding,
    contentWidth,
    titleSize,
    labelSize,
    inputFontSize,
    buttonFontSize,
    inputHeight,
    iconSize,
    smallFontSize,
    forgotFontSize,
    topPadding,
    headerMargin,
    titleMargin,
    fieldMargin,
    labelMargin,
    primaryButtonMargin,
    orMargin,
  };
}
