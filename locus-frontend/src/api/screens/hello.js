import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function HelloScreen() {
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
          <Text style={styles.title}>Welcome to</Text>
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
    top: 200,
    left: 25,
    right: 25,
    zIndex: 1,
  },
  title: {
    fontFamily: "Inter",
    color: "#F5F1D1",
    fontSize: 64,
    fontWeight: "300",
  },
});

