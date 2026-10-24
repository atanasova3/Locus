import React, { useState } from "react";
import {
  View,
  useWindowDimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import StepOne from "../components/Steps";
import { LinearGradient } from "expo-linear-gradient";
import addTripCardStyles from "../styles/addTripCardStyles";
import { getAddTripCardLayoutMetrics } from "../utils/addTripCardLayout";

const styles = addTripCardStyles;

export default function AddTripCard() {
  const { width, height } = useWindowDimensions();
    const [StepOneVisible, setStepOneVisible] = useState(false);
  const {
    cardWidth,
    cardHeight,
    cardRadius,
    titleSize,
    descriptionSize,
    cardMarginTop,
    titleMarginBottom,
    descriptionPadding,
    descriptionLineHeight,
  } = getAddTripCardLayoutMetrics(width, height);

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
