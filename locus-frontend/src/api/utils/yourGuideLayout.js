import { getResponsiveScale } from "./responsiveLayout";

export function getYourGuideLayoutMetrics(width, height) {
  const scale = getResponsiveScale(width, height);

  return {
    scale,
    panelWidth: Math.min(width - 32, 430 * scale),
    panelHeight: Math.min(height - 32, height * 0.86, 760 * scale),
    panelRadius: (width < 380 ? 28 : 34) * scale,
    panelPadding: 24 * scale,
    backIconSize: 22 * scale,
    backTextSize: 18 * scale,
    backGap: 7 * scale,
    backMarginBottom: 18 * scale,
    titleSize: 30 * scale,
    titleMarginBottom: 2 * scale,
    lineMarginBottom: 17 * scale,
    scrollContentPaddingBottom: 12 * scale,
    scrollContentPaddingRight: 10 * scale,
    scrollTrackWidth: 3 * scale,
    scrollTrackRadius: 10 * scale,
    scrollThumbHeight: Math.max(28 * scale, 20),
    sectionTitleSize: 12 * scale,
    sectionTitleMarginBottom: 13 * scale,
    paragraphSize: 12 * scale,
    paragraphLineHeight: 15 * scale,
    paragraphMarginBottom: 17 * scale,
  };
}

export function getGuideScrollMetrics(scrollMetrics, minThumbHeight = 28) {
  const thumbHeight = Math.max(
    minThumbHeight,
    (scrollMetrics.viewportHeight / scrollMetrics.contentHeight) *
      scrollMetrics.viewportHeight
  );
  const maxThumbTravel = Math.max(
    0,
    scrollMetrics.viewportHeight - thumbHeight
  );
  const thumbTop =
    scrollMetrics.contentHeight > scrollMetrics.viewportHeight
      ? (scrollMetrics.offsetY /
          (scrollMetrics.contentHeight - scrollMetrics.viewportHeight)) *
        maxThumbTravel
      : 0;

  return { thumbHeight, thumbTop };
}
