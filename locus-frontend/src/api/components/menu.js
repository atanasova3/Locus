
import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Menu() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#405D38", "#899A5C", "#405D38"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.menu}
      >
       <View style={styles.overlay}></View> 
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "8%",
    paddingHorizontal: "10%",
    alignItems: "center",
  },

  menu: {
    width: "100%",
    height: 67,
    borderRadius: 35,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  overlay: {
    width: "100%",
    height: 67,
    backgroundColor: "rgba(64, 93, 56, 0.3)"
  }
});

