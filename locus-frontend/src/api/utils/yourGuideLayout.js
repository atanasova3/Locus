export function getYourGuideLayoutMetrics(width, height) {
  return {
    panelWidth: Math.min(width - 32, 430),
    panelHeight: Math.min(height * 0.86, 760),
    panelRadius: width < 380 ? 28 : 34,
  };
}

export function getGuideScrollMetrics(scrollMetrics) {
  const thumbHeight = Math.max(
    28,
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
