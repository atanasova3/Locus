import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  useWindowDimensions,
  Image,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Timeline from "./timeline";
import stepsStyles from "../styles/stepsStyles";
import { clamp } from "../utils/verificationLayout";

const styles = stepsStyles;

export default function Steps({ visible, onClose }) {
  const { width, height } = useWindowDimensions();

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onClose();
    }
  };

  const {
    isVerySmall,
    isSmall,
    isTablet,
    isVeryShort,
    isShort,
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
    questionHeight,
    questionGap,
  } = (() => {
    const isVerySmallValue = width < 350;
    const isSmallValue = width < 380;
    const isTabletValue = width >= 600;
    const isVeryShortValue = height < 620;
    const isShortValue = height < 700;

    const modalHorizontalPaddingValue = isTabletValue
      ? Math.min(width * 0.08, 70)
      : isSmallValue
      ? 16
      : 24;

    const modalWidthValue = isTabletValue
      ? Math.min(width * 0.72, 650)
      : width - modalHorizontalPaddingValue * 2;

    const modalHeightValue = isVeryShortValue
      ? 320
      : isShortValue
      ? 350
      : isTabletValue
      ? 470
      : isSmallValue
      ? 390
      : 400;

    const modalRadiusValue = isVerySmallValue
      ? 24
      : isTabletValue
      ? 36
      : 32;

    const modalTopPaddingValue = isVeryShortValue
      ? 38
      : isShortValue
      ? 43
      : isTabletValue
      ? 55
      : 45;

    const modalSidePaddingValue = isVerySmallValue
      ? 14
      : isSmallValue
      ? 16
      : isTabletValue
      ? 25
      : 18;

    const closeSizeValue = isVerySmallValue
      ? 26
      : isTabletValue
      ? 34
      : 30;

    const closeFontSizeValue = isVerySmallValue
      ? 24
      : isTabletValue
      ? 32
      : 28;

    const closeRightValue = isVerySmallValue
      ? 12
      : isTabletValue
      ? 20
      : 17;

    const closeTopValue = isVeryShortValue
      ? 7
      : isTabletValue
      ? 12
      : 10;

    const questionHeightValue = isTabletValue
      ? 48
      : isVerySmallValue
      ? 40
      : 44;

    const questionGapValue = isTabletValue
      ? 35
      : isVeryShortValue
      ? 18
      : isShortValue
      ? 25
      : 30;

    return {
      isVerySmall: isVerySmallValue,
      isSmall: isSmallValue,
      isTablet: isTabletValue,
      isVeryShort: isVeryShortValue,
      isShort: isShortValue,
      modalHorizontalPadding: modalHorizontalPaddingValue,
      modalWidth: modalWidthValue,
      modalHeight: modalHeightValue,
      modalRadius: modalRadiusValue,
      modalTopPadding: modalTopPaddingValue,
      modalSidePadding: modalSidePaddingValue,
      closeSize: closeSizeValue,
      closeFontSize: closeFontSizeValue,
      closeRight: closeRightValue,
      closeTop: closeTopValue,
      questionHeight: questionHeightValue,
      questionGap: questionGapValue,
    };
  })();

  const getQuestion = (index) => {
    const questions = {
      1: [
        { title: "Choose your destination:", value: "FR" },
        { title: "Check-in / Check-out" },
        { title: "2 adults · 0 children · 1 room" },
      ],
      2: [
        { title: "What's your travel style?" },
        { title: "What's your budget?" },
        { title: "How would you like to travel?" },
      ],
      3: [
        { title: "Where would you like to stay?" },
        { title: "What are you interested in?" },
        { title: "What's your preferred travel pace?" },
      ],
    };

    return questions[currentStep]?.[index] ?? {
      title: "Question",
    };
  };

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
          {/* ==================================================
              DECORATIONS
          ================================================== */}

          <Image
            source={require("./photos/Decorations.png")}
            resizeMode="stretch"
            style={styles.decorations}
          />

          {/* ==================================================
              CLOSE
          ================================================== */}

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

          {/* ==================================================
              CONTENT
          ================================================== */}

          <SafeAreaView style={styles.content}>

            {/* ==================================================
                HEADER
            ================================================== */}

            <Text style={styles.step}>
              Step {currentStep}:
            </Text>

            <View style={styles.underline} />

            {/* ==================================================
                QUESTIONS AREA
            ================================================== */}

            <View style={styles.questionsArea}>

           

              <Timeline
                currentStep={currentStep}
                rowHeight={questionHeight}
                rowGap={questionGap}
              />

              {/* QUESTIONS */}

              <View style={styles.questionsColumn}>
                {[0, 1, 2].map((index) => {
                  const question = getQuestion(index);

                  return (
                    <View
                      key={index}
                      style={[
                        styles.questionRow,
                        {
                          height: questionHeight,
                          marginBottom:
                            index < 2
                              ? questionGap
                              : 0,
                        },
                      ]}
                    >
                      <View style={styles.input}>
                        <Text style={styles.inputText}>
                          {question.title}
                        </Text>

                        {question.value && (
                          <Text style={styles.valueText}>
                            {question.value}
                          </Text>
                        )}
                      </View>
                    </View>
                  );
                })}
              </View>

            </View>

            {/* ==================================================
                NEXT
            ================================================== */}

            <Pressable
              style={styles.nextButton}
              onPress={handleNext}
            >
              <Text style={styles.nextText}>
                {currentStep === 3
                  ? "Done"
                  : "Next"}
              </Text>
            </Pressable>

          </SafeAreaView>
        </LinearGradient>
      </View>
    </Modal>
  );
}
