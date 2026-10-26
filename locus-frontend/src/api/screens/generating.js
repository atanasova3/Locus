
import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  Animated,
  Easing,
  StatusBar,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import generatingStyles from "../styles/generatingStyles";
import { getGeneratingLayoutMetrics } from "../utils/generatingLayout";

export default function GeneratingTrip() {
  const { width, height } = useWindowDimensions();
  const layout = getGeneratingLayoutMetrics(width, height);

  const dots = useRef([
    new Animated.Value(0.3),
    new Animated.Value(0.3),
    new Animated.Value(0.3),
  ]).current;

  useEffect(() => {
    const animations = dots.map((dot, index) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(index * 180),
          Animated.timing(dot, {
            toValue: 1,
            duration: 350,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(dot, {
            toValue: 0.3,
            duration: 350,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      )
    );

    animations.forEach((animation) => animation.start());

    return () => {
      animations.forEach((animation) => animation.stop());
    };
  }, [dots]);

  return (
    <View style={generatingStyles.screen}>
      <StatusBar barStyle="light-content" />

      <LinearGradient
          colors={[
              "#405D38",
              "#806959",
              "#9C6E68",
              "#996C66",
            ]}
            locations={[0, 0.54, 0.67, 0.92]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
        style={generatingStyles.gradient}
      >

        <View
          style={[
            generatingStyles.content,
            {
              width: layout.contentWidth,
              paddingHorizontal: layout.horizontalPadding,
            },
          ]}
        >
          {/* ROBOT ILLUSTRATION */}
          <View
            style={[
              generatingStyles.illustrationContainer,
              {
                height: layout.illustrationHeight,
              },
            ]}
          >
            <Image
              source={require("../components/photos/botche with suitcase.png")}
              resizeMode="contain"
              style={[
                generatingStyles.illustration,
                {
                  width: layout.illustrationWidth,
                  height: layout.illustrationHeight,
                },
              ]}
            />
          </View>

          {/* GENERATING MESSAGE */}
          <Text
            style={[
              generatingStyles.message,
              {
                fontSize: layout.messageFontSize,
                lineHeight: layout.messageLineHeight,
                marginTop: layout.messageMarginTop,
              },
            ]}
          >
            Generating offline maps and offline
            {"\n"}itineraries
          </Text>

          {/* ANIMATED DOTS */}
          <View
            style={[
              generatingStyles.dots,
              {
                gap: layout.dotGap,
                marginTop: layout.dotsMarginTop,
              },
            ]}
          >
            {dots.map((dot, index) => (
              <Animated.View
                key={index}
                style={[
                  generatingStyles.dot,
                  {
                    width: layout.dotSize,
                    height: layout.dotSize,
                    opacity: dot,
                  },
                ]}
              />
            ))}
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}