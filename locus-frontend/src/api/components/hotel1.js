
import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import styles from '../styles/hotelPopupStyles';
import { getHotelPopupLayoutMetrics } from '../utils/hotelPopupLayout';

export default function Hotel1Popup({ visible, onClose, onOpenHotel2 }) {
  const { width, height } = useWindowDimensions();
  const layout = getHotelPopupLayoutMetrics(width, height);
  const [selectedType, setSelectedType] = useState('Hotel');
  const [rating, setRating] = useState(5);
  const [step, setStep] = useState(1);

  const [selectedFilters, setSelectedFilters] = useState([
    'Pool',
    'Balcony',
  ]);

  const types = [
    'Hotel',
    'Hostel',
    'Villa',
    'Camping',
    'Apartment',
    'Guest House',
  ];

  const filters = [
    'Free Parking',
    'Balcony',
    'Pool',
    'Kitchen',
    'Smoking',
    'Spa',
  ];

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
     onRequestClose={onClose}
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
              maxHeight: layout.popupMaxHeight,
              paddingHorizontal: layout.horizontalPadding,
              paddingVertical: layout.verticalPadding,
              borderRadius: layout.popupRadius,
            },
          ]}
        >
          <ScrollView
            style={{ maxHeight: layout.contentMaxHeight }}
            showsVerticalScrollIndicator={false}
          >

          {/* ACCOMMODATION TYPES */}

          <View style={[styles.grid, { rowGap: layout.gridRowGap }]}>
            {types.map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.typeButton,
                  {
                    width: layout.typeButtonWidth,
                    height: layout.typeButtonHeight,
                    borderRadius: layout.typeButtonRadius,
                    borderWidth: layout.typeButtonBorderWidth,
                  },
                  selectedType === type && styles.selectedType,
                ]}
                onPress={() => {
  setSelectedType(type);

  if (type !== 'Hotel') {
    onClose();
    onOpenHotel2(type);
  }
}}
              >
                <Text
                  style={[
                    styles.typeText,
                    { fontSize: layout.typeFontSize },
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

          {step === 1 ? (
            <>
              <Text
                style={[
                  styles.heading,
                  {
                    fontSize: layout.headingFontSize,
                    marginBottom: layout.headingMarginBottom,
                  },
                ]}
              >
                What star rating do you prefer?
              </Text>

              {[3, 4, 5].map((stars) => (
                <TouchableOpacity
                  key={stars}
                  style={[
                    styles.ratingRow,
                    { marginBottom: layout.ratingRowMarginBottom },
                  ]}
                  onPress={() => setRating(stars)}
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
                    {rating === stars && (
                      <View
                        style={[
                          styles.radioInner,
                          {
                            width: layout.radioInnerSize,
                            height: layout.radioInnerSize,
                            borderRadius: layout.radioInnerSize,
                          },
                        ]}
                      />
                    )}
                  </View>

                  <Text style={[styles.stars, { fontSize: layout.starsFontSize }]}>
                    {'★'.repeat(stars)}
                  </Text>

                  <Text style={[styles.ratingLabel, { fontSize: layout.ratingFontSize }]}>
                    {stars}-Star
                  </Text>
                </TouchableOpacity>
              ))}
            </>
          ) : (

            /* STEP 2 - FILTERS */

            <>
              <Text
                style={[
                  styles.heading,
                  {
                    fontSize: layout.headingFontSize,
                    marginBottom: layout.headingMarginBottom,
                  },
                ]}
              >
                Which filters do you prefer?
              </Text>

              <View
                style={[
                  styles.filtersGrid,
                  { rowGap: layout.filterRowGap },
                ]}
              >
                {filters.map((filter) => (
                  <TouchableOpacity
                    key={filter}
                    style={[
                      styles.filterItem,
                      { width: layout.filterItemWidth },
                    ]}
                    onPress={() => toggleFilter(filter)}
                    activeOpacity={0.7}
                  >
                    <View
                      style={[
                        styles.checkbox,
                        {
                          width: layout.checkboxSize,
                          height: layout.checkboxSize,
                          borderRadius: layout.checkboxRadius,
                          borderWidth: layout.checkboxBorderWidth,
                          marginRight: layout.checkboxMarginRight,
                        },
                        selectedFilters.includes(filter) &&
                          styles.checkboxSelected,
                      ]}
                    >
                      {selectedFilters.includes(filter) && (
                        <Text
                          style={[
                            styles.checkmark,
                            {
                              fontSize: layout.checkmarkFontSize,
                              lineHeight: layout.checkmarkLineHeight,
                            },
                          ]}
                        >
                          ✓
                        </Text>
                      )}
                    </View>

                    <Text style={[styles.filterText, { fontSize: layout.filterFontSize }]}>
                      {filter}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}

          {/* STEP INDICATOR */}

          <TouchableOpacity
            style={[
              styles.stepContainer,
              {
                marginTop: layout.stepMarginTop,
                marginBottom: layout.stepMarginBottom,
              },
            ]}
            onPress={() => setStep(step === 1 ? 2 : 1)}
            activeOpacity={0.7}
          >
            <Text style={[styles.step, { fontSize: layout.stepFontSize }]}>
              {step === 2 ? '‹ ' : ''}
              {step}/2
              {step === 1 ? ' ›' : ''}
            </Text>
          </TouchableOpacity>

          {/* NEXT BUTTON */}

          <TouchableOpacity
            onPress={onClose}
            style={[
              styles.nextButton,
              {
                height: layout.nextButtonHeight,
                borderRadius: layout.nextButtonRadius,
                borderWidth: layout.nextButtonBorderWidth,
              },
            ]}
          >
            <Text style={[styles.nextText, { fontSize: layout.nextTextFontSize }]}>
              Select
            </Text>
          </TouchableOpacity>

          </ScrollView>
        </LinearGradient>
      </View>
    </Modal>
  );
}
