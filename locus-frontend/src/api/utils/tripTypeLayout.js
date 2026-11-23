import { getResponsiveScale } from './responsiveLayout';

export function getTripTypeLayoutMetrics(width, height) {
  const scale = getResponsiveScale(width, height);
  const smallScreen = width < 380;

  return {
    popupWidth: Math.min(width - (smallScreen ? 32 : 48), 420),
    popupRadius: smallScreen ? 36 : 48,
    horizontalPadding: 26 * scale,
    verticalPadding: 28 * scale,
    gridRowGap: 19 * scale,
    buttonWidth: '46%',
    typeButtonHeight: 49 * scale,
    typeButtonRadius: 30 * scale,
    typeButtonBorderWidth: Math.max(1.5, 2.5 * scale),
    typeButtonFontSize: 21 * scale,
    buttonFontSize: 21 * scale,
    dividerHeight: 2 * scale,
    dividerMarginTop: 27 * scale,
    dividerMarginBottom: 16 * scale,
    headingFontSize: 21 * scale,
    headingMarginBottom: 13 * scale,
    optionFontSize: 18 * scale,
    optionSpacing: 5 * scale,
    radioInnerSize: 9 * scale,
    radioSize: 18 * scale,
    radioBorderWidth: Math.max(1, 1.5 * scale),
    radioMarginRight: 7 * scale,
    buttonHeight: 40 * scale,
    buttonRadius: 40 * scale,
    buttonBorderWidth: Math.max(1, 2 * scale),
    buttonFontSize: 20 * scale,
    buttonMarginTop: 20 * scale,
  };
}
