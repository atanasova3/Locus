
import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";

import styles from "../styles/step5Styles";
import { getStep5LayoutMetrics } from "../utils/step5Layout";
import { useNavigation } from "@react-navigation/native";

const OPTIONS = [
  "Save money",
  "Best quality",
  "Beautiful places",
  "Great food",
  "Peace and relaxation",
  "Fun and entertainment",
];

export default function Step5({ onClose}) {
  const { width, height } = useWindowDimensions();
  const layout = getStep5LayoutMetrics(width, height);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation();

 const handleNext = () => {
  if (!selectedOption) return;

  onClose?.();

  navigation.navigate("GeneratingTrip", {
    selectedOption: selectedOption,
  });
};

  return (
    <SafeAreaView style={styles.content}>
      {/* HEADER */}
      <Text style={[styles.step, { fontSize: layout.stepFontSize }]}>
        Step 5:
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
        What matters most to you on this trip?
      </Text>

      {/* OPTIONS — SINGLE SELECTION */}
      <View style={styles.options}>
        {OPTIONS.map((option) => {
          const checked = selectedOption === option;

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
              onPress={() => setSelectedOption(option)}
              accessibilityRole="radio"
              accessibilityState={{ checked }}
            >
              {/* RADIO BUTTON */}
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
                  <View
                    style={{
                      width: layout.radioIndicatorSize,
                      height: layout.radioIndicatorSize,
                      borderRadius: layout.radioIndicatorSize,
                      backgroundColor: "#D99A94",
                    }}
                  />
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

      {/* SAVE */}
      <Pressable
        style={[
          styles.nextButton,
          {
            height: layout.buttonHeight,
            bottom: layout.buttonBottom,
            borderRadius: layout.buttonRadius,
            borderWidth: layout.buttonBorderWidth,
          },
          !selectedOption && { opacity: 0.6 },
        ]}
        onPress={handleNext}
        disabled={!selectedOption}
      >
        <Text
          style={[
            styles.nextText,
            { fontSize: layout.buttonFontSize },
          ]}
        >
          Save
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
