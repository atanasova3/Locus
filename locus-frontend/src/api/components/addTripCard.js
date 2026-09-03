import React, { useState } from "react";
import {
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import StepOne from "../components/Steps";
import { LinearGradient } from "expo-linear-gradient";

export default function AddTripCard() {
  const { width, height } = useWindowDimensions();
    const [StepOneVisible, setStepOneVisible] = useState(false);

  // ==================================================
  // SCREEN SIZE
  // ==================================================

  const isVerySmall = width < 350;
  const isSmall = width < 380;
  const isTablet = width >= 600;

  const isVeryShort = height < 620;
  const isShort = height < 700;

  // ==================================================
  // CARD SIZE
  // ==================================================

  const cardWidth = isVerySmall
    ? 175
    : isSmall
    ? 187
    : isTablet
    ? 240
    : 220;


  const cardHeight = isVerySmall
    ? 200
    : isSmall
    ? 205
    : 270;

  const cardRadius = isVerySmall
    ? 25
    : 30;

  

  // ==================================================
  // TEXT SIZE
  // ==================================================

  const titleSize = isVerySmall
    ? 23
    : isSmall
    ? 28
    : 30;

  const descriptionSize = isVerySmall
    ? 12
    : isSmall
    ? 13
    : 14;

  // ==================================================
  // SPACING
  // ==================================================

  const cardMarginTop = isVeryShort
    ? 3
    : isShort
    ? 5
    : 10;

  const titleMarginBottom = isVerySmall
    ? 8
    : 12;

  const descriptionPadding = isVerySmall
    ? 14
    : isSmall
    ? 18
    : 23;

  const descriptionLineHeight = isVerySmall
    ? 13
    : isSmall
    ? 14
    : 15;

  // ==================================================
  // UI
  // ==================================================

  return (
    <TouchableOpacity
    onPress={() => setStepOneVisible(true)}
      activeOpacity={0.9}
      style={[
        styles.addTripCard,
        {
          width: cardWidth,
          height: cardHeight,
          borderRadius: cardRadius,
          marginTop: cardMarginTop,
          borderWidth: 4,
        },
      ]}
    >
      {/* ==============================================
          TITLE
      ============================================== */}

      <Text
        style={[
          styles.addTripTitle,
          {
            fontSize: titleSize,
            marginBottom: titleMarginBottom,
          },
        ]}
      >
        Add trip +
      </Text>

      {/* ==============================================
          DESCRIPTION
      ============================================== */}

      <Text
        style={[
          styles.addTripDescription,
          {
            fontSize: descriptionSize,
            lineHeight: descriptionLineHeight,
            paddingHorizontal: descriptionPadding,
          },
        ]}
      >
        Plan your dream trip, your{"\n"}
        way. Get a custom hourly{"\n"}
        itinerary, local gems, and{"\n"}
        real-time AI guidance{"\n"}
        tailored to your interests{"\n"}
        and budget.
      </Text>
         <StepOne
        visible={StepOneVisible}
        onClose={() => setStepOneVisible(false)}
      />
    </TouchableOpacity>
  );
}

// ==================================================
// STYLES
// ==================================================

const styles = StyleSheet.create({
  addTripCard: {
    backgroundColor: "rgba(207, 146, 138, 0.65)",
    borderColor: "#CF928A",

    alignItems: "center",
    justifyContent: "center",
  },

  addTripTitle: {
    color: "#F5F1D1",
    fontStyle: "italic",
    fontWeight: "500",
  },

  addTripDescription: {
    color: "#F5F1D1",
    textAlign: "center",
    fontStyle: "italic",
  },
});