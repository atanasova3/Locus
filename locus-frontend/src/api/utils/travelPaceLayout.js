import { getResponsiveScale } from './responsiveLayout';

export function getTravelPaceLayoutMetrics(width, height) {
  const scale = getResponsiveScale(width, height);
  const smallScreen = width < 380;

  return {
    popupWidth: Math.min(width - (smallScreen ? 32 : 48), 420),
    popupRadius: smallScreen ? 36 : 48,
    horizontalPadding: 26 * scale,
    verticalPadding: 28 * scale,
    headingFontSize: 21 * scale,
    headingMarginBottom: 13 * scale,
    optionFontSize: 18 * scale,
    optionSpacing: 5 * scale,
    radioSize: 18 * scale,
    radioInnerSize: 9 * scale,
    radioBorderWidth: Math.max(1, 1.5 * scale),
    radioMarginRight: 7 * scale,
    buttonHeight: 40 * scale,
    buttonRadius: 40 * scale,
    buttonBorderWidth: Math.max(1, 2 * scale),
    buttonFontSize: 20 * scale,
    buttonMarginTop: 20 * scale,
  };
}
