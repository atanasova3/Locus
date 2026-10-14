import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView
} from "react-native";

import { BlurView } from "expo-blur";
import Menu from "../components/menu";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import AddTripCard from "../components/addTripCard";
import TripCard from "../components/TripCard";
import Line from "../components/line";
import TripPopup from "../components/TripPopup";
import Steps from "../components/Steps";
import MyProfile from "../components/myProfile";
import YourGuide from "../components/yourGuide";
import homeStyles from "../styles/homeStyles";
import { getHomeLayoutMetrics } from "../utils/homeLayout";

const styles = homeStyles;





export default function HomeScreen() {
  const { width, height } = useWindowDimensions();
  const [tripPopupVisible, setTripPopupVisible] = useState(false);
  const [StepsVisible, setStepsVisible] = useState(false);
  const [myProfileVisible, setmyProfileVisible] = useState(false);
  const [yourGuideVisible, setYourGuideVisible] = useState(false);

  const {
    isVerySmall,
    isTablet,
    horizontalPadding,
    contentWidth,
    lokiSize,
    speechWidth,
    speechHeight,
    profileSize,
    profileIconSize,
    lokiTranslateX,
    grandientWidth,
    robotPadding,
    currentTripHeight,
    currentTripTitleSize,
    currentTripDateSize,
    peopleIconSize,
    peopleTextSize,
    myTripsSize,
    addTripTextSize,
    topMargin,
    headerMarginBottom,
    myTripsMarginTop,
    addTripMarginTop,
    cardMarginTop,
  } = getHomeLayoutMetrics(width, height);

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
                    width: grandientWidth,
                    borderRadius: 28,
                    top: 12,
                    zIndex: 1
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
                       zIndex: 3,
                    },
                  ]}
                >
                  <Image
                    source={require("../components/photos/botche 1.png")}
                    style={{
                      width: lokiSize,
                      height: lokiSize,
                      marginBottom: robotPadding,

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
                        ? 12
                        : 12,
                      paddingVertical: 9,
                      marginLeft: isVerySmall
                        ? 10
                        : 12,
                        zIndex: 2,
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
                 onPress={() => setmyProfileVisible(true)}
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
                    zIndex: 3
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
                onPress={() => setTripPopupVisible(true)}
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
              <Line />

              <TouchableOpacity
              onPress={() => setStepsVisible(true)}
              >
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
<ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cards}
            decelerationRate="fast"
          >
            <View
              style={{
                marginTop: cardMarginTop,
                width: "100%",
                flexDirection: "row",
                gap: 25
              }}
            >
              <AddTripCard />
              <TripCard />
              <TripCard />

            </View>
            </ScrollView>
          </View>
      </SafeAreaView>
      <TripPopup
  visible={tripPopupVisible}
  onClose={() => setTripPopupVisible(false)}
/>
<Steps
        visible={StepsVisible}
        onClose={() => setStepsVisible(false)}
      />

      {myProfileVisible && (
  <MyProfile
    visible={myProfileVisible}
    onClose={() => setmyProfileVisible(false)}
  />
)}
    </ImageBackground>
  );
}
