import React, { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";

export default function HelloText({ animated = true }) {
  const { width, height } = useWindowDimensions();

  // --------------------------------------------------
  // RESPONSIVE SCALE
  // Base design: 390 x 844
  // --------------------------------------------------

  const BASE_WIDTH = 390;
  const BASE_HEIGHT = 844;

  const scale = Math.min(
    width / BASE_WIDTH,
    height / BASE_HEIGHT
  );
  const responsiveScale = Math.min(scale, 1.10);

  const s = (value) => value * responsiveScale;

  // --------------------------------------------------
  // ANIMATION VALUES
  // --------------------------------------------------

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

  // --------------------------------------------------
  // ANIMATION
  // --------------------------------------------------

  useEffect(() => {
    // Без animation
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

  // --------------------------------------------------
  // UI
  // --------------------------------------------------

  return (
    <View style={styles.header}>

      {/* WELCOME TO */}

      <Animated.Text
        style={[
          styles.title,
          {
            fontSize: s(64),

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

      {/* LOGO */}

      <Animated.Image
        source={require("./photos/Logoo.png")}
        resizeMode="contain"
        style={[
          styles.logo,
          {
            width: s(260),
            height: s(65),

            opacity: logoOpacity,

            transform: [
              {
                translateY: logoTranslate,
              },
            ],
          },
        ]}
      />

      {/* SUBTITLE */}

      <Animated.Text
        style={[
          styles.subtitle,
          {
            fontSize: s(24),

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

// --------------------------------------------------
// STYLES
// --------------------------------------------------

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
    marginTop: 0,
  },

  subtitle: {
    fontFamily: "Inter",
    color: "#F5F1D1",
    fontWeight: "400",
    marginTop: 0,
    textAlign: "left",
  },
});