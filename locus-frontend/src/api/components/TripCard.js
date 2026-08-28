import React from "react";
import {
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";

export default function TripCard() {
  const { width, height } = useWindowDimensions();

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
  // Same size as AddTripCard
  // ==================================================

  const cardWidth = isVerySmall
    ? 175
    : isSmall
    ? 187
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
  // TEXT
  // ==================================================

  const titleSize = isVerySmall
    ? 16
    : isTablet
    ? 20
    : 18;

  const locationSize = isVerySmall
    ? 13
    : isTablet
    ? 16
    : 15;

  const ratingSize = isVerySmall
    ? 11
    : isTablet
    ? 14
    : 13;

  // ==================================================
  // CARD SPACING
  // ==================================================

const cardMarginTop = isVeryShort
    ? 3
    : isShort
    ? 5
    : 10;

  // ==================================================
  // INFO BOX
  // ==================================================

  const infoMargin = isVerySmall
    ? 7
    : 10;

  const infoPadding = isVerySmall
    ? 9
    : 12;

  const infoRadius = isVerySmall
    ? 16
    : 20;

  // ==================================================
  // UI
  // ==================================================

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.cardContainer,
        {
          width: cardWidth,
          height: cardHeight,
          borderRadius: cardRadius,
          marginTop: cardMarginTop,
          borderWidth: 4,
        },
      ]}
    >
      <ImageBackground
        source={require(
          "../components/photos/background.png"
        )}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{
          borderRadius: cardRadius - 2,
        }}
      >

        {/* ==============================================
            INFO
        ============================================== */}

        <View
          style={[
            styles.infoContainer,
            {
              marginHorizontal: infoMargin,
              marginBottom: infoMargin,
              padding: infoPadding,
              borderRadius: infoRadius,
            },
          ]}
        >

          {/* ==============================================
              TOP ROW
          ============================================== */}

          <View style={styles.topRow}>

            <Text
              style={[
                styles.title,
                {
                  fontSize: titleSize,
                },
              ]}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.8}
            >
              Positano
            </Text>

            <Text
              style={[
                styles.rating,
                {
                  fontSize: ratingSize,
                },
              ]}
            >
              ★ 4.8
            </Text>

          </View>

          {/* ==============================================
              LOCATION
          ============================================== */}

          <Text
            style={[
              styles.location,
              {
                fontSize: locationSize,
                marginTop: 4,
              },
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.8}
          >
            Rome, Naples, Capri
          </Text>

        </View>

      </ImageBackground>
    </TouchableOpacity>
  );
}

// ==================================================
// STYLES
// ==================================================

const styles = StyleSheet.create({

  cardContainer: {
    overflow: "hidden",
    borderColor: "#CF928A",
  },

  image: {
    flex: 1,
    justifyContent: "flex-end",
  },

  infoContainer: {
    backgroundColor:
      "rgba(207, 146, 138, 0.70)",
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 6,
  },

  title: {
    flex: 1,
    color: "#F5F1D1",
    fontWeight: "700",
  },

  rating: {
    color: "#F5F1D1",
    fontWeight: "500",
  },

  location: {
    color: "#F5F1D1",
    fontStyle: "italic",
  },

});