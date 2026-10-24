import React, { useEffect, useRef } from "react";
import {
  Animated,
  View,
  useWindowDimensions,
} from "react-native";
import helloTextStyles from "../styles/helloTextStyles";
import { getHelloTextLayoutMetrics } from "../utils/helloTextLayout";

const styles = helloTextStyles;

export default function HelloText({ animated = true }) {
  const { width, height } = useWindowDimensions();
  const {
    titleSize,
    logoWidth,
    logoHeight,
    subtitleSize,
    logoMarginTop,
    subtitleMarginTop,
  } = getHelloTextLayoutMetrics(width, height);

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
