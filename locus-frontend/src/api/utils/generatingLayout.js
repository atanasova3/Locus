import { getResponsiveScale } from "./responsiveLayout";

export function getGeneratingLayoutMetrics(width, height) {
  const scale = getResponsiveScale(width, height);
  const horizontalPadding = Math.min(Math.max(width * 0.08, 16), 72);

  return {
    contentWidth: Math.min(width - horizontalPadding * 2, 720),
    horizontalPadding,
    illustrationHeight: Math.min(height * 0.39, width * 0.88, 500),
    illustrationWidth: Math.min(width * 0.84, 460 * scale),
    messageFontSize: 15 * scale,
    messageLineHeight: 20 * scale,
    messageMarginTop: 12 * scale,
    dotSize: 6 * scale,
    dotGap: 6 * scale,
    dotsMarginTop: 8 * scale,
  };
}
