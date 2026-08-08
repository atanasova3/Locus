
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

export default function HelloHeader() {
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleTranslate = useRef(new Animated.Value(20)).current;

  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoTranslate = useRef(new Animated.Value(20)).current;

  const subtitleOpacity = useRef(new Animated.Value(0)).current;
  const subtitleTranslate = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
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
  }, []);

  return (
    <View style={styles.header}>

      <Animated.Text
        style={[
          styles.title,
          {
            opacity: titleOpacity,
            transform: [
              { translateY: titleTranslate }
            ],
          },
        ]}
      >
        Welcome
      </Animated.Text>

      <Animated.Image
        source={require("./photos/logo Locus 1.png")}
        style={[
          styles.logo,
          {
            opacity: logoOpacity,
            transform: [
              { translateY: logoTranslate }
            ],
          },
        ]}
      />

      <Animated.Text
        style={[
          styles.subtitle,
          {
            opacity: subtitleOpacity,
            transform: [
              { translateY: subtitleTranslate }
            ],
          },
        ]}
      >
        Escape the ordinary
      </Animated.Text>

    </View>
  );
}

const styles = StyleSheet.create({

title: {
    fontFamily: "Inter",
    color: "#F5F1D1",
    fontSize: 64,
    fontWeight: "300",
  },
  logo: {
    position: "absolute",
    top: 70,
    width: 282,
    height: 74,
  },
  subtitle: {
    fontFamily: "Inter",
    color: "#F5F1D1",
    fontSize: 24,
    fontWeight: "400",
    marginTop: 70,
  },
});

