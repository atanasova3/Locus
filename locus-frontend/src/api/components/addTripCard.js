import React from "react";
import {
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";


import Menu from "../components/menu";


export default function AddTripCard() {
    const { width, height } = useWindowDimensions();
    // ==================================================
  // RESPONSIVE
  // ==================================================

  const BASE_WIDTH = 390;
  const BASE_HEIGHT = 844;

  const scale = Math.min(
    width / BASE_WIDTH,
    height / BASE_HEIGHT
  );

  const responsiveScale = Math.min(scale, 1.10);

  const s = (value) => value * responsiveScale;

  // Small / short screens
  const isVeryShort = height < 620;
  const isShort = height < 700;
  const isSmallScreen = width < 380;

  // ==================================================
  // RESPONSIVE SIZES
  // ==================================================

  const cardRadius = s(30);
  const addCardWidth = s(207);
  const addCardHeight = s(250);

  const addCardTitleSize = s(25);
  const addCardDescriptionSize = s(12);
  const cardMarginTop = isVeryShort
    ? s(12)
    : isShort
    ? s(18)
    : s(22);

    return (

          <TouchableOpacity
            activeOpacity={0.85}
            style={[
              styles.addTripCard,
              {
                width: addCardWidth,
                height: addCardHeight,
                borderRadius: cardRadius,
                marginTop: cardMarginTop,
                borderWidth: s(4),
              },
            ]}
          >

            <Text
              style={[
                styles.addTripTitle,
                {
                  fontSize: addCardTitleSize,
                  marginBottom: s(12),
                },
              ]}
            >
              Add trip +
            </Text>

            <Text
              style={[
                styles.addTripDescription,
                {
                  fontSize: addCardDescriptionSize,
                  lineHeight: s(15),
                  paddingHorizontal: s(23),
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

          </TouchableOpacity>

        );
}
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