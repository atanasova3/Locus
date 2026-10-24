export function getHelloTextLayoutMetrics(width, height) {
  const isVerySmall = width < 350;
  const isSmall = width < 380;
  const isVeryShort = height < 620;
  const isShort = height < 700;

  return {
    titleSize: isVerySmall ? 48 : isSmall ? 55 : 64,
    logoWidth: isVerySmall ? 225 : isSmall ? 250 : 280,
    logoHeight: isVerySmall ? 52 : isSmall ? 58 : 65,
    subtitleSize: isVerySmall ? 18 : isSmall ? 21 : 24,
    logoMarginTop: isVerySmall ? -2 : 0,
    subtitleMarginTop: isVeryShort ? -2 : isShort ? 0 : 0,
  };
}
