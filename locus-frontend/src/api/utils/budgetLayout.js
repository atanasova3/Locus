import { getResponsiveScale } from './responsiveLayout';

export function getBudgetLayoutMetrics(width, height) {
  const scale = getResponsiveScale(width, height);
  const smallScreen = width < 380;

  return {
    popupWidth: Math.min(width - (smallScreen ? 32 : 48), 420),
    popupRadius: smallScreen ? 36 : 48,
    horizontalPadding: 29 * scale,
    verticalPadding: 28 * scale,
    priceFontSize: 24 * scale,
    currentFontSize: 15 * scale,
    sliderHeight: 30 * scale,
    buttonHeight: 40 * scale,
    buttonRadius: 40 * scale,
    buttonBorderWidth: Math.max(1, 2 * scale),
    buttonFontSize: 20 * scale,
  };
}
