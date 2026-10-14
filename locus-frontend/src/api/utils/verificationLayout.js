export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function getVerificationLayoutMetrics(width, height, keyboardHeight) {
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

  const codeGap = isVerySmall
    ? 8
    : isSmall
    ? 10
    : isTablet
    ? 18
    : 12;

  const maxInputWidth = isTablet
    ? 78
    : isVerySmall
    ? 55
    : isSmall
    ? 60
    : 65;

  const inputWidth = Math.min(
    maxInputWidth,
    (contentWidth - codeGap * 3) / 4
  );

  const inputHeight = inputWidth * 1.1;

  const inputFontSize = clamp(
    inputWidth * 0.43,
    22,
    32
  );

  const titleSize = clamp(
    width * 0.095,
    32,
    42
  );

  const buttonHeight = isVerySmall
    ? 48
    : isSmall
    ? 50
    : isTablet
    ? 58
    : 52;

  const buttonFontSize = clamp(
    width * 0.051,
    18,
    22
  );

  const smallFontSize = clamp(
    width * 0.038,
    13,
    16
  );

  const topMargin = isVeryShort
    ? 30
    : isShort
    ? 50
    : isTablet
    ? 110
    : 95;

  const titleTop = isVeryShort
    ? topMargin + 170
    : isShort
    ? topMargin + 190
    : isTablet
    ? topMargin + 230
    : topMargin + 210;

  const buttonMarginTop = isVeryShort
    ? 18
    : isShort
    ? 25
    : isTablet
    ? 40
    : 35;

  let bottomPosition;

  if (keyboardHeight > 0) {
    bottomPosition = keyboardHeight + (isVerySmall ? 10 : 15);
  } else if (isVeryShort) {
    bottomPosition = 18;
  } else if (isShort) {
    bottomPosition = 28;
  } else if (isTablet) {
    bottomPosition = 45;
  } else {
    bottomPosition = height * 0.07;
  }

  return {
    isVerySmall,
    isSmall,
    isTablet,
    isVeryShort,
    isShort,
    horizontalPadding,
    contentWidth,
    codeGap,
    inputWidth,
    inputHeight,
    inputFontSize,
    titleSize,
    buttonHeight,
    buttonFontSize,
    smallFontSize,
    topMargin,
    titleTop,
    buttonMarginTop,
    bottomPosition,
  };
}
