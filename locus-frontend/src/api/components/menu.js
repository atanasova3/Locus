import React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";

export default function Menu() {
  const { width, height } =
    useWindowDimensions();

  // ==================================================
  // SCREEN SIZE
  // ==================================================

  const isVerySmall =
    width < 350;

  const isSmall =
    width < 380;

  const isTablet =
    width >= 600;

  const isVeryShort =
    height < 620;

  const isShort =
    height < 700;

  // ==================================================
  // MENU SIZE
  // ==================================================

  const menuHeight = isVerySmall
    ? 47
    : isSmall
    ? 53
    : isTablet
    ? 68
    : 60;

  // ==================================================
  // ICON SIZE
  // ==================================================

  const logoSize = isVerySmall
    ? 26
    : isSmall
    ? 29
    : isTablet
    ? 40
    : 35;

  const iconSize = isVerySmall
    ? 35
    : isSmall
    ? 39
    : isTablet
    ? 50
    : 45;

  // ==================================================
  // GAP
  // ==================================================

  const menuGap = isVerySmall
    ? 9
    : isSmall
    ? 13
    : isTablet
    ? 25
    : 20;

  // ==================================================
  // MENU WIDTH
  // ==================================================

  const horizontalPadding =
    isTablet
      ? Math.min(width * 0.08, 70)
      : isVerySmall
      ? 12
      : isSmall
      ? 16
      : 25;

  const menuWidth =
    width -
    horizontalPadding * 5;

  // ==================================================
  // BOTTOM
  // ==================================================

  const bottomPosition =
    isVeryShort
      ? height * 0.025
      : isShort
      ? height * 0.035
      : isTablet
      ? height * 0.055
      : height * 0.06;

  // ==================================================
  // UI
  // ==================================================

  return (
    <View
      style={[
        styles.container,
        {
          bottom: bottomPosition,
          width: menuWidth,
          alignSelf: "center",
        },
      ]}
    >
      <LinearGradient
        colors={[
          "#405D38",
          "#899A5C",
          "#405D38",
        ]}
        start={{
          x: 0,
          y: 0.5,
        }}
        end={{
          x: 1,
          y: 0.5,
        }}
        style={[
          styles.menu,
          {
            height: menuHeight,
            minHeight: menuHeight,
            borderRadius: menuHeight / 2,
            gap: menuGap,
          },
        ]}
      >
        {/* ==================================================
            LOGO
        ================================================== */}

        <Pressable
          style={styles.item}
          hitSlop={10}
        >
          <Image
            source={require(
              "../components/photos/Asset 1.png"
            )}
            style={{
              width: logoSize,
              height: logoSize,
            }}
            resizeMode="contain"
          />
        </Pressable>

        {/* ==================================================
            PAPER PLANE
        ================================================== */}

        <Pressable
          style={styles.item}
          hitSlop={10}
        >
          <Svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 50 50"
          >
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

        {/* ==================================================
            PLUS
        ================================================== */}

        <Pressable
          style={styles.item}
          hitSlop={10}
        >
          <Svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 50 50"
          >
            <Path
              d="M26 8 V44 M8 26 H44"
              stroke="#F3F0D5"
              strokeWidth={6}
              strokeLinecap="round"
            />
          </Svg>
        </Pressable>

        {/* ==================================================
            HAMBURGER
        ================================================== */}

        <Pressable
          style={styles.item}
          hitSlop={10}
        >
          <Svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 50 50"
          >
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

// ==================================================
// STYLES
// ==================================================

const styles = StyleSheet.create({
  container: {
    position: "absolute",

    alignItems: "center",

    zIndex: 100,
  },

  menu: {
    width: "100%",

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "center",

    overflow: "hidden",
  },

  item: {
    alignItems: "center",

    justifyContent: "center",

    height: "100%",
  },
});