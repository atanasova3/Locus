import React from "react";
import {
  View,
  useWindowDimensions,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import tripCardStyles from "../styles/tripCardStyles";
import { getTripCardLayoutMetrics } from "../utils/tripCardLayout";

const styles = tripCardStyles;

export default function TripCard() {
  const { width, height } = useWindowDimensions();
  const {
    cardWidth,
    cardHeight,
    cardRadius,
    titleSize,
    locationSize,
    ratingSize,
    cardMarginTop,
    infoMargin,
    infoPadding,
    infoRadius,
  } = getTripCardLayoutMetrics(width, height);

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
