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

  // Responsive размер на полетата
  const horizontalPadding = width * 0.12;

  const availableWidth =
    width - horizontalPadding * 2;

  const inputWidth = Math.min(
    70,
    availableWidth * 0.21
  );

  const inputHeight = inputWidth * 1.1;

  const inputFontSize = inputWidth * 0.43;

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

  const handleChange = (text, index) => {
    const digit = text
      .replace(/[^0-9]/g, "")
      .slice(-1);

    const newCode = [...code];

    newCode[index] = digit;

    setCode(newCode);

    if (
      digit &&
      index < CODE_LENGTH - 1
    ) {
      inputs.current[index + 1]?.focus();
    }

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

  const handleKeyPress = (e, index) => {
    if (
      e.nativeEvent.key === "Backspace" &&
      !code[index] &&
      index > 0
    ) {
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

        {/* HEADER */}
        <View style={styles.header}>
          <HelloText animated={false} />
        </View>

        {/* TITLE */}
        <Text style={styles.text}>
          Enter code
        </Text>

        {/* BOTTOM SECTION */}
        <View
          style={[
            styles.bottomSection,
            {
              bottom:
                keyboardHeight > 0
                  ? keyboardHeight + 15
                  : height * 0.08,
            },
          ]}
        >

          {/* CODE INPUTS */}
          <View
            style={[
              styles.container,
              {
                paddingHorizontal:
                  width * 0.05,
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
                  handleChange(text, index)
                }
                onKeyPress={(e) =>
                  handleKeyPress(e, index)
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

          {/* VERIFY BUTTON */}
          <TouchableOpacity
            style={styles.google}
            onPress={verifyCode}
            activeOpacity={0.8}
          >
            <Text style={styles.googleText}>
              Verify
            </Text>
          </TouchableOpacity>

          {/* SEND AGAIN */}
          <View style={styles.register}>
            <Text style={styles.smallText}>
              You didn't receive a code?
            </Text>

            <TouchableOpacity>
              <Text style={styles.registerText}>
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
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  screen: {
    flex: 1,
  },

  header: {
    position: "absolute",
    top: "10%",
    left: "5%",
    right: "5%",
  },

  text: {
    position: "absolute",
    left: 0,
    right: 0,
    top: "33%",

    textAlign: "center",

    fontSize: 40,
    fontWeight: "500",
    color: "#CF928A",
  },

  bottomSection: {
    position: "absolute",
    left: 0,
    right: 0,

    paddingHorizontal: "5%",
  },

  container: {
    width: "100%",

    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",
  },

  input: {
    borderWidth: 3,
    borderColor: "#CF928A",
    backgroundColor:
      "rgba(207,146,138,0.3)",

    color: "#F5F1D1",
    fontWeight: "600",

    padding: 0,

    textAlign: "center",
    textAlignVertical: "center",
  },

  google: {
    width: "100%",
    height: 52,

    alignSelf: "center",

    marginTop: 45,

    borderWidth: 3,
    borderColor: "#CF928A",
    borderRadius: 35,

    backgroundColor:
      "rgba(207,146,138,0.3)",

    justifyContent: "center",
    alignItems: "center",
  },

  googleText: {
    color: "#fffde8",
    fontSize: 20,
  },

  register: {
    flexDirection: "row",
    justifyContent: "flex-start",

    marginTop: 7,
  },

  smallText: {
    color: "#fffde8",
    fontSize: 15,
  },

  registerText: {
    color: "#fffde8",
    fontSize: 15,
    fontWeight: "600",
  },
});