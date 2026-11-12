
import { getResponsiveScale } from "./responsiveLayout";

export function getTripLayoutMetrics(width, height) {
  const isVerySmall = width < 350;
  const isSmall = width < 380;
  const isTablet = width >= 600;
  const isVeryShort = height < 620;
  const isShort = height < 700;
  const baseScale = Math.min(getResponsiveScale(width, height), 1);

const scale = width < 350
  ? baseScale * 1.10
  : width < 380
  ? baseScale * 1.07
  : baseScale;
  const modalHorizontalPadding = isTablet
    ? Math.min(width * 0.08, 70)
    : isSmall
    ? 16
    : 24;

  const modalWidth = isTablet
    ? Math.min(width * 0.72, 650)
    : width - modalHorizontalPadding * 2;
  const modalSidePadding = isVerySmall ? 14 : isSmall ? 16 : isTablet ? 25 : 18;

  const panelPaddingVertical = 12 * scale;
  const assistantPadding =
    (isVerySmall ? 16 : isSmall ? 19 : isTablet ? 24 : 22) * scale;
  const mascotWidth = 120 * scale;

  return {
    scale,
    modalHorizontalPadding,
    modalWidth,
    calendarDayWidth: 82 * scale,
    calendarViewportWidth: modalWidth - modalSidePadding * 2,
    modalHeight: Math.min(
      height - 32,
      isVeryShort
        ? 620
        : isShort
        ? 620
        : isTablet
        ? 740
        : isSmall
        ? 660
        : 700
    ),
    modalRadius: (isVerySmall ? 24 : isTablet ? 36 : 32) * scale,
    modalTopPadding: isVeryShort
      ? 38
      : isShort
      ? 43
      : isTablet
      ? 55
      : 50,
    modalSidePadding,
    closeSize: (isVerySmall ? 26 : isTablet ? 34 : 30) * scale,
    closeFontSize: (isVerySmall ? 24 : isTablet ? 32 : 28) * scale,
    closeRight: (isVerySmall ? 12 : isTablet ? 20 : 17) * scale,
    closeTop: (isVeryShort ? 7 : isTablet ? 12 : 10) * scale,
    panelMinHeight: Math.max(
      200 * scale,
      180 * scale + panelPaddingVertical * 2
    ),
    panelRadius: 35 * scale,
    panelPaddingVertical,
    panelMarginTop: 15 * scale,
    buttonsGap: 10 * scale,
    buttonsMarginTop: 10 * scale,
    actionButtonHeight: 40 * scale,
    actionButtonRadius: 17 * scale,
    iconSize: 19 * scale,
    actionTextSize: Math.max(14, 18 * scale),
    assistantMarginTop: 10 * scale,
    assistantMinHeight: 250 * scale,
    assistantRadius: 38 * scale,
    assistantPadding,
    messagePadding: 10 * scale,
    messagePaddingRight: (isTablet ? 88 : 65) * scale,
    messageRadius: 18 * scale,
    messageFontSize: Math.max(10, (isTablet ? 12 : 11) * scale),
    messageLineHeight: Math.max(12, 12 * scale),
    mascotWidth,
    mascotHeight: 150 * scale,
    mascotRight: 5 * scale,
    mascotBottom: 30 * scale,
    inputInset: assistantPadding,
    inputBottom: 10 * scale,
    inputHeight: 35 * scale,
    inputRadius: 20 * scale,
    inputPaddingHorizontal: 10 * scale,
    inputFontSize: Math.max(12, 13 * scale),
    sendButtonSize: Math.max(18, 21 * scale),
  };
}
