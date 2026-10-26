import React from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AddTripCard from "./addTripCard";
import TripCard from "./TripCard";
import tripPopupStyles from "../styles/tripPopupStyles";
import { getTripPopupLayoutMetrics } from "../utils/tripPopupLayout";

const styles = tripPopupStyles;

export default function TripPopup({ visible, onClose }) {
  const { width, height } = useWindowDimensions();
  const {
    modalHorizontalPadding,
    modalWidth,
    modalHeight,
    modalRadius,
    modalTopPadding,
    modalSidePadding,
    closeSize,
    closeFontSize,
    closeRight,
    closeTop,
    titleSize,
    titleMarginTop,
    lineMarginTop,
    emptySize,
    emptyMarginTop,
    cardsPaddingTop,
    cardsGap,
    cardWidth,
    cardHeight,
  } = getTripPopupLayoutMetrics(width, height);

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
              <AddTripCard
                layoutWidth={cardWidth}
                layoutHeight={cardHeight}
              />
            </View>

            <View style={{ width: cardWidth }}>
              <TripCard
                layoutWidth={cardWidth}
                layoutHeight={cardHeight}
              />
            </View>

            <View style={{ width: cardWidth }}>
              <TripCard
                layoutWidth={cardWidth}
                layoutHeight={cardHeight}
              />
            </View>

            <View style={{ width: cardWidth }}>
              <TripCard
                layoutWidth={cardWidth}
                layoutHeight={cardHeight}
              />
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    </Modal>
  );
}
