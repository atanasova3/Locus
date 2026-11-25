
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
import Step5 from "../components/step5";

import stepsStyles from "../styles/stepsStyles";
import { getStepsLayoutMetrics } from "../utils/stepsLayout";
import TravelStyle from "../components/travelStyle";
import Budget from "../components/budget";
import TripType from "../components/tripType";
import Hotel1Popup from "../components/hotel1";
import Hotel2Popup from "../components/hotel2";
import Interests from "../components/interests";
import TravelPace from "../components/travelPace";

const styles = stepsStyles;

export default function Steps({ visible, onClose }) {
  const { width, height } = useWindowDimensions();

  const [currentStep, setCurrentStep] = useState(1);

const handleClose = () => {
  if (onClose) {
    onClose();
  }
};

  const handleNext = () => {
    setCurrentStep((prev) => {
      if (prev < 5) {
        return prev + 1;
      }

      return prev;
    });
  };

  const handleBack = () => {
    setCurrentStep((prev) => {
      if (prev > 1) {
        return prev - 1;
      }

      return prev;
    });
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
    stepFontSize,
    underlineWidth,
    underlineHeight,
    underlineMarginTop,
    underlineMarginBottom,
    inputFontSize,
    valueFontSize,
    inputBorderRadius,
    inputBorderWidth,
    inputPaddingHorizontal,
    buttonHeight,
    buttonBottom,
    buttonRadius,
    buttonFontSize,
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

  const [showTravelStyle, setShowTravelStyle] = useState(false);
  const [showBudget, setShowBudget] = useState(false);
  const [showTripType, setShowTripType] = useState(false);
  const [showHotel1Popup, setShowHotel1Popup] = useState(false);
  const [showHotel2Popup, setShowHotel2Popup] = useState(false);
const [selectedAccommodation, setSelectedAccommodation] = useState(null);
const [showInterests, setShowInterests] = useState(false);
const [showTravelPace, setShowTravelPace] = useState(false);
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={handleClose}
      statusBarTranslucent
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
            {currentStep <= 3 ? (
              <>
                {/* HEADER */}
                <Text
                  style={[
                    styles.step,
                    { fontSize: stepFontSize },
                  ]}
                >
                  Step {currentStep}:
                </Text>

                <View
                  style={[
                    styles.underline,
                    {
                      width: underlineWidth,
                      height: underlineHeight,
                      marginTop: underlineMarginTop,
                      marginBottom: underlineMarginBottom,
                    },
                  ]}
                />

               
{/* QUESTIONS AREA */}
<View style={styles.questionsArea}>
  <Timeline
    currentStep={currentStep}
    rowHeight={questionHeight}
    rowGap={questionGap}
  />

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
          <Pressable
            style={[
              styles.input,
              {
                borderRadius: inputBorderRadius,
                borderWidth: inputBorderWidth,
                paddingHorizontal: inputPaddingHorizontal,
              },
            ]}
            onPress={() => {
              if (currentStep === 2 && index === 0) {
                setShowTravelStyle(true);
              }
              if (currentStep === 2 && index === 1) {
                setShowBudget(true);
              }
              if (currentStep === 2 && index === 2) {
                setShowTripType(true);
              }
              if (currentStep === 3 && index === 0) {
                setShowHotel1Popup(true);
              }
              if (currentStep === 3 && index === 1) {
                setShowInterests(true);
              }
              if (currentStep === 3 && index === 2) {
                setShowTravelPace(true);
              }
            }}
          >
            <Text
              style={[
                styles.inputText,
                { fontSize: inputFontSize },
              ]}
            >
              {question.title}
            </Text>

            {question.value && (
              <Text
                style={[
                  styles.valueText,
                  {
                    fontSize: valueFontSize,
                    marginLeft: 5 * (valueFontSize / 17),
                  },
                ]}
              >
                {question.value}
              </Text>
            )}
          </Pressable>
        </View>
      );
    })}
  </View>
</View>


                {/* NEXT */}
                <Pressable
                  style={[
                    styles.nextButton,
                    {
                      height: buttonHeight,
                      bottom: buttonBottom,
                      borderRadius: buttonRadius,
                      borderWidth: Math.max(1, 2 * (buttonFontSize / 20)),
                    },
                  ]}
                  onPress={handleNext}
                >
                  <Text
                    style={[
                      styles.nextText,
                      { fontSize: buttonFontSize },
                    ]}
                  >
                    Next
                  </Text>
                </Pressable>
              </>
            ) : currentStep === 4 ? (
              <Step4
                onClose={handleClose}
                onNext={(selectedOptions) => {
                  console.log(
                    "Step 4 options:",
                    selectedOptions
                  );

                  handleNext();
                }}
                onBack={handleBack}
              />
            ) : (
              <Step5
                onClose={handleClose}
                onNext={(selectedOptions) => {
                  console.log(
                    "Step 5 options:",
                    selectedOptions
                  );

                  handleClose();
                }}
                onBack={handleBack}
              />
            )}
          </SafeAreaView>

   <TravelStyle
  visible={showTravelStyle}
  onClose={() => setShowTravelStyle(false)}
/>
  <Budget
  visible={showBudget}
  onClose={() => setShowBudget(false)}
/>
  <TripType
  visible={showTripType}
  onClose={() => setShowTripType(false)}
/>
<Hotel1Popup
  visible={showHotel1Popup}
  onClose={() => setShowHotel1Popup(false)}
  onOpenHotel2={(type) => {
    setSelectedAccommodation(type);
    setShowHotel2Popup(true);
  }}
/>
<Hotel2Popup
  visible={showHotel2Popup}
  onClose={() => setShowHotel2Popup(false)}
  selectedType={selectedAccommodation}
  onSelectType={(type) => setSelectedAccommodation(type)}
  onBackToHotel1={() => {
    setShowHotel2Popup(false);
    setShowHotel1Popup(true);
  }}
/>
<Interests
  visible={showInterests}
  onClose={() => setShowInterests(false)}
/>
<TravelPace
  visible={showTravelPace}
  onClose={() => setShowTravelPace(false)}
/>
        </LinearGradient>
      </View>
    </Modal>
  );
}
