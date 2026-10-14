export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function getHomeLayoutMetrics(width, height) {
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

  const lokiSize = isVerySmall
    ? 92
    : isSmall
    ? 102
    : isTablet
    ? 125
    : 115;

  const speechWidth = isVerySmall
    ? 142
    : isSmall
    ? 152
    : isTablet
    ? 190
    : 160;

  const speechHeight = isVerySmall
    ? 70
    : isShort
    ? 72
    : isTablet
    ? 90
    : 80;

  const profileSize = isVerySmall
    ? 36
    : isSmall
    ? 39
    : 42;

  const profileIconSize = isVerySmall ? 21 : 24;

  const lokiTranslateX = isVerySmall
    ? 25
    : isSmall
    ? 24
    : 30;

  const grandientWidth = isVerySmall
    ? 180
    : isSmall
    ? 250
    : isTablet
    ? 420
    : 250;

  const robotPadding = isVerySmall
    ? -28
    : isSmall
    ? -28
    : isTablet
    ? -15
    : -20;

  const currentTripHeight = isVeryShort
    ? 110
    : isShort
    ? 118
    : 125;

  const currentTripTitleSize = clamp(
    width * 0.064,
    22,
    28
  );

  const currentTripDateSize = clamp(
    width * 0.038,
    13,
    16
  );

  const peopleIconSize = clamp(
    width * 0.052,
    18,
    22
  );

  const peopleTextSize = clamp(
    width * 0.031,
    11,
    13
  );

  const myTripsSize = clamp(
    width * 0.09,
    30,
    38
  );

  const addTripTextSize = clamp(
    width * 0.074,
    26,
    31
  );

  const topMargin = isVeryShort
    ? 20
    : isShort
    ? 30
    : isTablet
    ? 75
    : 45;

  const headerMarginBottom = isVeryShort
    ? 3
    : isShort
    ? 8
    : 15;

  const myTripsMarginTop = isVeryShort
    ? 2
    : isShort
    ? 8
    : 15;

  const addTripMarginTop = isVeryShort
    ? 8
    : isShort
    ? 12
    : 18;

  const cardMarginTop = isVeryShort
    ? 3
    : isShort
    ? 5
    : 10;

  return {
    isVerySmall,
    isSmall,
    isTablet,
    isVeryShort,
    isShort,
    horizontalPadding,
    contentWidth,
    lokiSize,
    speechWidth,
    speechHeight,
    profileSize,
    profileIconSize,
    lokiTranslateX,
    grandientWidth,
    robotPadding,
    currentTripHeight,
    currentTripTitleSize,
    currentTripDateSize,
    peopleIconSize,
    peopleTextSize,
    myTripsSize,
    addTripTextSize,
    topMargin,
    headerMarginBottom,
    myTripsMarginTop,
    addTripMarginTop,
    cardMarginTop,
  };
}
