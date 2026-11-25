import React, { useState } from "react";
import {
  View,
  Pressable,
  Image,
  useWindowDimensions,
  Modal
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import menuStyles from "../styles/menuStyles";
import { getMenuLayoutMetrics } from "../utils/menuLayout";
import { useNavigation } from "@react-navigation/native";
import Steps from "../components/Steps.js";
import SideMenu from "../components/sideMenu.js";

const styles = menuStyles;


export default function Menu() {
  const { width, height } = useWindowDimensions();
  const {
    menuHeight,
    logoSize,
    iconSize,
    menuGap,
    menuWidth,
    bottomPosition,
  } = getMenuLayoutMetrics(width, height);
  const navigation = useNavigation();
  const [StepOneVisible, setStepOneVisible] = useState(false);
  const [SideMenuVisible, setSideMenuVisible] = useState(false);

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
  onPress={() => navigation.navigate("HomeScreen")}
>
  <Image
    source={require("../components/photos/Asset 1.png")}
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
          onPress={() => setStepOneVisible(true)}
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
          onPress={() => setSideMenuVisible(true)}
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

        <Modal
  visible={StepOneVisible}
  transparent
  animationType="fade"
  onRequestClose={() => setStepOneVisible(false)}
>
  <Steps
    onClose={() => setStepOneVisible(false)}
  />
</Modal>

<SideMenu
  visible={SideMenuVisible}
  onClose={() => setSideMenuVisible(false)}
  onItemPress={(key) => {
    console.log("Selected:", key);
  }}
  onLogout={() => {
    console.log("Logout");
  }}
/>
      </LinearGradient>
    </View>
  );
}
