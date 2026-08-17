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
  const cardRadius = width * 0.08;

  return (
    <ImageBackground
      source={require("../components/photos/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* BLUR */}
      <BlurView
        intensity={40}
        tint="dark"
        style={styles.blur}
      />

      {/* DARK OVERLAY */}
      <View style={styles.overlay} />

      {/* CONTENT */}
      <SafeAreaView style={styles.safeArea}>

          {/* MENU */}
          <Menu />

          {/* ================= HEADER ================= */}
          <View style={styles.header}>

            {/* LOKI */}
            <View style={styles.lokiContainer}>
              <Image
                source={require("../components/photos/botche 1.png")}
                style={[
                  styles.loki,
                  {
                    width: width * 0.28,
                    height: width * 0.28,
                  },
                ]}
                resizeMode="contain"
              />
            </View>

            {/* SPEECH BUBBLE */}
            <View
              style={[
                styles.speechBubble,
                {
                  width: width * 0.36,
                  minHeight: width * 0.17,
                },
              ]}
            >
              <Text style={styles.speechTitle}>
                Hi, I'm Loki!
              </Text>

              <Text style={styles.speechText}>
                Where are we taking{"\n"}
                you today?
              </Text>
            </View>

            {/* PROFILE */}
            <TouchableOpacity style={styles.profileButton}>
              <Ionicons
                name="person-outline"
                size={width * 0.065}
                color="#F7F1D2"
              />
            </TouchableOpacity>

          </View>

          {/* ================= CURRENT TRIP ================= */}
          
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
    styles.currentTrip,
    {
      borderRadius: cardRadius,
      minHeight: width * 0.30,
    },
  ]}
>

  <View style={styles.tripTextContainer}>

    <Text
      style={[
        styles.currentTripTitle,
        {
          fontSize: width * 0.065,
        },
      ]}
    >
      No current trip
    </Text>

    <Text
      style={[
        styles.currentTripDate,
        {
          fontSize: width * 0.038,
        },
      ]}
    >
      No added date
    </Text>

    <View style={styles.peopleRow}>

      <Ionicons
        name="people-outline"
        size={width * 0.05}
        color="#F7F1D2"
      />

      <Text style={styles.peopleText}>
        No added people
      </Text>

    </View>

  </View>

  {/* EDIT */}
  <TouchableOpacity style={styles.editButton}>
    <Ionicons
      name="create-outline"
      size={width * 0.05}
      color="#D89791"
    />
  </TouchableOpacity>

  {/* NEXT */}
  <TouchableOpacity style={styles.nextButton}>

    <Ionicons
      name="chevron-forward"
      size={width * 0.06}
      color="#D89791"
    />

    <Ionicons
      name="chevron-forward"
      size={width * 0.06}
      color="#D89791"
      style={{ marginLeft: -10 }}
    />

  </TouchableOpacity>

</LinearGradient>

         

          {/* ================= MY TRIPS ================= */}

          <Text
            style={[
              styles.myTrips,
              {
                fontSize: width * 0.09,
                marginTop: height * 0.045,
              },
            ]}
          >
            My trips
          </Text>
<TouchableOpacity>
          <Text
            style={[
              styles.addTripText,
              {
                fontSize: width * 0.075,
              },
            ]}
          >
            Add trip +
          </Text>
</TouchableOpacity>
          {/* ================= ADD TRIP CARD ================= */}

          <TouchableOpacity
            activeOpacity={0.85}
            style={[
              styles.addTripCard,
              {
                width: width * 0.53,
                height: width * 0.60,
                borderRadius: cardRadius,
                marginTop: height * 0.025,
              },
            ]}
          >

            <Text
              style={[
                styles.addTripTitle,
                {
                  fontSize: width * 0.065,
                },
              ]}
            >
              Add trip +
            </Text>

            <Text
              style={[
                styles.addTripDescription,
                {
                  fontSize: width * 0.032,
                  paddingHorizontal: width * 0.06,
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


const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    marginHorizontal: "5%",
  },


  blur: {
    ...StyleSheet.absoluteFillObject,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  /* ================= HEADER ================= */

  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },

  lokiContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  speechBubble: {
    backgroundColor: "rgba(190, 135, 128, 0.90)",
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: "center",
    marginLeft: -5,
  },

  speechTitle: {
    color: "#F7F1D2",
    fontSize: 13,
    fontStyle: "italic",
    marginBottom: 4,
  },

  speechText: {
    color: "#F7F1D2",
    fontSize: 12,
    fontStyle: "italic",
    lineHeight: 15,
  },

  profileButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 2,
    borderColor: "#F7F1D2",
    alignItems: "center",
    justifyContent: "center",
  },

  /* ================= CURRENT TRIP ================= */

  currentTrip: {
    width: "100%",
    padding: 16,
    position: "relative",
    borderWidth: 4,
    borderColor: "#405D38",
  },

  tripTextContainer: {
    flex: 1,
  },

  currentTripTitle: {
    color: "#F7F1D2",
    fontWeight: "500",
  },

  currentTripDate: {
    color: "#D99A91",
    marginTop: 1,
  },

  peopleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  peopleText: {
    color: "#F7F1D2",
    fontSize: 12,
    marginLeft: 5,
  },

  editButton: {
    position: "absolute",
    top: 18,
    right: 17,
  },

  nextButton: {
    position: "absolute",
    right: 14,
    bottom: 17,
    width: 34,
    height: 34,
    borderRadius: 18,
    backgroundColor: "#D89791",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  /* ================= MY TRIPS ================= */

  myTrips: {
    color: "#D89791",
    fontWeight: "600",
  },

  addTripText: {
    color: "#F7F1D2",
    fontStyle: "italic",
    marginTop: 18,
  },

  /* ================= ADD TRIP ================= */

  addTripCard: {
    backgroundColor: "rgba(180, 130, 123, 0.82)",
    borderWidth: 4,
    borderColor: "#D99A91",
    alignItems: "center",
    justifyContent: "center",
  },

  addTripTitle: {
    color: "#F7F1D2",
    fontStyle: "italic",
    fontWeight: "500",
    marginBottom: 12,
  },

  addTripDescription: {
    color: "#F7F1D2",
    textAlign: "center",
    fontStyle: "italic",
    lineHeight: 15,
  },
});