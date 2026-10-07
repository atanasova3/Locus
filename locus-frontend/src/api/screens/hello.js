import React, { useRef, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Animated,
  PanResponder,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import HelloText from "../components/HelloText";

export default function HelloScreen() {
  const navigation = useNavigation();

  const { width, height } = useWindowDimensions();

  // ==================================================
  // RESPONSIVE BREAKPOINTS
  // ==================================================

  const isVerySmall = width < 350;
  const isSmall = width < 380;
  const isTablet = width >= 600;

  const isVeryShort = height < 620;
  const isShort = height < 700;

  // ==================================================
  // RESPONSIVE HELPER
  // ==================================================

  const clamp = (value, min, max) =>
    Math.min(Math.max(value, min), max);

  // ==================================================
  // ANIMATION
  // ==================================================

  const buttonY = useRef(
    new Animated.Value(0)
  ).current;

  const screenOpacity = useRef(
    new Animated.Value(1)
  ).current;

  const screenScale = useRef(
    new Animated.Value(1)
  ).current;

  const [isNavigating, setIsNavigating] =
    useState(false);

  // ==================================================
  // GO BUTTON SIZE
  // ==================================================

  const buttonSize = isVerySmall
    ? 88
    : isSmall
    ? 94
    : isTablet
    ? 110
    : 100;

  const containerWidth = isVerySmall
    ? 88
    : isSmall
    ? 94
    : isTablet
    ? 110
    : 100;

  const containerHeight = isVeryShort
    ? 175
    : isShort
    ? 185
    : isTablet
    ? 220
    : 200;

  // ==================================================
  // GO TEXT
  // ==================================================

  const goTextSize = clamp(
    width * 0.128,
    43,
    54
  );

  // ==================================================
  // ARROW SIZES
  // ==================================================

  const arrowSmallSize = clamp(
    width * 0.069,
    24,
    27
  );

  const arrowLargeSize = clamp(
    width * 0.077,
    27,
    30
  );

  // ==================================================
  // BOTTOM POSITION
  // ==================================================

  const bottomPosition = isVeryShort
    ? height * 0.025
    : isShort
    ? height * 0.035
    : isTablet
    ? height * 0.055
    : height * 0.05;

  // ==================================================
  // HEADER POSITION
  // ==================================================

  const headerTop = isVeryShort
    ? height * 0.12
    : isShort
    ? height * 0.16
    : isTablet
    ? height * 0.20
    : height * 0.20;

  const headerHorizontalPadding = isTablet
    ? Math.min(width * 0.08, 70)
    : width * 0.05;

  // ==================================================
  // GO CONTAINER RADIUS
  // ==================================================

  const containerRadius =
    containerWidth * 0.55;

  const buttonRadius =
    buttonSize / 2;

  // ==================================================
  // NAVIGATION
  // ==================================================

  const handleGoToLogin = () => {
    if (isNavigating) return;

    setIsNavigating(true);

    Animated.parallel([
      Animated.timing(
        screenOpacity,
        {
          toValue: 0,
          duration: 550,
          useNativeDriver: true,
        }
      ),

      Animated.timing(
        screenScale,
        {
          toValue: 1.04,
          duration: 550,
          useNativeDriver: true,
        }
      ),

      Animated.timing(
        buttonY,
        {
          toValue: -90,
          duration: 450,
          useNativeDriver: true,
        }
      ),
    ]).start(({ finished }) => {
      if (finished) {
        navigation.navigate("Register");       //SMQNA NA EKRANA
      }
    });
  };

  // ==================================================
  // SWIPE
  // ==================================================

  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () =>
        !isNavigating,

      onPanResponderMove: (
        evt,
        gestureState
      ) => {
        const y = gestureState.dy;

        if (
          y < 0 &&
          y > -90
        ) {
          buttonY.setValue(y);
        }
      },

      onPanResponderRelease: (
        evt,
        gestureState
      ) => {
        if (
          gestureState.dy <
          -80
        ) {
          handleGoToLogin();
        } else {
          Animated.spring(
            buttonY,
            {
              toValue: 0,
              useNativeDriver: true,
              friction: 7,
              tension: 45,
            }
          ).start();
        }
      },
    })
  ).current;

  // ==================================================
  // UI
  // ==================================================

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity:
            screenOpacity,

          transform: [
            {
              scale:
                screenScale,
            },
          ],
        },
      ]}
    >

      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <ImageBackground
        source={require(
          "../components/photos/background.png"
        )}
        style={styles.background}
        resizeMode="cover"
      >
        <View
          style={styles.overlay}
        />
      </ImageBackground>

      {/* ==================================================
          HELLO TEXT
      ================================================== */}

      <View
        style={[
          styles.header,
          {
            top: headerTop,
            left:
              headerHorizontalPadding,
            right:
              headerHorizontalPadding,
          },
        ]}
      >
        <HelloText />
      </View>

      {/* ==================================================
          GO CONTAINER
      ================================================== */}

      <LinearGradient
        colors={[
          "rgba(245, 241, 209, 0.05)",
          "rgba(137, 154, 92, 0.4)",
        ]}
        locations={[
          0.16,
          0.58,
        ]}
        style={[
          styles.goContainer,
          {
            width:
              containerWidth,

            height:
              containerHeight,

            borderRadius:
              containerRadius,

            paddingVertical:
              isVerySmall
                ? 17
                : isSmall
                ? 19
                : isTablet
                ? 22
                : 20,

            bottom:
              bottomPosition,
          },
        ]}
      >

        {/* ==================================================
            ARROWS
        ================================================== */}

        <View
          style={styles.arrows}
        >

          <Ionicons
            name="chevron-up-outline"
            size={
              arrowSmallSize
            }
            color="rgba(217, 140, 140, 0.65)"
            style={{
              marginTop:
                isVerySmall
                  ? 21
                  : 25,
            }}
          />

          <Ionicons
            name="chevron-up-outline"
            size={
              arrowLargeSize
            }
            color="rgba(217, 140, 140, 1)"
            style={{
              marginTop:
                isVerySmall
                  ? -13
                  : -15,
            }}
          />

        </View>

        {/* ==================================================
            GO BUTTON
        ================================================== */}

        <Animated.View
          {...pan.panHandlers}
          style={[
            styles.button,
            {
              width:
                buttonSize,

              height:
                buttonSize,

              borderRadius:
                buttonRadius,

              transform: [
                {
                  translateY:
                    buttonY,
                },
              ],
            },
          ]}
        >

          <Text
            style={[
              styles.buttonText,
              {
                fontSize:
                  goTextSize,
              },
            ]}
          >
            Go!
          </Text>

        </Animated.View>

      </LinearGradient>

    </Animated.View>
  );
}

