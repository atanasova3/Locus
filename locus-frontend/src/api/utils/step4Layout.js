
export function getStep4LayoutMetrics(width, height) {
  const smallScreen = width < 380;
  const veryShort = height < 620;

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
  };
}
