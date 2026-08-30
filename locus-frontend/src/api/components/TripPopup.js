import React from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AddTripCard from "./addTripCard";
import TripCard from "./TripCard";

export default function TripPopup({ visible, onClose }) {
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
    ? 350
    : isShort
    ? 350
    : isTablet
    ? 470
    : isSmall
    ? 390
    : 430;

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

  // ==================================================
  // TITLE
  // ==================================================

  const titleSize = clamp(
    width * 0.08,
    24,
    isTablet ? 38 : 32
  );

  const titleMarginTop = isVeryShort
    ? 0
    : isTablet
    ? 3
    : 0;

  // ==================================================
  // LINE
  // ==================================================

  const lineMarginTop = isVerySmall
    ? 5
    : isShort
    ? 7
    : 8;

  // ==================================================
  // EMPTY TEXT
  // ==================================================

  const emptySize = clamp(
    width * 0.04,
    14,
    isTablet ? 18 : 16
  );

  const emptyMarginTop = isVeryShort
    ? 7
    : isShort
    ? 9
    : 11;

  // ==================================================
  // CARDS
  // ==================================================

  const cardsPaddingTop = isVeryShort
    ? 3
    : isShort
    ? 4
    : 5;

  const cardsGap = isVerySmall
    ? 16
    : isSmall
    ? 20
    : isTablet
    ? 10
    : 25;

  // ==================================================
  // CARD SCALE
  // ==================================================

  const cardWidth = isVerySmall
    ? 175
    : isSmall
    ? 187
    : isTablet
    ? 260
    : 220;

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
          {/* CLOSE */}
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

          {/* TITLE */}
          <Text
            style={[
              styles.title,
              {
                fontSize: titleSize,
                marginTop: titleMarginTop,
              },
            ]}
          >
            Select current trip
          </Text>

          {/* LINE */}
          <View
            style={[
              styles.line,
              {
                marginTop: lineMarginTop,
              },
            ]}
          />

          {/* EMPTY */}
          <Text
            style={[
              styles.empty,
              {
                fontSize: emptySize,
                marginTop: emptyMarginTop,
              },
            ]}
          >
            No trips founded
          </Text>

          {/* CARDS */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[
              styles.cards,
              {
                paddingTop: cardsPaddingTop,
                gap: cardsGap,
              },
            ]}
            decelerationRate="fast"
          >
            <View style={{ width: cardWidth }}>
              <AddTripCard />
            </View>

            <View style={{ width: cardWidth }}>
              <TripCard />
            </View>

            <View style={{ width: cardWidth }}>
              <TripCard />
            </View>

            <View style={{ width: cardWidth }}>
              <TripCard />
            </View>
          </ScrollView>
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

  close: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },

  closeText: {
    color: "#e99a9a",
    fontWeight: "300",
    lineHeight: 30,
  },

  title: {
    color: "#e09b9b",
    fontWeight: "600",
  },

  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#e0a0a0",
  },

  empty: {
    color: "#d0c9b9",
    fontStyle: "italic",
  },

  cards: {
    flexGrow: 1,
  },
});