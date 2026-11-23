
import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

const { width } = Dimensions.get('window');

export default function TripType() {
  const [visible, setVisible] = useState(true);
  const [selectedType, setSelectedType] = useState('Hotel');
  const [rating, setRating] = useState(9);
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
          style={styles.popup}
        >

          {/* ACCOMMODATION TYPES */}

          <View style={styles.grid}>
            {types.map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.typeButton,
                  selectedType === type && styles.selectedType,
                ]}
                onPress={() => setSelectedType(type)}
              >
                <Text
                  style={[
                    styles.typeText,
                    selectedType === type && styles.selectedText,
                  ]}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* DIVIDER */}

          <View style={styles.divider} />

          {/* STEP 1 - RATING */}

          
              <Text style={styles.heading}>
                What star rating do you prefer?
              </Text>

              {[7, 8, 9].map((stars) => (
                <TouchableOpacity
                  key={stars}
                  style={styles.ratingRow}
                  onPress={() => setRating(stars)}
                >
                  <View style={styles.radio}>
                    {rating === stars && (
                      <View style={styles.radioInner} />
                    )}
                  </View>

                  <Text style={styles.stars}>
                    ★
                  </Text>

                  <Text style={styles.ratingLabel}>
                    {stars}+
                  </Text>
                </TouchableOpacity>
              ))}
           
          

        </LinearGradient>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({

  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },

  popup: {
    width: width * 0.86,
    paddingHorizontal: 26,
    paddingVertical: 28,
    borderRadius: 48,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 19,
  },

  typeButton: {
    width: '46%',
    height: 49,
    borderRadius: 30,
    borderWidth: 2.5,
    borderColor: '#CF928A',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(190,140,130,0.25)',
  },

  selectedType: {
    borderColor: '#F1EFCD',
  },

  typeText: {
    color: '#F1EFCD',
    fontSize: 21,
  },

  selectedText: {
    color: '#CF928A',
  },

  divider: {
    height: 2,
    backgroundColor: '#CF928A',
    marginTop: 27,
    marginBottom: 16,
  },

  heading: {
    fontSize: 21,
    fontWeight: '600',
    color: '#CF928A',
    marginBottom: 13,
  },

  // STEP 1

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  radio: {
    width: 18,
    height: 18,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#CF928A',
    marginRight: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioInner: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#CF928A',
  },

  stars: {
    color: '#F1EFCD',
    fontSize: 22,
    letterSpacing: 1,
  },

  ratingLabel: {
    color: '#CF928A',
    fontSize: 18,
    fontStyle: 'italic',
    marginLeft: 5,
  },

  // STEP 2

  filtersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 5,
  },

  filterItem: {
    width: '46%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    width: 19,
    height: 19,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#CF928A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },

  checkboxSelected: {
    borderColor: '#CF928A',
  },

  checkmark: {
    color: '#F1EFCD',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 21,
    marginTop: -2,
  },

  filterText: {
    color: '#CF928A',
    fontSize: 18,
    fontStyle: 'italic',
  },

  // STEP INDICATOR

  stepContainer: {
    alignSelf: 'flex-end',
    marginTop: 2,
    marginBottom: 8,
  },

  step: {
    color: '#F1EFCD',
    fontSize: 14,
  },

  // NEXT BUTTON

  nextButton: {
    height: 40,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#CF928A',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(210,150,140,0.25)',
  },

  nextText: {
    color: '#F1EFCD',
    fontSize: 20,
    fontWeight: '500',
  },
});
