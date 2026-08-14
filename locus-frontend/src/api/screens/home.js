
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import { BlurView } from "expo-blur";
import Menu from "../components/menu";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../components/photos/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <BlurView
        intensity={40}
        tint="dark"
        style={styles.blur}
      />
      <View style={styles.overlay} />
      < Menu />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  blur: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

