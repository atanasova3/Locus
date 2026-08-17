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

  // ==========================================
  // RESPONSIVE SCALE
  // ==========================================

  const BASE_WIDTH = 390;
  const BASE_HEIGHT = 844;

  const scale = Math.min(
    width / BASE_WIDTH,
    height / BASE_HEIGHT
  );

  const responsiveScale = Math.max(
    0.70,
    Math.min(scale, 1.10)
  );

  const s = (value) =>
    value * responsiveScale;

  // ==========================================
  // SCREEN SIZE
  // ==========================================

  const isVeryShort = height < 620;
  const isShort = height < 700;

  // ==========================================
  // CODE INPUT SIZE
  // ==========================================

  const horizontalPadding = width * 0.05;

  const availableWidth =
    width - horizontalPadding * 2;

  const gap = s(12);

  const inputWidth = Math.min(
    s(65),
    (availableWidth - gap * 3) / 4
  );

  const inputHeight = inputWidth * 1.1;

  const inputFontSize =
    inputWidth * 0.43;

  // ==========================================
  // RESPONSIVE VALUES
  // ==========================================

  const titleSize = s(40);

  const buttonHeight = s(52);

  const buttonFontSize = s(20);

  const smallFontSize = s(15);

  // ==========================================
  // KEYBOARD
  // ==========================================

  useEffect(() => {
    const showEvent =
      Platform.OS === "ios"
        ? "keyboardWillShow"
        : "keyboardDidShow";

    const hideEvent =
      Platform.OS === "ios"
        ? "keyboardWillHide"
        : "keyboardDidHide";

    const showKeyboard =
      Keyboard.addListener(
        showEvent,
        (event) => {
          setKeyboardHeight(
            event.endCoordinates.height
          );
        }
      );

    const hideKeyboard =
      Keyboard.addListener(
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

  // ==========================================
  // CODE CHANGE
  // ==========================================

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

    // Full code entered
    if (
      digit &&
      index === CODE_LENGTH - 1
    ) {
      const fullCode =
        newCode.join("");

      if (
        fullCode.length === CODE_LENGTH
      ) {
        console.log(
          "CODE:",
          fullCode
        );
      }
    }
  };

  // ==========================================
  // BACKSPACE
  // ==========================================

  const handleKeyPress = (e, index) => {
    if (
      e.nativeEvent.key ===
        "Backspace" &&
      !code[index] &&
      index > 0
    ) {
      inputs.current[
        index - 1
      ]?.focus();
    }
  };

  // ==========================================
  // VERIFY
  // ==========================================

  const verifyCode = () => {
    const fullCode =
      code.join("");

    if (
      fullCode.length !==
      CODE_LENGTH
    ) {
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

  // ==========================================
  // BOTTOM POSITION
  // ==========================================

  let bottomPosition;

  if (keyboardHeight > 0) {
    bottomPosition =
      keyboardHeight + s(15);
  } else if (isVeryShort) {
    bottomPosition = s(20);
  } else if (isShort) {
    bottomPosition = s(35);
  } else {
    bottomPosition =
      height * 0.08;
  }

  // ==========================================
  // TITLE POSITION
  // ==========================================

  let titleTop;

  if (isVeryShort) {
    titleTop = "25%";
  } else if (isShort) {
    titleTop = "29%";
  } else {
    titleTop = "33%";
  }

  return (
    <ImageBackground
      source={require("../components/photos/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* DARK OVERLAY */}

      <View
        style={styles.overlay}
      />

      <View
        style={styles.screen}
      >

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <View
          style={[
            styles.header,
            {
              top: isVeryShort
                ? "5%"
                : isShort
                ? "7%"
                : "10%",
            },
          ]}
        >
          <HelloText
            animated={false}
          />
        </View>

        {/* ========================= */}
        {/* TITLE */}
        {/* ========================= */}

        <Text
          style={[
            styles.text,
            {
              top: titleTop,
              fontSize: titleSize,
            },
          ]}
        >
          Enter code
        </Text>

        {/* ========================= */}
        {/* BOTTOM SECTION */}
        {/* ========================= */}

        <View
          style={[
            styles.bottomSection,
            {
              bottom:
                bottomPosition,
            },
          ]}
        >

          {/* ========================= */}
          {/* CODE INPUTS */}
          {/* ========================= */}

          <View
            style={[
              styles.codeContainer,
              {
                gap: gap,
              },
            ]}
          >
            {code.map(
              (value, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => {
                    inputs.current[
                      index
                    ] = ref;
                  }}
                  value={value}
                  onChangeText={(
                    text
                  ) =>
                    handleChange(
                      text,
                      index
                    )
                  }
                  onKeyPress={(e) =>
                    handleKeyPress(e,index)
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
                      width:
                        inputWidth,
                      height:
                        inputHeight,
                      fontSize:
                        inputFontSize,
                      borderRadius:
                        inputWidth *
                        0.28,
                    },
                  ]}
                />
              )
            )}
          </View>

          {/* ========================= */}
          {/* VERIFY BUTTON */}
          {/* ========================= */}

          <TouchableOpacity
            style={[
              styles.google,
              {
                height:
                  buttonHeight,
                borderRadius:
                  s(35),
                marginTop:
                  isVeryShort
                    ? s(20)
                    : isShort
                    ? s(30)
                    : s(45),
              },
            ]}
            onPress={
              verifyCode
            }
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.googleText,
                {
                  fontSize:
                    buttonFontSize,
                },
              ]}
            >
              Verify
            </Text>
          </TouchableOpacity>

          {/* ========================= */}
          {/* SEND AGAIN */}
          {/* ========================= */}

          <View
            style={[
              styles.register,
              {
                marginTop: s(7),
              },
            ]}
          >
            <Text
              style={[
                styles.smallText,
                {
                  fontSize:
                    smallFontSize,
                },
              ]}
            >
              You didn't receive
              a code?
            </Text>

            <TouchableOpacity>
              <Text
                style={[
                  styles.registerText,
                  {
                    fontSize:
                      smallFontSize,
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

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor:
      "rgba(0,0,0,0.5)",
  },

  screen: {
    flex: 1,
  },

  // ==========================================
  // HEADER
  // ==========================================

  header: {
    position: "absolute",
    left: "5%",
    right: "5%",

    alignItems: "flex-start",
  },

  // ==========================================
  // TITLE
  // ==========================================

  text: {
    position: "absolute",

    left: "5%",
    right: "5%",

    textAlign: "center",

    fontWeight: "500",

    color: "#CF928A",
  },

  // ==========================================
  // BOTTOM
  // ==========================================

  bottomSection: {
    position: "absolute",

    left: "5%",
    right: "5%",
  },

  // ==========================================
  // CODE
  // ==========================================

  codeContainer: {
    width: "100%",

    flexDirection: "row",

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

    fontWeight:
      "600",

    padding: 0,

    textAlign:
      "center",

    textAlignVertical:
      "center",
  },

  // ==========================================
  // VERIFY BUTTON
  // ==========================================

  google: {
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

  googleText: {
    color:
      "#fffde8",
  },

  // ==========================================
  // SEND AGAIN
  // ==========================================

  register: {
    flexDirection:
      "row",

    justifyContent:
      "flex-start",

    alignItems:
      "center",
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