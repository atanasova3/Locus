import { getResponsiveScale } from './responsiveLayout';

export function getHotelPopupLayoutMetrics(width, height) {
  const scale = getResponsiveScale(width, height);
  const smallScreen = width < 380;

  return {
    popupWidth: Math.min(width - (smallScreen ? 32 : 48), 420),
    popupMaxHeight: Math.max(200, height - 32),
    contentMaxHeight: Math.max(160, height - 96),
    popupRadius: smallScreen ? 36 : 48,
    horizontalPadding: 26 * scale,
    verticalPadding: 28 * scale,
    gridRowGap: 19 * scale,
    typeButtonWidth: '46%',
    typeButtonHeight: 49 * scale,
    typeButtonRadius: 30 * scale,
    typeButtonBorderWidth: Math.max(1.5, 2.5 * scale),
    typeFontSize: 21 * scale,
    dividerHeight: 2 * scale,
    dividerMarginTop: 27 * scale,
    dividerMarginBottom: 16 * scale,
    headingFontSize: 21 * scale,
    headingMarginBottom: 13 * scale,
    ratingRowMarginBottom: 5 * scale,
    radioSize: 18 * scale,
    radioBorderWidth: Math.max(1, 1.5 * scale),
    radioMarginRight: 7 * scale,
    radioInnerSize: 9 * scale,
    starsFontSize: 22 * scale,
    ratingFontSize: 18 * scale,
    filterRowGap: 5 * scale,
    filterItemWidth: '46%',
    checkboxSize: 19 * scale,
    checkboxRadius: 6 * scale,
    checkboxBorderWidth: Math.max(1, 1.5 * scale),
    checkboxMarginRight: 6 * scale,
    checkmarkFontSize: 20 * scale,
    checkmarkLineHeight: 21 * scale,
    filterFontSize: 18 * scale,
    stepMarginTop: 2 * scale,
    stepMarginBottom: 8 * scale,
    stepFontSize: 14 * scale,
    nextButtonHeight: 40 * scale,
    nextButtonRadius: 40 * scale,
    nextButtonBorderWidth: Math.max(1, 2 * scale),
    nextTextFontSize: 20 * scale,
  };
}
