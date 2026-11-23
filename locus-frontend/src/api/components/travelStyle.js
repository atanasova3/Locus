
import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import styles from '../styles/travelStyleStyles';
import { getTravelStyleLayoutMetrics } from '../utils/travelStyleLayout';

export default function TravelStyle() {
  const { width, height } = useWindowDimensions();
  const layout = getTravelStyleLayoutMetrics(width, height);
  const [visible, setVisible] = useState(true);
  const [selectedType, setSelectedType] = useState([
  'Beaches',
  'Relaxation',
  'Culture',
]);

  const types = [
    'Mountains',
    'History',
    'Beaches',
    'Food',
    'Atractions',
    'Romance',
    'Nature',
    'Nightlife',
    'Shopping',
    'Culture',
    'Business',
    'Family',
    'Relaxation',
    'Beauty',
  ];

  const toggleType = (type) => {
  setSelectedType((prev) =>
    prev.includes(type)
      ? prev.filter((item) => item !== type)
      : [...prev, type]
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

          {/* ACCOMMODATION TYPES */}

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ maxHeight: layout.gridMaxHeight }}
            contentContainerStyle={styles.grid}
          >
           {types.map((type) => {
  const isSelected = selectedType.includes(type);

  return (
    <TouchableOpacity
      key={type}
      style={[
        styles.typeButton,
        {
          width: layout.buttonWidth,
          height: layout.buttonHeight,
          borderRadius: layout.buttonRadius,
          borderWidth: layout.buttonBorderWidth,
        },
        isSelected && styles.selectedType,
      ]}
      onPress={() => toggleType(type)}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.typeText,
          { fontSize: layout.buttonFontSize },
          isSelected && styles.selectedText,
        ]}
      >
        {type}
      </Text>
    </TouchableOpacity>
  );
})}
          </ScrollView>

          {/* NEXT BUTTON */}

          <TouchableOpacity
            style={[
              styles.nextButton,
              {
                height: layout.nextHeight,
                borderRadius: layout.nextRadius,
                borderWidth: layout.nextBorderWidth,
                marginTop: layout.nextMarginTop,
              },
            ]}
          >
            <Text style={[styles.nextText, { fontSize: layout.nextFontSize }]}>
              Select
            </Text>
          </TouchableOpacity>

        </LinearGradient>
      </View>
    </Modal>
  );
}
