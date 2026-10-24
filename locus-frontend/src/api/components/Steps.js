
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
import Step4 from "../components/step4";

import stepsStyles from "../styles/stepsStyles";
import { getStepsLayoutMetrics } from "../utils/stepsLayout";

const styles = stepsStyles;

export default function Steps({ visible, onClose }) {
  const { width, height } = useWindowDimensions();

  const [currentStep, setCurrentStep] = useState(1);

  const handleClose = () => {
    setCurrentStep(1);
    if (onClose) {
      onClose();
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setCurrentStep(4);
    }
  };

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
    questionHeight,
    questionGap,
  } = getStepsLayoutMetrics(width, height);

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

  // STEP 4
  if (currentStep === 4) {
    return (
      <Step4
        visible={visible}
        onClose={handleClose}
        onNext={(selectedOptions) => {
          console.log("Avoid preferences:", selectedOptions);
          handleClose();
        }}
      />
    );
  }

  // STEPS 1–3
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={handleClose}
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
          {/* DECORATIONS */}
          <Image
            source={require("./photos/Decorations.png")}
            resizeMode="stretch"
            style={styles.decorations}
          />

          {/* CLOSE */}
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
            onPress={handleClose}
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

          {/* CONTENT */}
          <SafeAreaView style={styles.content}>
            {/* HEADER */}
            <Text style={styles.step}>
              Step {currentStep}:
            </Text>

            <View style={styles.underline} />

            {/* QUESTIONS AREA */}
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
                            index < 2 ? questionGap : 0,
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

            {/* NEXT */}
            <Pressable
              style={styles.nextButton}
              onPress={handleNext}
            >
              <Text style={styles.nextText}>
                Next
              </Text>
            </Pressable>
          </SafeAreaView>
        </LinearGradient>
      </View>
    </Modal>
  );
}
