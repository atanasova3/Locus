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
  const { width, height } = useWindowDimensions();

  // ==========================================
  // RESPONSIVE SCALE
  // ==========================================

  const BASE_WIDTH = 390;
  const BASE_HEIGHT = 844;

  const scale = Math.min(
    width / BASE_WIDTH,
    height / BASE_HEIGHT
  );

  const responsiveScale = Math.max(
    0.75,
    Math.min(scale, 1.1)
  );

  const s = (value) =>
    value * responsiveScale;

  // ==========================================
  // RESPONSIVE VALUES
  // ==========================================

  const menuHeight = s(60);
  const logoSize = s(35);
  const iconSize = s(45);
  const gap = s(20);

  // ==========================================
  // VERY SMALL SCREEN
  // ==========================================

  const isVerySmall = width < 340;
  const isSmall = width < 380;
  const isShort = height < 700;

  const finalMenuHeight = isVerySmall
    ? s(47)
    : isSmall
    ? s(53)
    : menuHeight;

  const finalLogoSize = isVerySmall
    ? s(26)
    : isSmall
    ? s(29)
    : logoSize;

  const finalIconSize = isVerySmall
    ? s(35)
    : isSmall
    ? s(39)
    : iconSize;

  const finalGap = isVerySmall
    ? s(9)
    : isSmall
    ? s(13)
    : gap;

  // Малко по-нагоре при къси екрани
  const bottomPosition = isShort
    ? "5%"
    : "8%";

  return (
    <View
      style={[
        styles.container,
        {
          bottom: bottomPosition,
          paddingHorizontal:
            width * 0.08,
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
            height:
              finalMenuHeight,

            minHeight:
              finalMenuHeight,

            borderRadius:
              finalMenuHeight / 2,

            gap:
              finalGap,
          },
        ]}
      >

        {/* ================================= */}
        {/* 1. LOGO */}
        {/* ================================= */}

        <Pressable
          style={styles.item}
          hitSlop={10}
        >
          <Image
            source={require(
              "../components/photos/Asset 1.png"
            )}
            style={{
              width:
                finalLogoSize,
              height:
                finalLogoSize,
            }}
            resizeMode="contain"
          />
        </Pressable>

        {/* ================================= */}
        {/* 2. PAPER PLANE */}
        {/* ================================= */}

        <Pressable
          style={styles.item}
          hitSlop={10}
        >
          <Svg
            width={finalIconSize}
            height={finalIconSize}
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

        {/* ================================= */}
        {/* 3. PLUS */}
        {/* ================================= */}

        <Pressable
          style={styles.item}
          hitSlop={10}
        >
          <Svg
            width={finalIconSize}
            height={finalIconSize}
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

        {/* ================================= */}
        {/* 4. HAMBURGER */}
        {/* ================================= */}

        <Pressable
          style={styles.item}
          hitSlop={10}
        >
          <Svg
            width={finalIconSize}
            height={finalIconSize}
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

const styles = StyleSheet.create({
  container: {
    position: "absolute",

    left: 0,
    right: 0,

    alignItems: "center",
  },

  menu: {
    width: "100%",

    flexDirection: "row",

    alignItems: "center",

    justifyContent:
      "center",

    overflow: "hidden",
  },

  item: {
    alignItems: "center",

    justifyContent:
      "center",

    height: "100%",
  },
});