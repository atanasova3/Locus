import React, { useState, useRef, useEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  useWindowDimensions,
} from "react-native";

import HelloText from "../components/HelloText";
import verificationStyles from "../styles/verificationStyles";
import React, { useState, useRef, useEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  useWindowDimensions,
} from "react-native";

import HelloText from "../components/HelloText";
import verificationStyles from "../styles/verificationStyles";
import { getVerificationLayoutMetrics } from "../utils/verificationLayout";

const styles = verificationStyles;
const CODE_LENGTH = 4;

export default function VerificationScreen() {
  const { width, height } = useWindowDimensions();
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [code, setCode] = useState(Array(CODE_LENGTH).fill(""));
  const inputs = useRef([]);

  const {
    isVerySmall,
    horizontalPadding,
    codeGap,
    inputWidth,
    inputHeight,
    inputFontSize,
    titleSize,
    buttonHeight,
    buttonFontSize,
    smallFontSize,
    topMargin,
    titleTop,
    buttonMarginTop,
    bottomPosition,
  } = getVerificationLayoutMetrics(width, height, keyboardHeight);

  useEffect(() => {
    const showEvent =
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent =
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";

    const showKeyboard = Keyboard.addListener(showEvent, (event) => {
      setKeyboardHeight(event.endCoordinates.height);
    });

    const hideKeyboard = Keyboard.addListener(hideEvent, () => {
      setKeyboardHeight(0);
    });

    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);

  const handleChange = (text, index) => {
    const digit = text.replace(/[^0-9]/g, "").slice(-1);
    const newCode = [...code];

    newCode[index] = digit;
    setCode(newCode);

    if (digit && index < CODE_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }

    if (digit && index === CODE_LENGTH - 1) {
      const fullCode = newCode.join("");

      if (fullCode.length === CODE_LENGTH) {
        console.log("CODE:", fullCode);
      }
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const verifyCode = () => {
    const fullCode = code.join("");

    if (fullCode.length !== CODE_LENGTH) {
      console.log("Please enter the full code");
      return;
    }

    console.log("Verifying:", fullCode);
  };

  return (
    <ImageBackground
      source={require("../components/photos/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.screen}>
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
          <Text style={[styles.title, { fontSize: titleSize }]}>Enter code</Text>
        </View>

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
          <View style={[styles.codeContainer, { gap: codeGap }]}>
            {code.map((value, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  inputs.current[index] = ref;
                }}
                value={value}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
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
                    borderRadius: inputWidth * 0.28,
                  },
                ]}
              />
            ))}
          </View>

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
            <Text style={[styles.verifyText, { fontSize: buttonFontSize }]}>Verify</Text>
          </TouchableOpacity>

          <View style={[styles.register, { marginTop: 7 }]}> 
            <Text style={[styles.smallText, { fontSize: smallFontSize }]}>You didn't receive a code?</Text>
            <TouchableOpacity>
              <Text style={[styles.registerText, { fontSize: smallFontSize }]}>
                {" "}Send a new one
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}