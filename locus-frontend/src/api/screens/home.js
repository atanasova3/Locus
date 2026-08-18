import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { BlurView } from "expo-blur";
import Menu from "../components/menu";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
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

  const lokiSize = s(120);

  const speechWidth = s(160);
  const speechMinHeight = s(72);

  const profileSize = s(42);
  const profileIconSize = s(25);

  const currentTripHeight = s(125);

  const currentTripTitleSize = s(25);
  const currentTripDateSize = s(15);
  const peopleIconSize = s(20);
  const peopleTextSize = s(12);

  const myTripsSize = s(35);
  const addTripTextSize = s(29);

  const addCardWidth = s(207);
  const addCardHeight = s(250);

  const addCardTitleSize = s(25);
  const addCardDescriptionSize = s(12);

  // ==================================================
  // RESPONSIVE SPACING
  // ==================================================

  let topPadding;

  if (isVeryShort) {
    topPadding = s(3);
  } else if (isShort) {
    topPadding = s(7);
  } else {
    topPadding = s(10);
  }

  const headerMarginBottom = isVeryShort
    ? s(8)
    : isShort
    ? s(12)
    : s(18);

  const tripMarginTop = isVeryShort
    ? s(5)
    : isShort
    ? s(8)
    : s(10);

  const myTripsMarginTop = isVeryShort
    ? s(20)
    : isShort
    ? s(28)
    : s(38);

  const addTripMarginTop = isVeryShort
    ? s(8)
    : isShort
    ? s(12)
    : s(18);

  const cardMarginTop = isVeryShort
    ? s(12)
    : isShort
    ? s(18)
    : s(22);

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
          CONTENT
      ================================================== */}

      <SafeAreaView style={styles.safeArea}>
          {/* ==================================================
              MENU
          ================================================== */}

          <Menu />

         {/* ==================================================
    HEADER
================================================== */}

<View style={styles.header}>

  {/* ==================================================
      GRADIENT BEHIND HERO / SPEECH BUBBLE
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
        height: s(80),
        width: s(306),
        borderRadius: s(28),
        zIndex: 0,
        top: s(12)
      },
    ]}
  />

  {/* ==================================================
      HEADER CONTENT
  ================================================== */}

  <View
    style={[
      styles.heroContent,
      {
        minHeight: s(80),
        zIndex: 1,
      },
    ]}
  >

    {/* ==================================================
        LOKI
    ================================================== */}

    <View style={styles.lokiContainer}>
      <Image
        source={require("../components/photos/botche 1.png")}
        style={{
          width: lokiSize,
          height: lokiSize,
          marginBottom: -s(16),
          transform: [{ translateX: s(22) }],
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
          minHeight: speechMinHeight,
          height: s(80),
          borderRadius: s(28),
          paddingHorizontal: s(12),
          paddingVertical: s(10),
          marginLeft: s(20),
          zIndex: 2,
        },
      ]}
    >

      <Text
        style={[
          styles.speechTitle,
          {
            fontSize: s(14),
            marginBottom: s(4),
          },
        ]}
      >
        Hi, I'm Loki!
      </Text>

      <Text
        style={[
          styles.speechText,
          {
            fontSize: s(13),
            lineHeight: s(16),
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
          borderWidth: s(2),
          marginLeft: s(5),
          zIndex: 2,
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
        borderRadius: cardRadius,
        minHeight: currentTripHeight,
        marginTop: 0,
        padding: s(16),
        borderWidth: s(4),
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
      >
        No current trip
      </Text>

      <Text
        style={[
          styles.currentTripDate,
          {
            fontSize: currentTripDateSize,
            marginTop: s(1),
          },
        ]}
      >
        No added date
      </Text>

      <View
        style={[
          styles.peopleRow,
          {
            marginTop: s(10),
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
              marginLeft: s(5),
            },
          ]}
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
          top: s(18),
          right: s(17),
        },
      ]}
    >
      <Ionicons
        name="create-outline"
        size={s(20)}
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
          right: s(14),
          bottom: s(17),
          width: s(34),
          height: s(34),
          borderRadius: s(18),
          paddingLeft: s(2),
        },
      ]}
    >
      <Ionicons
        name="chevron-forward"
        size={s(22)}
        color="#405D38"
      />

      <Ionicons
        name="chevron-forward"
        size={s(22)}
        color="rgba(64, 93, 56, 0.6)"
        style={{
          marginLeft: -s(12),
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

<View style={{ marginTop: addTripMarginTop }}>

  <View
    style={{
      width: s(45),
      height: s(7),
      backgroundColor: "#F7F1D2",
      borderRadius: s(6),
      marginBottom: s(5),
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
    marginHorizontal: "5%",
  },

  // ==================================================
  // HEADER
  // ==================================================

   header: {
    width: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },

  heroGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
  },

  heroContent: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  lokiContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0,
  },

  speechBubble: {
    backgroundColor: "rgba(207, 146, 138, 0.92)",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
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
    marginTop: 0,
  },

  tripTextContainer: {
    flex: 1,
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

  // ==================================================
  // ADD TRIP CARD
  // ==================================================

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