import { getResponsiveScale } from "./responsiveLayout";

export function getStepsLayoutMetrics(width, height) {
  const isVerySmall = width < 350;
  const isSmall = width < 380;
  const isTablet = width >= 600;
  const isVeryShort = height < 620;
  const isShort = height < 700;
  const scale = getResponsiveScale(width, height);

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
    modalHeight: Math.min(
      height - 32,
      isVeryShort
      ? 320
      : isShort
      ? 350
      : isTablet
      ? 470
      : isSmall
      ? 390
      : 400
    ),
    modalRadius: (isVerySmall ? 24 : isTablet ? 36 : 32) * scale,
    modalTopPadding: isVeryShort
      ? 38
      : isShort
      ? 43
      : isTablet
      ? 55
      : 45,
    modalSidePadding: isVerySmall ? 14 : isSmall ? 16 : isTablet ? 25 : 18,
    closeSize: (isVerySmall ? 26 : isTablet ? 34 : 30) * scale,
    closeFontSize: (isVerySmall ? 24 : isTablet ? 32 : 28) * scale,
    closeRight: (isVerySmall ? 12 : isTablet ? 20 : 17) * scale,
    closeTop: (isVeryShort ? 7 : isTablet ? 12 : 10) * scale,
    questionHeight: (isTablet ? 48 : isVerySmall ? 40 : 44) * scale,
    questionGap: (isTablet ? 35 : isVeryShort ? 18 : isShort ? 25 : 30) * scale,
    stepFontSize: 36 * scale,
    underlineWidth: Math.min(width * 0.48, 183 * scale),
    underlineHeight: Math.max(1, 2 * scale),
    underlineMarginTop: 2 * scale,
    underlineMarginBottom: 15 * scale,
    inputFontSize: 16 * scale,
    valueFontSize: 17 * scale,
    inputBorderRadius: 30 * scale,
    inputBorderWidth: Math.max(1, 2 * scale),
    inputPaddingHorizontal: 12 * scale,
    buttonHeight: 40 * scale,
    buttonBottom: 10 * scale,
    buttonRadius: 40 * scale,
    buttonFontSize: 20 * scale,
  };
}
