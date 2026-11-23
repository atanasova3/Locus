
import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import styles from '../styles/travelPaceStyles';
import { getTravelPaceLayoutMetrics } from '../utils/travelPaceLayout';

export default function TravelPace() {
  const { width, height } = useWindowDimensions();
  const layout = getTravelPaceLayoutMetrics(width, height);
  const [visible, setVisible] = useState(true);
  const [rating, setRating] = useState(1);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => setVisible(false)}
    >
      <View style={styles.overlay}>
        <BlurView
          intensity={50}
          tint="dark"
          style={StyleSheet.absoluteFill}
        />

        <LinearGradient
          colors={[
            '#405D38',
            '#806959',
            '#9C6E68',
            '#996C66',
          ]}
          locations={[0, 0.54, 0.67, 0.92]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={[
            styles.popup,
            {
              width: layout.popupWidth,
              paddingHorizontal: layout.horizontalPadding,
              paddingVertical: layout.verticalPadding,
              borderRadius: layout.popupRadius,
            },
          ]}
        >

          {/* STEP 1 - RATING */}

          
              <Text style={[styles.heading, { fontSize: layout.headingFontSize, marginBottom: layout.headingMarginBottom }]}>
 How active should your trip be?
</Text>

{[
  "Relaxed",
  "Balanced",
  "Packed with activities",
].map((option, index) => (
  <TouchableOpacity
    key={index}
    style={[styles.ratingRow, { marginBottom: layout.optionSpacing }]}
    onPress={() => setRating(index + 1)}
    activeOpacity={0.7}
  >
    <View
      style={[
        styles.radio,
        {
          width: layout.radioSize,
          height: layout.radioSize,
          borderRadius: layout.radioSize,
          borderWidth: layout.radioBorderWidth,
          marginRight: layout.radioMarginRight,
        },
      ]}
    >
      {rating === index + 1 && (
        <View style={[styles.radioInner, { width: layout.radioInnerSize, height: layout.radioInnerSize, borderRadius: layout.radioInnerSize }]} />
      )}
    </View>

    <Text style={[styles.ratingLabel, { fontSize: layout.optionFontSize }]}>
      {option}
    </Text>
  </TouchableOpacity>
))}
            

          {/* NEXT BUTTON */}

          <TouchableOpacity
            style={[
              styles.nextButton,
              {
                height: layout.buttonHeight,
                borderRadius: layout.buttonRadius,
                borderWidth: layout.buttonBorderWidth,
                marginTop: layout.buttonMarginTop,
              },
            ]}
          >
            <Text style={[styles.nextText, { fontSize: layout.buttonFontSize }]}>
              Select
            </Text>
          </TouchableOpacity>

        </LinearGradient>
      </View>
    </Modal>
  );
}
