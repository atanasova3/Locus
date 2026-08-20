import React, { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";

export default function HelloText({ animated = true }) {
  const { width, height } = useWindowDimensions();

  // ==================================================
  // SCREEN SIZE
  // ==================================================

  const isVerySmall = width < 340;
  const isSmall = width < 380;

  const isVeryShort = height < 620;
  const isShort = height < 700;

  // ==================================================
  // RESPONSIVE SIZES
  // NO SCALING
  // ==================================================

  const titleSize = isVerySmall
    ? 48
    : isSmall
    ? 55
    : 64;

  const logoWidth = isVerySmall
    ? 225
    : isSmall
    ? 250
    : 280;

  const logoHeight = isVerySmall
    ? 52
    : isSmall
    ? 58
    : 65;

  const subtitleSize = isVerySmall
    ? 18
    : isSmall
    ? 21
    : 24;

  // ==================================================
  // SPACING
  // ==================================================

  const logoMarginTop = isVerySmall
    ? -2
    : 0;

  const subtitleMarginTop = isVeryShort
    ? -2
    : isShort
    ? 0
    : 0;

  // ==================================================
  // ANIMATION VALUES
  // ==================================================

  const titleOpacity = useRef(
    new Animated.Value(animated ? 0 : 1)
  ).current;

  const titleTranslate = useRef(
    new Animated.Value(animated ? 20 : 0)
  ).current;

  const logoOpacity = useRef(
    new Animated.Value(animated ? 0 : 1)
  ).current;

  const logoTranslate = useRef(
    new Animated.Value(animated ? 20 : 0)
  ).current;

  const subtitleOpacity = useRef(
    new Animated.Value(animated ? 0 : 1)
  ).current;

  const subtitleTranslate = useRef(
    new Animated.Value(animated ? 20 : 0)
  ).current;

  // ==================================================
  // ANIMATION
  // ==================================================

  useEffect(() => {
    if (!animated) {
      titleOpacity.setValue(1);
      titleTranslate.setValue(0);

      logoOpacity.setValue(1);
      logoTranslate.setValue(0);

      subtitleOpacity.setValue(1);
      subtitleTranslate.setValue(0);

      return;
    }

    Animated.parallel([
      // WELCOME TO
      Animated.parallel([
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),

        Animated.timing(titleTranslate, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),

      // LOGO
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),

        Animated.timing(logoTranslate, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),

      // SUBTITLE
      Animated.parallel([
        Animated.timing(subtitleOpacity, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),

        Animated.timing(subtitleTranslate, {
          toValue: 0,
          duration: 900,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [animated]);

  // ==================================================
  // UI
  // ==================================================

  return (
    <View
      style={[
        styles.header,
        {
          width: "100%",
        },
      ]}
    >

      {/* ==============================================
          WELCOME TO
      ============================================== */}

      <Animated.Text
        style={[
          styles.title,
          {
            fontSize: titleSize,

            opacity: titleOpacity,

            transform: [
              {
                translateY: titleTranslate,
              },
            ],
          },
        ]}
      >
        Welcome to
      </Animated.Text>

      {/* ==============================================
          LOGO
      ============================================== */}

      <Animated.Image
        source={require("./photos/Logoo.png")}
        resizeMode="contain"
        style={[
          styles.logo,
          {
            width: logoWidth,
            height: logoHeight,
            marginTop: logoMarginTop,

            opacity: logoOpacity,

            transform: [
              {
                translateY: logoTranslate,
              },
            ],
          },
        ]}
      />

      {/* ==============================================
          SUBTITLE
      ============================================== */}

      <Animated.Text
        style={[
          styles.subtitle,
          {
            fontSize: subtitleSize,
            marginTop: subtitleMarginTop,

            opacity: subtitleOpacity,

            transform: [
              {
                translateY: subtitleTranslate,
              },
            ],
          },
        ]}
      >
        Escape the ordinary
      </Animated.Text>

    </View>
  );
}

// ==================================================
// STYLES
// ==================================================

const styles = StyleSheet.create({
  header: {
    alignItems: "flex-start",
  },

  title: {
    fontFamily: "Inter",
    color: "#F5F1D1",
    fontWeight: "300",
    textAlign: "left",
  },

  logo: {
    alignSelf: "flex-start",
  },

  subtitle: {
    fontFamily: "Inter",
    color: "#F5F1D1",
    fontWeight: "400",
    textAlign: "left",
  },
});