export function getResponsiveScale(width, height) {
  return Math.max(
    0.72,
    Math.min(width / 390, height / 844, 1.15)
  );
}
