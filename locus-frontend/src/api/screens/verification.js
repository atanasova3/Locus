import React, { useState, useRef, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";


import HelloText from "../components/HelloText";
const CODE_LENGTH = 4;

export default function VerificationScreen() {
const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [code, setCode] = useState(
  Array(CODE_LENGTH).fill("")
);

  const inputs = useRef([]);
  useEffect(() => {
  const showKeyboard = Keyboard.addListener(
    "keyboardWillShow",
    (event) => {
      setKeyboardHeight(event.endCoordinates.height);
    }
  );

  const hideKeyboard = Keyboard.addListener(
    "keyboardWillHide",
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
    // Само цифри
    const digit = text.replace(/[^0-9]/g, "").slice(-1);

    const newCode = [...code];
    newCode[index] = digit;

    setCode(newCode);

    // Отиваме към следващото поле
    if (digit && index < CODE_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }

    // Ако е въведен целият код
    if (digit && index === CODE_LENGTH - 1) {
      const fullCode = newCode.join("");

      if (fullCode.length === CODE_LENGTH) {
        console.log("CODE:", fullCode);

        // Тук можеш да провериш кода
        // verifyCode(fullCode);
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

    // API request тук
  };

 return (
<ImageBackground
  source={require("../components/photos/background.png")}
  style={styles.background}
  resizeMode="cover"
>
  <View style={styles.overlay} />

  <View style={{ flex: 1 }}>
    
    <View style={styles.header}>
      <HelloText animated={false} />
    </View>

    <Text style={styles.text}>
      Enter code
    </Text>

    <View
  style={[
    styles.bottomSection,
    {
      bottom:
        keyboardHeight > 0
          ? keyboardHeight + 15
          : "8%",
    },
  ]}
>

      <View style={styles.container}>
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
            style={styles.input}
            textAlign="center"
            selectionColor="#D99791"
            placeholder="0"
            placeholderTextColor="rgba(255,255,255,0.25)"
          />
        ))}
      </View>

      <TouchableOpacity
        style={styles.google}
        onPress={verifyCode}
        activeOpacity={0.8}
      >
        <Text style={styles.googleText}>
          Verify
        </Text>
      </TouchableOpacity>

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
    keyboardView: {
  flex: 1,
},
  background: {
    flex: 1,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
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
paddingHorizontal: "7%",
    flexDirection: "row",
    justifyContent: "space-between",

    
  },

  input: {
    width: 70,
    height: 77,

    borderWidth: 3,
    borderColor: "#CF928A",
    borderRadius: 20,

    backgroundColor: "rgba(207,146,138,0.3)",

    color: "#F5F1D1",
    fontSize: 30,
    fontWeight: "600",

    padding: 0,

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

    backgroundColor: "rgba(207,146,138,0.3)",

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