// ==================================================
// STYLES
// ==================================================

const styles = StyleSheet.create({

  // ==================================================
  // CONTAINER
  // ==================================================

  container: {
    flex: 1,
    
  },

  // ==================================================
  // BACKGROUND
  // ==================================================

  background: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
  height: "100%",

    justifyContent:
      "center",

    alignItems:
      "center",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,

    backgroundColor:
      "rgba(0,0,0,0.5)",
  },

  // ==================================================
  // HEADER
  // ==================================================

  header: {
    position: "absolute",

    alignItems:
      "flex-start",

    zIndex: 1,
  },

  // ==================================================
  // GO CONTAINER
  // ==================================================

  goContainer: {
    position: "absolute",

    alignSelf:
      "center",

    alignItems:
      "center",

    justifyContent:
      "space-between",

    overflow:
      "hidden",

    backgroundColor:
      "rgba(255,255,255,0.18)",
  },

  // ==================================================
  // ARROWS
  // ==================================================

  arrows: {
    alignItems:
      "center",

    justifyContent:
      "flex-start",
  },

  // ==================================================
  // BUTTON
  // ==================================================

  button: {
    justifyContent:
      "center",

    alignItems:
      "center",

    backgroundColor:
      "rgba(131, 150, 85, 0.8)",
  },

  // ==================================================
  // BUTTON TEXT
  // ==================================================

  buttonText: {
    fontFamily:
      "Inter",

    fontWeight:
      "300",

    fontStyle:
      "italic",

    color:
      "#F5F1D1",
  },

});