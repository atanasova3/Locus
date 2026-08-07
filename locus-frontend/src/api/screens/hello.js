import React, { useEffect, useRef } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withSequence,
    withTiming
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";


  export default function HelloScreen() {
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
    <View style={styles.container}>
      <ImageBackground
        source={require("../components/photos/background.png")}
        style={styles.background}
        resizeMode="cover"
      >
      <View style={styles.overlay} />
      </ImageBackground>
      <View style={styles.header}>
        <Animated.Text
          style={[
            styles.title,
            {
              opacity: titleOpacity,
              transform: [{ translateY: titleTranslate }],
            },
          ]}
        >
          Welcome
        </Animated.Text>
        <Animated.Image
          source={require("../components/photos/logo Locus 1.png")}
          style={[
            styles.logo,
            {
              opacity: logoOpacity,
              transform: [{ translateY: logoTranslate }],
            },
          ]}
        />
        <Animated.Text
          style={[
            styles.subtitle,
            {
              opacity: subtitleOpacity,
              transform: [{ translateY: subtitleTranslate }],
            },
          ]}
        >
          Escape the ordinary
        </Animated.Text>
      </View>
      <View style={styles.gocontainer}>
    <Ionicons name="chevron-up"
          size={30}
          color="#D98C8C"
          style={{ marginTop: 25 }} />
    <Ionicons name="chevron-up"
          size={30}
          color="#D98C8C"
          style={{ marginTop: -18 }} />

    <TouchableOpacity style={styles.button}>
        <Text>Go!</Text>
    </TouchableOpacity>
</View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 0,
  },
  header: {
    position: "absolute",
    top: 210,
    left: 27,
    zIndex: 1,
  },
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
   gocontainer: {
     position: "absolute",
  right: 20,
  bottom: 40,

  width: 110,
  height: 280,
  borderRadius: 55,
  backgroundColor: "rgba(255,255,255,0.18)",

  alignItems: "center",
  justifyContent: "space-between",
  paddingVertical: 20,
  },

  button: {
    width: 95,
    height: 95,
    borderRadius: 47.5,
    backgroundColor: "#A7B96A",

    justifyContent: "center",
    alignItems: "center",
  },
});
  