import React from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function StepOne({ visible, onClose }) {
    const { width, height } = useWindowDimensions();
    
      // ==================================================
      // RESPONSIVE BREAKPOINTS
      // ==================================================
    
      const isVerySmall = width < 350;
      const isSmall = width < 380;
      const isTablet = width >= 600;
    
      const isVeryShort = height < 620;
      const isShort = height < 700;
    
      // ==================================================
      // HELPERS
      // ==================================================
    
      const clamp = (value, min, max) =>
        Math.min(Math.max(value, min), max);
    
      // ==================================================
      // MODAL WIDTH
      // ==================================================
    
      const modalHorizontalPadding = isTablet
        ? Math.min(width * 0.08, 70)
        : isSmall
        ? 16
        : 24;
    
      const modalWidth = isTablet
        ? Math.min(width * 0.72, 650)
        : width - modalHorizontalPadding * 2;
    
      // ==================================================
      // MODAL HEIGHT
      // ==================================================
    
      const modalHeight = isVeryShort
        ? 320
        : isShort
        ? 320
        : isTablet
        ? 470
        : isSmall
        ? 390
        : 380;
    
      // ==================================================
      // MODAL RADIUS
      // ==================================================
    
      const modalRadius = isVerySmall
        ? 24
        : isTablet
        ? 36
        : 32;
    
      // ==================================================
      // MODAL PADDING
      // ==================================================
    
      const modalTopPadding = isVeryShort
        ? 38
        : isShort
        ? 43
        : isTablet
        ? 55
        : 50;
    
      const modalSidePadding = isVerySmall
        ? 14
        : isSmall
        ? 16
        : isTablet
        ? 25
        : 18;
    
      // ==================================================
      // CLOSE BUTTON
      // ==================================================
    
      const closeSize = isVerySmall
        ? 26
        : isTablet
        ? 34
        : 30;
    
      const closeFontSize = isVerySmall
        ? 24
        : isTablet
        ? 32
        : 28;
    
      const closeRight = isVerySmall
        ? 12
        : isTablet
        ? 20
        : 17;
    
      const closeTop = isVeryShort
        ? 7
        : isTablet
        ? 12
        : 10;
    
    return (
        <Modal
          visible={visible}
          transparent
          animationType="fade"
          onRequestClose={onClose}
        >
          <View
            style={[
              styles.overlay,
              {
                paddingHorizontal: modalHorizontalPadding,
              },
            ]}
          >
            ```jsx
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
  style={[
    styles.modal,
    {
      width: modalWidth,
      height: modalHeight,
      borderRadius: modalRadius,
      paddingTop: modalTopPadding,
      paddingHorizontal: modalSidePadding,
    },
  ]}
>
  {/* DECORATIONS - НАЙ-ОТЗАД */}
  <Image
    source={require("./photos/Decorations.png")}
    resizeMode="stretch"
    style={styles.decorations}
  />

  {/* CLOSE - НАЙ-ОТГОРЕ */}
  <Pressable
    style={[
      styles.close,
      {
        width: closeSize,
        height: closeSize,
        right: closeRight,
        top: closeTop,
      },
    ]}
    onPress={onClose}
  >
    <Text
      style={[
        styles.closeText,
        {
          fontSize: closeFontSize,
        },
      ]}
    >
      ×
    </Text>
  </Pressable>
</LinearGradient>

                    </View>
                  </Modal>
                );
              }


const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    position: "relative",
    overflow: "hidden",
  },

  decorations: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },

  close: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    elevation: 10,
  },

  closeText: {
    color: "#e99a9a",
    fontWeight: "300",
    lineHeight: 30,
  },
});

