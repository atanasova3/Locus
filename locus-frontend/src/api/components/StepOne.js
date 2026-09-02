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

import Timeline from "../components/timeline";

export default function StepOne({ visible, onClose }) {
  const { width, height } = useWindowDimensions();

  // ==================================================
  // RESPONSIVE BREAKPOINTS
  // ==================================================

  const isVerySmall = width < 350;
  const isSmall = width < 380;
  const isTablet = width >= 600;

  const isVeryShort = height < 620;
  const isShort = height < 700;

  // ==================================================
  // MODAL WIDTH
  // ==================================================

  const modalHorizontalPadding = isTablet
    ? Math.min(width * 0.08, 70)
    : isSmall
    ? 16
    : 24;

  const modalWidth = isTablet
    ? Math.min(width * 0.72, 650)
    : width - modalHorizontalPadding * 2;

  // ==================================================
  // MODAL HEIGHT
  // ==================================================

  const modalHeight = isVeryShort
    ? 320
    : isShort
    ? 350
    : isTablet
    ? 470
    : isSmall
    ? 390
    : 400;

  // ==================================================
  // MODAL RADIUS
  // ==================================================

  const modalRadius = isVerySmall
    ? 24
    : isTablet
    ? 36
    : 32;

  // ==================================================
  // MODAL PADDING
  // ==================================================

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
  // STATE
  // ==================================================

  const [currentStep, setCurrentStep] = useState(1);

  const [destination, setDestination] = useState("FR");

  const [date, setDate] = useState(
    "Check-in / Check-out"
  );

  // ==================================================
  // RESPONSIVE INPUT SIZES
  // ==================================================

  const destinationWidth =
    modalWidth - modalSidePadding * 2;

  const dateWidth = isTablet
    ? 290
    : Math.min(destinationWidth * 0.75, 290);

  const guestsWidth = destinationWidth;

  // ==================================================
  // NEXT
  // ==================================================

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
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

          {/* DECORATIONS */}

          <Image
            source={require("./photos/Decorations.png")}
            resizeMode="stretch"
            style={styles.decorations}
          />

          {/* CLOSE BUTTON */}

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
           <Timeline currentStep={currentStep} />

          <SafeAreaView style={styles.content}>

            {/* HEADER */}

<Text style={styles.step}>
  Step {currentStep}:
</Text>

<View style={styles.underline} />


{/* STEP 1 */}

{currentStep === 1 && (
  <View style={styles.stepContent}>

    <View style={styles.input}>
      <Text style={styles.inputText}>
        Choose your dream destination:
      </Text>

      <Text style={styles.valueText}>
        FR
      </Text>
    </View>

    <View style={[styles.input, styles.dateInput]}>
      <Text style={styles.inputText}>
        Check-in / Check-out
      </Text>
    </View>

    <View style={[styles.input, styles.guestsInput]}>
      <Text style={styles.inputText}>
        2 adults · 0 children · 1 room
      </Text>
    </View>

  </View>
)}


{/* STEP 2 */}

{currentStep === 2 && (
  <View style={styles.stepContent}>

  <View style={[styles.input, styles.question1]}>
    <Text style={styles.inputText}>
      Question 1
    </Text>
  </View>

  <View style={[styles.input, styles.question2]}>
    <Text style={styles.inputText}>
      Question 2
    </Text>
  </View>

  <View style={[styles.input, styles.question3]}>
    <Text style={styles.inputText}>
      Question 3
    </Text>
  </View>

</View>
)}


{/* STEP 3 */}

{currentStep === 3 && (
<View style={styles.stepContent}>

  <View style={[styles.input, styles.question1]}>
    <Text style={styles.inputText}>
      Question 1
    </Text>
  </View>

  <View style={[styles.input, styles.question2]}>
    <Text style={styles.inputText}>
      Question 2
    </Text>
  </View>

  <View style={[styles.input, styles.question3]}>
    <Text style={styles.inputText}>
      Question 3
    </Text>
  </View>

</View>
)}


{/* NEXT */}

<Pressable
  style={styles.nextButton}
  onPress={handleNext}
>
  <Text style={styles.nextText}>
    {currentStep === 3 ? "Done" : "Next"}
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

    backgroundColor: "rgba(0, 0, 0, 0.55)",

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

    marginBottom: 45,
  },

  // ==================================================
  // STEP CONTENT
  // ==================================================

  stepContent: {
  position: "relative",

  marginLeft: 40,
  marginTop: 20,

  height: 220,
},

input: {
  position: "absolute",

  left: 0,

  height: 52,

  borderRadius: 30,
  borderWidth: 2,
  borderColor: "#dc9997",

  flexDirection: "row",
  alignItems: "center",

  paddingHorizontal: 14,

  backgroundColor: "rgba(207, 146, 138, 0.3)",
},

question1: {
  top: -14,
},

question2: {
  top: 81,
},

question3: {
  top: 176,
},

  inputText: {
    color: "#fff4d9",

    fontSize: 22,

    fontWeight: "400",

    flexShrink: 1,
  },

  valueText: {
    color: "#fff4d9",

    fontSize: 22,

    fontStyle: "italic",

    fontWeight: "700",

    marginLeft: 8,
  },

  dateInput: {
    marginTop: 30,
  },

  guestsInput: {
    marginTop: 30,
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

    backgroundColor: "rgba(207, 146, 138, 0.3)",
  },

  nextText: {
    color: "#fff4d9",

    fontSize: 20,

    fontWeight: "500",
  },
  inputsContainer: {
  marginTop: 0,
},


valueText: {
  color: "#fff4d9",
  fontSize: 18,
  fontStyle: "italic",
  fontWeight: "700",
  marginLeft: 7,
},

dateInput: {
  marginTop: 20,
  width: 190,
},

guestsInput: {
  marginTop: 20,
  width: 270,
},
});