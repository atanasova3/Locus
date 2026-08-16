import React from "react";
import { StyleSheet, View, Pressable, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get("window");

export default function Menu() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#405D38", "#899A5C", "#405D38"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.menu}
      >

        {/* 1. Logo */}
        <Pressable style={styles.item}>
          <Image
            source={require("../components/photos/Asset 1.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </Pressable>

        {/* 2. Paper plane */}
        <Pressable style={styles.item}>
          <Svg width={styles.iconSize.width} height={styles.iconSize.height} viewBox="0 0 50 50">
            <Path
              d="M8 25 L42 8 L30 42 L24 28 Z"
              fill="none"
              stroke="#F3F0D5"
              strokeWidth={4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </Pressable>

        {/* 3. Plus */}
        <Pressable style={styles.item}>
          <Svg width={styles.iconSize.width} height={styles.iconSize.height} viewBox="0 0 50 50">
            <Path
              d="M26 8 V44 M8 26 H44"
              stroke="#F3F0D5"
              strokeWidth={6}
              strokeLinecap="round"
            />
          </Svg>
        </Pressable>

        {/* 4. Hamburger */}
        <Pressable style={styles.item}>
          <Svg width={styles.iconSize.width} height={styles.iconSize.height} viewBox="0 0 50 50">
            <Path
              d="M8 12 H44"
              stroke="#F3F0D5"
              strokeWidth={6}
              strokeLinecap="round"
            />

            <Path
              d="M8 26 H44"
              stroke="#F3F0D5"
              strokeWidth={6}
              strokeLinecap="round"
            />

            <Path
              d="M8 40 H44"
              stroke="#F3F0D5"
              strokeWidth={6}
              strokeLinecap="round"
            />
          </Svg>
        </Pressable>

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
    minHeight: 60,
    height: width < 380 ? 60 : 67,
    borderRadius: 35,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    gap: width < 380 ? 13 : 20,

    overflow: "hidden",
  },

  item: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: width < 380 ? 34 : 40,
    height: width < 380 ? 34 : 40,
  },

  iconSize: {
    width: width < 380 ? 44 : 50,
    height: width < 380 ? 44 : 50,
  },
});