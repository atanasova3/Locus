
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
import styles from '../styles/tripTypeStyles';
import { getTripTypeLayoutMetrics } from '../utils/tripTypeLayout';

export default function TripType() {
  const { width, height } = useWindowDimensions();
  const layout = getTripTypeLayoutMetrics(width, height);
  const [visible, setVisible] = useState(true);
  const [selectedType, setSelectedType] = useState('Hotel');
  const [rating, setRating] = useState(9);

  const types = [
    'Plane',
    'Car',
    'Train',
    'Bus',
    'Cruise',
    'Ferry',
  ];

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

          {/* ACCOMMODATION TYPES */}

          <View style={[styles.grid, { rowGap: layout.gridRowGap }]}>
            {types.map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.typeButton,
                  {
                    width: layout.buttonWidth,
                    height: layout.typeButtonHeight,
                    borderRadius: layout.typeButtonRadius,
                    borderWidth: layout.typeButtonBorderWidth,
                  },
                  selectedType === type && styles.selectedType,
                ]}
                onPress={() => setSelectedType(type)}
              >
                <Text
                  style={[
                    styles.typeText,
                    { fontSize: layout.typeButtonFontSize },
                    selectedType === type && styles.selectedText,
                  ]}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* DIVIDER */}

          <View
            style={[
              styles.divider,
              {
                height: layout.dividerHeight,
                marginTop: layout.dividerMarginTop,
                marginBottom: layout.dividerMarginBottom,
              },
            ]}
          />

          {/* STEP 1 - RATING */}

          
              <Text style={[styles.heading, { fontSize: layout.headingFontSize, marginBottom: layout.headingMarginBottom }]}>
  How would you prefer to travel?
</Text>

{[
  "Direct flights only",
  "Cheapest option",
  "Fastest option",
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
              Next
            </Text>
          </TouchableOpacity>

        </LinearGradient>
      </View>
    </Modal>
  );
}
