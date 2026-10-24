export function getTimelineLayoutMetrics(currentStep, rowHeight, rowGap) {
  const passed = currentStep === 2 ? 3 : currentStep === 3 ? 6 : 0;

  return {
    passed,
    totalHeight: rowHeight * 3 + rowGap * 2,
  };
}
