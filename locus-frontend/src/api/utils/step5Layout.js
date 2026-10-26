
import { getResponsiveScale } from "./responsiveLayout";

export function getStep5LayoutMetrics(width, height) {
  const smallScreen = width < 380;
  const veryShort = height < 620;
  const scale = getResponsiveScale(width, height);

  return {
    smallScreen,
    veryShort,
    modalWidth: Math.min(
      width - (smallScreen ? 48 : 64),
      420
    ),
    modalHeight: Math.min(
      height - 40,
      veryShort ? 270 : 300
    ),
    modalRadius: smallScreen ? 26 : 32,
    modalHorizontalPadding: 18,
    stepFontSize: 36 * scale,
    underlineWidth: Math.min(width * 0.48, 183 * scale),
    underlineHeight: Math.max(1, 2 * scale),
    underlineMarginTop: 2 * scale,
    underlineMarginBottom: 15 * scale,
    questionFontSize: 17 * scale,
    questionMarginBottom: 12 * scale,
    optionHeight: 25 * scale,
    optionMarginBottom: 2 * scale,
    checkboxSize: 16 * scale,
    checkboxBorderWidth: Math.max(1, 2 * scale),
    checkboxRadius: 8 * scale,
    checkboxMarginRight: 10 * scale,
    radioIndicatorSize: 10 * scale,
    optionFontSize: 16 * scale,
    buttonHeight: 40 * scale,
    buttonBottom: 10 * scale,
    buttonRadius: 40 * scale,
    buttonBorderWidth: Math.max(1, 2 * scale),
    buttonFontSize: 20 * scale,
  };
}
