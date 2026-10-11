import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  Image,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Timeline from "./timeline";

export default function Steps({ visible, onClose }) {
  const { width, height } = useWindowDimensions();

  // ==================================================
  // RESPONSIVE
  // ==================================================

  const isVerySmall = width < 350;
  const isSmall = width < 380;
  const isTablet = width >= 600;

  const isVeryShort = height < 620;
  const isShort = height < 700;

  // ==================================================
  // MODAL
  // ==================================================

  const modalHorizontalPadding = isTablet
    ? Math.min(width * 0.08, 70)
    : isSmall
    ? 16
    : 24;

  const modalWidth = isTablet
    ? Math.min(width * 0.72, 650)
    : width - modalHorizontalPadding * 2;

  const modalHeight = isVeryShort
    ? 320
    : isShort
    ? 350
    : isTablet
    ? 470
    : isSmall
    ? 390
    : 400;

  const modalRadius = isVerySmall
    ? 24
    : isTablet
    ? 36
    : 32;

  const modalTopPadding = isVeryShort
    ? 38
    : isShort
    ? 43
    : isTablet
    ? 55
    : 45;

  const modalSidePadding = isVerySmall
    ? 14
    : isSmall
    ? 16
    : isTablet
    ? 25
    : 18;

  // ==================================================
  // CLOSE BUTTON
  // ==================================================

  const closeSize = isVerySmall
    ? 26
    : isTablet
    ? 34
    : 30;

  const closeFontSize = isVerySmall
    ? 24
    : isTablet
    ? 32
    : 28;

  const closeRight = isVerySmall
    ? 12
    : isTablet
    ? 20
    : 17;

  const closeTop = isVeryShort
    ? 7
    : isTablet
    ? 12
    : 10;

  // ==================================================
  // QUESTION SIZES
  // ==================================================

  const questionHeight = isTablet
    ? 48
    : isVerySmall
    ? 40
    : 44;

  const questionGap = isTablet
  ? 35
  : isVeryShort
  ? 18
  : isShort
  ? 25
  : 30;

  // ==================================================
  // STATE
  // ==================================================

  const [currentStep, setCurrentStep] = useState(1);

  // ==================================================
  // NEXT
  // ==================================================

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onClose();
    }
  };

  // ==================================================
  // QUESTION TEXT
  // ==================================================

 
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


  // ==================================================
  // RENDER
  // ==================================================

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

const styles = StyleSheet.create({

  // ==================================================
  // OVERLAY
  // ==================================================

  overlay: {
    flex: 1,

    backgroundColor:
      "rgba(0, 0, 0, 0.55)",

    justifyContent: "center",
    alignItems: "center",
  },

  // ==================================================
  // MODAL
  // ==================================================

  modal: {
    position: "relative",
    overflow: "hidden",
  },

  content: {
    flex: 1,

    position: "relative",

    zIndex: 5,
  },

  // ==================================================
  // DECORATIONS
  // ==================================================

  decorations: {
    position: "absolute",

    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    width: "100%",
    height: "100%",

    zIndex: 1,
  },

  // ==================================================
  // CLOSE
  // ==================================================

  close: {
    position: "absolute",

    alignItems: "center",
    justifyContent: "center",

    zIndex: 20,
    elevation: 20,
  },

  closeText: {
    color: "#e99a9a",

    fontWeight: "300",

    lineHeight: 20,
  },

  // ==================================================
  // STEP
  // ==================================================

  step: {
    fontSize: 36,

    fontStyle: "italic",

    fontWeight: "500",

    color: "#e39b99",

    marginTop: 0,
  },

  underline: {
    width: 183,
    height: 2,

    backgroundColor: "#dc9997",

    marginTop: 2,

    marginBottom: 15,
  },

  // ==================================================
  // QUESTIONS AREA
  // ==================================================

  questionsArea: {
    flexDirection: "row",

    alignItems: "flex-start",

    width: "100%",

    flex: 1,
  },

  // ==================================================
  // QUESTIONS
  // ==================================================

  questionsColumn: {
    flex: 1,

    minWidth: 0,

    flexDirection: "column",

    marginLeft: 0,
  },

  questionRow: {
    width: "100%",

    justifyContent: "center",
  },

  // ==================================================
  // INPUT
  // ==================================================

  input: {
    width: "100%",
    height: "100%",

    borderRadius: 30,

    borderWidth: 2,

    borderColor: "#dc9997",

    flexDirection: "row",

    alignItems: "center",

    paddingHorizontal: 12,

    backgroundColor:
      "rgba(207, 146, 138, 0.3)",
  },

  inputText: {
    color: "#fff4d9",

    fontSize: 16,

    fontWeight: "400",

    flexShrink: 1,
  },

  valueText: {
    color: "#fff4d9",

    fontSize: 17,

    fontStyle: "italic",

    fontWeight: "700",

    marginLeft: 5,
  },

  // ==================================================
  // NEXT
  // ==================================================

  nextButton: {
    position: "absolute",

    left: 0,
    right: 0,

    bottom: 10,

    height: 40,

    borderRadius: 40,

    borderWidth: 2,

    borderColor: "#dc9997",

    alignItems: "center",

    justifyContent: "center",

    backgroundColor:
      "rgba(207, 146, 138, 0.3)",
  },

  nextText: {
    color: "#fff4d9",

    fontSize: 20,

    fontWeight: "500",
  },
});