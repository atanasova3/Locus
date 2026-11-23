
import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import styles from '../styles/budgetStyles';
import { getBudgetLayoutMetrics } from '../utils/budgetLayout';

export default function Budget() {
  const { width, height } = useWindowDimensions();
  const layout = getBudgetLayoutMetrics(width, height);
  const [visible, setVisible] = useState(true);
  const [budget, setBudget] = useState(2500);

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

          {/* BUDGET RANGE */}

          <View style={styles.priceLabels}>
            <Text style={[styles.priceText, { fontSize: layout.priceFontSize }]}>€200</Text>
            <Text style={[styles.priceText, { fontSize: layout.priceFontSize }]}>€10,000</Text>
          </View>

          {/* SLIDER */}

          <View style={styles.sliderContainer}>
            <Text style={[styles.currentBudget, { fontSize: layout.currentFontSize }]}>
              {budget.toLocaleString('en-US')}
            </Text>

            <Slider
              style={[styles.slider, { height: layout.sliderHeight }]}
              minimumValue={200}
              maximumValue={10000}
              step={100}
              value={budget}
              onValueChange={setBudget}
              minimumTrackTintColor="#CF928A"
              maximumTrackTintColor="#CF928A"
              thumbTintColor="#CF928A"
            />
          </View>

          {/* SELECT BUTTON */}

          <TouchableOpacity
            style={[
              styles.selectButton,
              {
                height: layout.buttonHeight,
                borderRadius: layout.buttonRadius,
                borderWidth: layout.buttonBorderWidth,
              },
            ]}
            activeOpacity={0.7}
            onPress={() => {
              console.log('Selected budget:', budget);
              setVisible(false);
            }}
          >
            <Text style={[styles.selectText, { fontSize: layout.buttonFontSize }]}>
              Select
            </Text>
          </TouchableOpacity>

        </LinearGradient>
      </View>
    </Modal>
  );
}
