import { getResponsiveScale } from './responsiveLayout';

export function getInterestsLayoutMetrics(width, height) {
  const scale = getResponsiveScale(width, height);
  const smallScreen = width < 380;

  return {
    popupWidth: Math.min(width - (smallScreen ? 32 : 48), 420),
    popupMaxHeight: height - (smallScreen ? 32 : 48),
    popupRadius: smallScreen ? 36 : 48,
    horizontalPadding: 26 * scale,
    verticalPadding: 28 * scale,
    gridMaxHeight: Math.max(180, height - (smallScreen ? 210 : 230)),
    buttonWidth: '46%',
    buttonHeight: 49 * scale,
    buttonRadius: 30 * scale,
    buttonBorderWidth: Math.max(1.5, 2.5 * scale),
    buttonFontSize: 21 * scale,
    nextHeight: 40 * scale,
    nextRadius: 40 * scale,
    nextBorderWidth: Math.max(1, 2 * scale),
    nextFontSize: 20 * scale,
    nextMarginTop: 20 * scale,
  };
}
