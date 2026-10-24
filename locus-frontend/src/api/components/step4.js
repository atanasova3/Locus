
import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  Image,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "../styles/step4Styles";
import { getStepsLayoutMetrics } from "../utils/stepsLayout";

const OPTIONS = [
  "Large crowds",
  "Nightlife",
  "Long walks or hikes",
  "Expensive restaurants",
  "Public transport",
  "Long drives",
];

export default function Step4({ visible, onClose, onNext }) {
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
  } = getStepsLayoutMetrics(width, height);

  const [selectedOptions, setSelectedOptions] = useState([
    "Expensive restaurants",
    "Public transport",
    "Long drives",
  ]);


  const toggleOption = (option) => {
    setSelectedOptions((previous) =>
      previous.includes(option)
        ? previous.filter((item) => item !== option)
        : [...previous, option]
    );
  };

  const handleNext = () => {
    if (onNext) {
      onNext(selectedOptions);
    } else if (onClose) {
      onClose();
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View
        style={[
          styles.overlay,
          { paddingHorizontal: modalHorizontalPadding },
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
          <Image
            source={require("./photos/Decorations.png")}
            resizeMode="stretch"
            style={styles.decorations}
          />

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
            accessibilityLabel="Close"
          >
            <Text
              style={[
                styles.closeText,
                { fontSize: closeFontSize },
              ]}
            >
              ×
            </Text>
          </Pressable>

          <SafeAreaView style={styles.content}>
            <Text style={styles.step}>Step 4:</Text>

            <View style={styles.underline} />

            <Text style={styles.question}>
              What would you like to avoid?
            </Text>

            <View style={styles.options}>
              {OPTIONS.map((option) => {
                const checked =
                  selectedOptions.includes(option);

                return (
                  <Pressable
                    key={option}
                    style={styles.option}
                    onPress={() => toggleOption(option)}
                    accessibilityRole="checkbox"
                    accessibilityState={{ checked }}
                  >
                    <View
                      style={[
                        styles.checkbox,
                        checked && styles.checkboxChecked,
                      ]}
                    >
                      {checked && (
                        <Text style={styles.checkmark}>
                          ✓
                        </Text>
                      )}
                    </View>

                    <Text style={styles.optionText}>
                      {option}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            <Pressable
              style={styles.nextButton}
              onPress={handleNext}
            >
              <Text style={styles.nextText}>Next</Text>
            </Pressable>
          </SafeAreaView>
        </LinearGradient>
      </View>
    </Modal>
  );
}
