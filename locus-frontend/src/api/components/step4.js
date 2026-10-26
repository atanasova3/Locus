
import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";

import styles from "../styles/step4Styles";
import { getStep4LayoutMetrics } from "../utils/step4Layout";

const OPTIONS = [
  "Large crowds",
  "Nightlife",
  "Long walks or hikes",
  "Expensive restaurants",
  "Public transport",
  "Long drives",
];

export default function Step4({ onClose, onNext, onBack }) {
  const { width, height } = useWindowDimensions();
  const layout = getStep4LayoutMetrics(width, height);
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
    <SafeAreaView style={styles.content}>

      {/* HEADER */}
      <Text style={[styles.step, { fontSize: layout.stepFontSize }]}>
        Step 4:
      </Text>

      <View
        style={[
          styles.underline,
          {
            width: layout.underlineWidth,
            height: layout.underlineHeight,
            marginTop: layout.underlineMarginTop,
            marginBottom: layout.underlineMarginBottom,
          },
        ]}
      />

      <Text
        style={[
          styles.question,
          {
            fontSize: layout.questionFontSize,
            marginBottom: layout.questionMarginBottom,
          },
        ]}
      >
        What would you like to avoid?
      </Text>

      {/* OPTIONS */}
      <View style={styles.options}>
        {OPTIONS.map((option) => {
          const checked = selectedOptions.includes(option);

          return (
            <Pressable
              key={option}
              style={[
                styles.option,
                {
                  minHeight: layout.optionHeight,
                  marginBottom: layout.optionMarginBottom,
                },
              ]}
              onPress={() => toggleOption(option)}
              accessibilityRole="checkbox"
              accessibilityState={{ checked }}
            >
              <View
                style={[
                  styles.checkbox,
                  {
                    width: layout.checkboxSize,
                    height: layout.checkboxSize,
                    borderWidth: layout.checkboxBorderWidth,
                    borderRadius: layout.checkboxRadius,
                    marginRight: layout.checkboxMarginRight,
                  },
                  checked && styles.checkboxChecked,
                ]}
              >
                {checked && (
                  <Text
                    style={[
                      styles.checkmark,
                      {
                        fontSize: layout.checkmarkFontSize,
                        lineHeight: layout.checkmarkFontSize,
                      },
                    ]}
                  >
                    ✓
                  </Text>
                )}
              </View>

              <Text
                style={[
                  styles.optionText,
                  { fontSize: layout.optionFontSize },
                ]}
              >
                {option}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* NEXT */}
      <Pressable
        style={[
          styles.nextButton,
          {
            height: layout.buttonHeight,
            bottom: layout.buttonBottom,
            borderRadius: layout.buttonRadius,
            borderWidth: layout.buttonBorderWidth,
          },
        ]}
        onPress={handleNext}
      >
        <Text
          style={[
            styles.nextText,
            { fontSize: layout.buttonFontSize },
          ]}
        >
          Next
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
