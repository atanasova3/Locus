import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from "react-native";

import { BlurView } from "expo-blur";
import Menu from "../components/menu";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import AddTripCard from "../components/addTripCard";
import TripCard from "../components/TripCard";

export default function HomeScreen() {
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
  // CONTENT WIDTH
  // ==================================================

  // На телефон използваме почти целия екран.
  // На tablet ограничаваме съдържанието, за да не стане
  // прекалено разтеглено.
  const horizontalPadding = isTablet
    ? Math.min(width * 0.08, 70)
    : isSmall
    ? 21
    : 25;

  const contentWidth = Math.min(
    width - horizontalPadding * 2,
    700
  );

  // ==================================================
  // RESPONSIVE HELPERS
  // ==================================================

  const clamp = (value, min, max) =>
    Math.min(Math.max(value, min), max);

  // ==================================================
  // HEADER SIZES
  // ==================================================

  const lokiSize = isVerySmall
    ? 92
    : isSmall
    ? 102
    : isTablet
    ? 125
    : 115;

  const speechWidth = isVerySmall
    ? 142
    : isSmall
    ? 152
    : isTablet
    ? 190
    : 160;

  const speechHeight = isVerySmall
    ? 70
    : isShort
    ? 72
    : 80;

  const profileSize = isVerySmall
    ? 36
    : isSmall
    ? 39
    : 42;

  const profileIconSize = isVerySmall
    ? 21
    : 24;

  const lokiTranslateX = isVerySmall
    ? 18
    : isSmall
    ? 24
    : 30;
  // ==================================================
  // CURRENT TRIP
  // ==================================================

  const currentTripHeight = isVeryShort
    ? 110
    : isShort
    ? 118
    : 125;

  const currentTripTitleSize = clamp(
    width * 0.064,
    22,
    28
  );

  const currentTripDateSize = clamp(
    width * 0.038,
    13,
    16
  );

  const peopleIconSize = clamp(
    width * 0.052,
    18,
    22
  );

  const peopleTextSize = clamp(
    width * 0.031,
    11,
    13
  );

  // ==================================================
  // MY TRIPS
  // ==================================================

  const myTripsSize = clamp(
    width * 0.09,
    30,
    38
  );

  const addTripTextSize = clamp(
    width * 0.074,
    26,
    31
  );

  // ==================================================
  // VERTICAL SPACING
  // ==================================================

  const topMargin = isVeryShort
    ? 58
    : isShort
    ? 68
    : isTablet
    ? 75
    : 85;

  const headerMarginBottom = isVeryShort
    ? 3
    : isShort
    ? 8
    : 15;

  const myTripsMarginTop = isVeryShort
    ? 2
    : isShort
    ? 8
    : 15;

  const addTripMarginTop = isVeryShort
    ? 8
    : isShort
    ? 12
    : 18;

  const cardMarginTop = isVeryShort
    ? 2
    : isShort
    ? 6
    : 10;

  return (
    <ImageBackground
      source={require("../components/photos/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* ==================================================
          BLUR
      ================================================== */}

      <BlurView
        intensity={40}
        tint="dark"
        style={styles.blur}
      />

      {/* ==================================================
          DARK OVERLAY
      ================================================== */}

      <View style={styles.overlay} />

      {/* ==================================================
          MENU
      ================================================== */}

      <Menu />

      {/* ==================================================
          SAFE AREA
      ================================================== */}

      <SafeAreaView
        style={[
          styles.safeArea,
          {
            paddingHorizontal: horizontalPadding,
            marginTop: topMargin,
          },
        ]}
      >
    

          {/* ==================================================
              CONTENT CONTAINER
          ================================================== */}

          <View
            style={[
              styles.content,
              {
                width: contentWidth,
                alignSelf: "center",
              },
            ]}
          >
            {/* ==================================================
                HEADER
            ================================================== */}

            <View
              style={[
                styles.header,
                {
                  marginBottom: headerMarginBottom,
                },
              ]}
            >
              {/* ==================================================
                  HERO GRADIENT
              ================================================== */}

              <LinearGradient
                colors={[
                  "rgba(207, 146, 138, 0)",
                  "rgba(207, 146, 138, 0.36)",
                  "rgba(207, 146, 138, 0.7)",
                ]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={[
                  styles.heroGradient,
                  {
                    height: speechHeight,
                    width: Math.min(
                      contentWidth,
                      isTablet ? 445 : 315
                    ),
                    borderRadius: 28,
                    top: 12,
                  },
                ]}
              />

              {/* ==================================================
                  HERO CONTENT
              ================================================== */}

              <View
                style={[
                  styles.heroContent,
                  {
                    minHeight: speechHeight + 25,
                  },
                ]}
              >
                {/* ==================================================
                    LOKI
                ================================================== */}

                <View
                  style={[
                    styles.lokiContainer,
                    {
                      width: lokiSize,
                       transform: [{ translateX: lokiTranslateX }],
                       zIndex: 2,
                    },
                  ]}
                >
                  <Image
                    source={require("../components/photos/botche 1.png")}
                    style={{
                      width: lokiSize,
                      height: lokiSize,
                      marginBottom: -20,

                    }}
                    resizeMode="contain"
                  />
                </View>

                {/* ==================================================
                    SPEECH BUBBLE
                ================================================== */}

                <View
                  style={[
                    styles.speechBubble,
                    {
                      width: speechWidth,
                      minHeight: speechHeight,
                      borderRadius: 28,
                      paddingHorizontal: isVerySmall
                        ? 9
                        : 12,
                      paddingVertical: 9,
                      marginLeft: isVerySmall
                        ? 5
                        : 12,
                        zIndex: 1,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.speechTitle,
                      {
                        fontSize: isVerySmall ? 12 : 14,
                        marginBottom: 4,
                      },
                    ]}
                  >
                    Hi, I'm Loki!
                  </Text>

                  <Text
                    style={[
                      styles.speechText,
                      {
                        fontSize: isVerySmall ? 11 : 13,
                        lineHeight: isVerySmall ? 14 : 16,
                      },
                    ]}
                  >
                    Where are we taking{"\n"}
                    you today?
                  </Text>
                </View>

                {/* ==================================================
                    PROFILE
                ================================================== */}

                <TouchableOpacity
                  style={[
                    styles.profileButton,
                    {
                      width: profileSize,
                      height: profileSize,
                      borderRadius: profileSize / 2,
                      borderWidth: 2,
                      marginLeft: isVerySmall ? 3 : 6,
                    },
                  ]}
                >
                  <Ionicons
                    name="person-outline"
                    size={profileIconSize}
                    color="#F5F1D1"
                  />
                </TouchableOpacity>
              </View>

              {/* ==================================================
                  CURRENT TRIP
              ================================================== */}

              <LinearGradient
                colors={[
                  "#405D38",
                  "#899A5C",
                  "#405D38",
                ]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={[
                  styles.currentTrip,
                  {
                    height: currentTripHeight,
                    borderRadius: isTablet ? 32 : 30,
                    padding: isVerySmall ? 13 : 16,
                    borderWidth: 4,
                  },
                ]}
              >
                <View style={styles.tripTextContainer}>
                  <Text
                    style={[
                      styles.currentTripTitle,
                      {
                        fontSize: currentTripTitleSize,
                      },
                    ]}
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    minimumFontScale={0.8}
                  >
                    No current trip
                  </Text>

                  <Text
                    style={[
                      styles.currentTripDate,
                      {
                        fontSize: currentTripDateSize,
                        marginTop: 1,
                      },
                    ]}
                  >
                    No added date
                  </Text>

                  <View
                    style={[
                      styles.peopleRow,
                      {
                        marginTop: isVerySmall ? 7 : 10,
                      },
                    ]}
                  >
                    <Ionicons
                      name="people-outline"
                      size={peopleIconSize}
                      color="#F5F1D1"
                    />

                    <Text
                      style={[
                        styles.peopleText,
                        {
                          fontSize: peopleTextSize,
                          marginLeft: 5,
                        },
                      ]}
                      numberOfLines={1}
                    >
                      No added people
                    </Text>
                  </View>
                </View>

                {/* ==================================================
                    EDIT
                ================================================== */}

                <TouchableOpacity
                  style={[
                    styles.editButton,
                    {
                      top: isVerySmall ? 14 : 18,
                      right: isVerySmall ? 13 : 17,
                    },
                  ]}
                >
                  <Ionicons
                    name="create-outline"
                    size={20}
                    color="#CF928A"
                  />
                </TouchableOpacity>

                {/* ==================================================
                    NEXT
                ================================================== */}

                <TouchableOpacity
                  style={[
                    styles.nextButton,
                    {
                      right: isVerySmall ? 11 : 14,
                      bottom: isVerySmall ? 14 : 17,
                      width: isVerySmall ? 31 : 34,
                      height: isVerySmall ? 31 : 34,
                      borderRadius: 18,
                    },
                  ]}
                >
                  <Ionicons
                    name="chevron-forward"
                    size={isVerySmall ? 20 : 22}
                    color="#405D38"
                  />

                  <Ionicons
                    name="chevron-forward"
                    size={isVerySmall ? 20 : 22}
                    color="rgba(64, 93, 56, 0.6)"
                    style={{
                      marginLeft: -11,
                    }}
                  />
                </TouchableOpacity>
              </LinearGradient>
            </View>

            {/* ==================================================
                MY TRIPS
            ================================================== */}

            <Text
              style={[
                styles.myTrips,
                {
                  fontSize: myTripsSize,
                  marginTop: myTripsMarginTop,
                },
              ]}
            >
              My trips
            </Text>

            {/* ==================================================
                ADD TRIP
            ================================================== */}

            <View
              style={{
                marginTop: addTripMarginTop,
              }}
            >
              <View
                style={{
                  width: 45,
                  height: 7,
                  backgroundColor: "#F7F1D2",
                  borderRadius: 6,
                  marginBottom: 5,
                }}
              />

              <TouchableOpacity>
                <Text
                  style={[
                    styles.addTripText,
                    {
                      fontSize: addTripTextSize,
                    },
                  ]}
                >
                  Add trip +
                </Text>
              </TouchableOpacity>
            </View>

            {/* ==================================================
                ADD TRIP CARD
            ================================================== */}

            <View
              style={{
                marginTop: cardMarginTop,
                width: "100%",
              }}
            >
              <AddTripCard />
            </View>
          </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

// ==================================================
// STYLES
// ==================================================

const styles = StyleSheet.create({
  // ==================================================
  // BACKGROUND
  // ==================================================

  background: {
    flex: 1,
  },

  blur: {
    ...StyleSheet.absoluteFillObject,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  // ==================================================
  // SAFE AREA
  // ==================================================

  safeArea: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
  },

  // ==================================================
  // HEADER
  // ==================================================

  header: {
    width: "100%",
    position: "relative",
  },

  heroGradient: {
    position: "absolute",
    left: 0,
    zIndex: 0,
  },

  heroContent: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1,
  },

  lokiContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 1,
  },

  speechBubble: {
    backgroundColor: "rgba(207, 146, 138, 0.92)",
    justifyContent: "center",
    flexShrink: 1,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,

    elevation: 4,
  },

  speechTitle: {
    color: "#F5F1D1",
    fontStyle: "italic",
    fontWeight: "500",
  },

  speechText: {
    color: "#F5F1D1",
    fontStyle: "italic",
    fontWeight: "500",
  },

  profileButton: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#F5F1D1",
    backgroundColor: "rgba(245, 241, 209, 0.05)",
  },

  // ==================================================
  // CURRENT TRIP
  // ==================================================

  currentTrip: {
    width: "100%",
    position: "relative",
    borderColor: "#405D38",
  },

  tripTextContainer: {
    flex: 1,
    paddingRight: 45,
  },

  currentTripTitle: {
    color: "#F5F1D1",
    fontWeight: "500",
  },

  currentTripDate: {
    color: "rgba(207, 146, 138, 0.75)",
  },

  peopleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  peopleText: {
    color: "#F5F1D1",
  },

  editButton: {
    position: "absolute",
  },

  nextButton: {
    position: "absolute",
    backgroundColor: "#CF928A",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 2,
  },

  // ==================================================
  // MY TRIPS
  // ==================================================

  myTrips: {
    color: "#CF928A",
    fontWeight: "600",
  },

  addTripText: {
    color: "#F5F1D1",
    fontStyle: "italic",
  },
});