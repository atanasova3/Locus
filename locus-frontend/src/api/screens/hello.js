import React, { useRef, useState } from "react";
import {
  Animated,
  ImageBackground,
  PanResponder,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import HelloText from "../components/HelloText";
import helloStyles from "../styles/helloStyles";
import { getHelloLayoutMetrics } from "../utils/helloLayout";

const styles = helloStyles;

export default function HelloScreen() {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  const buttonY = useRef(new Animated.Value(0)).current;
  const screenOpacity = useRef(new Animated.Value(1)).current;
  const screenScale = useRef(new Animated.Value(1)).current;
  const [isNavigating, setIsNavigating] = useState(false);

  const {
    isVerySmall,
    isSmall,
    isTablet,
    buttonSize,
    containerWidth,
    containerHeight,
    goTextSize,
    arrowSmallSize,
    arrowLargeSize,
    bottomPosition,
    headerTop,
    headerHorizontalPadding,
    containerRadius,
    buttonRadius,
  } = getHelloLayoutMetrics(width, height);

  const handleGoToLogin = () => {
    if (isNavigating) return;

    setIsNavigating(true);

    Animated.parallel([
      Animated.timing(screenOpacity, {
        toValue: 0,
        duration: 550,
        useNativeDriver: true,
      }),
      Animated.timing(screenScale, {
        toValue: 1.04,
        duration: 550,
        useNativeDriver: true,
      }),
      Animated.timing(buttonY, {
        toValue: -90,
        duration: 450,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      if (finished) {
        navigation.navigate("GeneratingTrip");
      }
    });
  };

  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !isNavigating,
      onPanResponderMove: (evt, gestureState) => {
        const y = gestureState.dy;

        if (y < 0 && y > -90) {
          buttonY.setValue(y);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dy < -80) {
          handleGoToLogin();
        } else {
          Animated.spring(buttonY, {
            toValue: 0,
            useNativeDriver: true,
            friction: 7,
            tension: 45,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: screenOpacity,
          transform: [{ scale: screenScale }],
        },
      ]}
    >
      <ImageBackground
        source={require("../components/photos/background.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
      </ImageBackground>

      <View
        style={[
          styles.header,
          {
            top: headerTop,
            left: headerHorizontalPadding,
            right: headerHorizontalPadding,
          },
        ]}
      >
        <HelloText />
      </View>

      <LinearGradient
        colors={[
          "rgba(245, 241, 209, 0.05)",
          "rgba(137, 154, 92, 0.4)",
        ]}
        locations={[0.16, 0.58]}
        style={[
          styles.goContainer,
          {
            width: containerWidth,
            height: containerHeight,
            borderRadius: containerRadius,
            paddingVertical: isVerySmall ? 17 : isSmall ? 19 : isTablet ? 22 : 20,
            bottom: bottomPosition,
          },
        ]}
      >
        <View style={styles.arrows}>
          <Ionicons
            name="chevron-up-outline"
            size={arrowSmallSize}
            color="rgba(217, 140, 140, 0.65)"
            style={{ marginTop: isVerySmall ? 21 : 25 }}
          />
          <Ionicons
            name="chevron-up-outline"
            size={arrowLargeSize}
            color="rgba(217, 140, 140, 1)"
            style={{ marginTop: isVerySmall ? -13 : -15 }}
          />
        </View>

        <Animated.View
          {...pan.panHandlers}
          style={[
            styles.button,
            {
              width: buttonSize,
              height: buttonSize,
              borderRadius: buttonRadius,
              transform: [{ translateY: buttonY }],
            },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              {
                fontSize: goTextSize,
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
