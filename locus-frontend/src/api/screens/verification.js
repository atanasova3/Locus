import React, { useState, useRef, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  useWindowDimensions,
} from "react-native";

import HelloText from "../components/HelloText";

const CODE_LENGTH = 4;

export default function VerificationScreen() {
  const { width, height } = useWindowDimensions();

  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const [code, setCode] = useState(
    Array(CODE_LENGTH).fill("")
  );

  const inputs = useRef([]);

  // ==================================================
  // RESPONSIVE BREAKPOINTS
  // ==================================================

  const isVerySmall = width < 350;
  const isSmall = width < 380;
  const isTablet = width >= 600;

  const isVeryShort = height < 620;
  const isShort = height < 700;

  // ==================================================
  // CONTENT WIDTH
  // ==================================================

  const horizontalPadding = isTablet
    ? Math.min(width * 0.08, 70)
    : isSmall
    ? 21
    : 25;

  const contentWidth = Math.min(
    width - horizontalPadding * 2,
    700
  );

  // ==================================================
  // RESPONSIVE HELPER
  // ==================================================

  const clamp = (value, min, max) =>
    Math.min(Math.max(value, min), max);

  // ==================================================
  // CODE INPUTS
  // ==================================================

  const codeGap = isVerySmall
    ? 8
    : isSmall
    ? 10
    : isTablet
    ? 18
    : 12;

  const maxInputWidth = isTablet
    ? 78
    : isVerySmall
    ? 55
    : isSmall
    ? 60
    : 65;

  const inputWidth = Math.min(
    maxInputWidth,
    (contentWidth - codeGap * 3) / 4
  );

  const inputHeight = inputWidth * 1.1;

  const inputFontSize = clamp(
    inputWidth * 0.43,
    22,
    32
  );

  // ==================================================
  // TEXT SIZES
  // ==================================================

  const titleSize = clamp(
    width * 0.095,
    32,
    42
  );

  const buttonHeight = isVerySmall
    ? 48
    : isSmall
    ? 50
    : isTablet
    ? 58
    : 52;

  const buttonFontSize = clamp(
    width * 0.051,
    18,
    22
  );

  const smallFontSize = clamp(
    width * 0.038,
    13,
    16
  );

  // ==================================================
  // HEADER POSITION
  // ==================================================

  const topMargin = isVeryShort
    ? 30
    : isShort
    ? 50
    : isTablet
    ? 110
    : 70;

  // ==================================================
  // ENTER CODE POSITION
  // ==================================================

  const titleTop = isVeryShort
    ? topMargin + 170
    : isShort
    ? topMargin + 190
    : isTablet
    ? topMargin + 230
    : topMargin + 210;

  // ==================================================
  // BUTTON SPACING
  // ==================================================

  const buttonMarginTop = isVeryShort
    ? 18
    : isShort
    ? 25
    : isTablet
    ? 40
    : 35;

  // ==================================================
  // KEYBOARD
  // ==================================================

  useEffect(() => {
    const showEvent =
      Platform.OS === "ios"
        ? "keyboardWillShow"
        : "keyboardDidShow";

    const hideEvent =
      Platform.OS === "ios"
        ? "keyboardWillHide"
        : "keyboardDidHide";

    const showKeyboard = Keyboard.addListener(
      showEvent,
      (event) => {
        setKeyboardHeight(
          event.endCoordinates.height
        );
      }
    );

    const hideKeyboard = Keyboard.addListener(
      hideEvent,
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);

  // ==================================================
  // CODE CHANGE
  // ==================================================

  const handleChange = (text, index) => {
    const digit = text
      .replace(/[^0-9]/g, "")
      .slice(-1);

    const newCode = [...code];

    newCode[index] = digit;

    setCode(newCode);

    // Move to next input
    if (
      digit &&
      index < CODE_LENGTH - 1
    ) {
      inputs.current[index + 1]?.focus();
    }

    // Full code
    if (
      digit &&
      index === CODE_LENGTH - 1
    ) {
      const fullCode = newCode.join("");

      if (fullCode.length === CODE_LENGTH) {
        console.log("CODE:", fullCode);
      }
    }
  };

  // ==================================================
  // BACKSPACE
  // ==================================================

  const handleKeyPress = (e, index) => {
    if (
      e.nativeEvent.key === "Backspace" &&
      !code[index] &&
      index > 0
    ) {
      inputs.current[index - 1]?.focus();
    }
  };

  // ==================================================
  // VERIFY
  // ==================================================

  const verifyCode = () => {
    const fullCode = code.join("");

    if (fullCode.length !== CODE_LENGTH) {
      console.log(
        "Please enter the full code"
      );

      return;
    }

    console.log(
      "Verifying:",
      fullCode
    );
  };

  // ==================================================
  // BOTTOM POSITION
  // ==================================================

  let bottomPosition;

  if (keyboardHeight > 0) {
    bottomPosition =
      keyboardHeight +
      (isVerySmall ? 10 : 15);
  } else if (isVeryShort) {
    bottomPosition = 18;
  } else if (isShort) {
    bottomPosition = 28;
  } else if (isTablet) {
    bottomPosition = 45;
  } else {
    bottomPosition = height * 0.07;
  }

  // ==================================================
  // UI
  // ==================================================

  return (
    <ImageBackground
      source={require("../components/photos/background.png")}
      style={styles.background}
      resizeMode="cover"
    >

      {/* ==================================================
          DARK OVERLAY
      ================================================== */}

      <View style={styles.overlay} />

      {/* ==================================================
          SCREEN
      ================================================== */}

      <View style={styles.screen}>

        {/* ==================================================
            HEADER
        ================================================== */}

        <View
          style={[
            styles.header,
            {
              left: horizontalPadding,
              right: horizontalPadding,
              top: topMargin,
            },
          ]}
        >
          <HelloText animated={false} />
        </View>


        {/* ==================================================
            ENTER CODE
        ================================================== */}

        <View
          style={[
            styles.titleContainer,
            {
              top: titleTop,
              left: horizontalPadding,
              right: horizontalPadding,
            },
          ]}
        >
          <Text
            style={[
              styles.title,
              {
                fontSize: titleSize,
              },
            ]}
          >
            Enter code
          </Text>
        </View>


        {/* ==================================================
            BOTTOM SECTION
        ================================================== */}

        <View
          style={[
            styles.bottomSection,
            {
              left: horizontalPadding,
              right: horizontalPadding,
              bottom: bottomPosition,
            },
          ]}
        >

          {/* ================================================
              CODE INPUTS
          ================================================ */}

          <View
            style={[
              styles.codeContainer,
              {
                gap: codeGap,
              },
            ]}
          >

            {code.map((value, index) => (
              <TextInput
                key={index}

                ref={(ref) => {
                  inputs.current[index] = ref;
                }}

                value={value}

                onChangeText={(text) =>
                  handleChange(
                    text,
                    index
                  )
                }

                onKeyPress={(e) =>
                  handleKeyPress(
                    e,
                    index
                  )
                }

                keyboardType="number-pad"

                maxLength={1}

                selectTextOnFocus

                textAlign="center"

                selectionColor="#D99791"

                placeholder="0"

                placeholderTextColor="rgba(255,255,255,0.25)"

                style={[
                  styles.input,
                  {
                    width: inputWidth,
                    height: inputHeight,
                    fontSize: inputFontSize,
                    borderRadius:
                      inputWidth * 0.28,
                  },
                ]}
              />
            ))}

          </View>


          {/* ================================================
              VERIFY
          ================================================ */}

          <TouchableOpacity
            style={[
              styles.verifyButton,
              {
                height: buttonHeight,
                borderRadius: 35,
                marginTop: buttonMarginTop,
              },
            ]}
            onPress={verifyCode}
            activeOpacity={0.8}
          >

            <Text
              style={[
                styles.verifyText,
                {
                  fontSize: buttonFontSize,
                },
              ]}
            >
              Verify
            </Text>

          </TouchableOpacity>


          {/* ================================================
              SEND AGAIN
          ================================================ */}

          <View
            style={[
              styles.register,
              {
                marginTop: 7,
              },
            ]}
          >

            <Text
              style={[
                styles.smallText,
                {
                  fontSize: smallFontSize,
                },
              ]}
            >
              You didn't receive a code?
            </Text>

            <TouchableOpacity>

              <Text
                style={[
                  styles.registerText,
                  {
                    fontSize: smallFontSize,
                  },
                ]}
              >
                {" "}Send a new one
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </View>

    </ImageBackground>
  );
}


// ==================================================
// STYLES
// ==================================================

const styles = StyleSheet.create({

  // ==================================================
  // BACKGROUND
  // ==================================================

  background: {
    flex: 1,
    width: "100%",
  height: "100%",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor:
      "rgba(0,0,0,0.5)",
  },

  screen: {
    flex: 1,
  },


  // ==================================================
  // HEADER
  // ==================================================

  header: {
    position: "absolute",

    alignItems:
      "flex-start",

    zIndex: 5,
  },


  // ==================================================
  // ENTER CODE
  // ==================================================

  titleContainer: {
    position: "absolute",

    alignItems:
      "center",

    zIndex: 4,
  },

  title: {
    color: "#CF928A",

    fontWeight: "500",

    textAlign: "center",
  },


  // ==================================================
  // BOTTOM SECTION
  // ==================================================

  bottomSection: {
    position: "absolute",

    alignItems:
      "center",
  },


  // ==================================================
  // CODE
  // ==================================================

  codeContainer: {
    width: "100%",

    flexDirection:
      "row",

    justifyContent:
      "center",

    alignItems:
      "center",
  },

  input: {
    borderWidth: 3,

    borderColor:
      "#CF928A",

    backgroundColor:
      "rgba(207,146,138,0.3)",

    color:
      "#F5F1D1",

    fontWeight: "600",

    padding: 0,

    textAlign:
      "center",

    textAlignVertical:
      "center",
  },


  // ==================================================
  // VERIFY BUTTON
  // ==================================================

  verifyButton: {
    width: "100%",

    alignSelf:
      "center",

    borderWidth: 3,

    borderColor:
      "#CF928A",

    backgroundColor:
      "rgba(207,146,138,0.3)",

    justifyContent:
      "center",

    alignItems:
      "center",
  },

  verifyText: {
    color:
      "#fffde8",
  },


  // ==================================================
  // SEND AGAIN
  // ==================================================

  register: {
    width: "100%",

    flexDirection:
      "row",

    justifyContent:
      "flex-start",

    alignItems:
      "center",

    flexWrap:
      "wrap",
  },

  smallText: {
    color:
      "#fffde8",
  },

  registerText: {
    color:
      "#fffde8",

    fontWeight:
      "600",
  },

});