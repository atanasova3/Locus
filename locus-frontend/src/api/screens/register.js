import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from "react-native";

import { Ionicons, FontAwesome } from "@expo/vector-icons";
import HelloText from "../components/HelloText";

export default function RegisterScreen({ navigation }) {
  const { width, height } = useWindowDimensions();

  const [showPassword, setShowPassword] = useState(false);

  // ==================================================
  // FORM STATES
  // ==================================================

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  // SIZES
  // ==================================================

  const titleSize = clamp(
    width * 0.095,
    32,
    42
  );

  const labelSize = clamp(
    width * 0.051,
    17,
    21
  );

  const inputFontSize = clamp(
    width * 0.046,
    16,
    19
  );

  const buttonFontSize = clamp(
    width * 0.051,
    18,
    22
  );

  const inputHeight = isVerySmall
    ? 43
    : isSmall
    ? 45
    : isTablet
    ? 56
    : 48;

  const iconSize = clamp(
    width * 0.059,
    21,
    25
  );

  const smallFontSize = clamp(
    width * 0.038,
    13,
    16
  );

  const forgotFontSize = clamp(
    width * 0.036,
    13,
    15
  );

  // ==================================================
  // VERTICAL SPACING
  // ==================================================

  const topPadding = isVeryShort
    ? 80
    : isShort
    ? 90
    : isTablet
    ? 110
    : 100;

  const headerMargin = isVeryShort
    ? 5
    : isShort
    ? 10
    : 18;

  const titleMargin = isVeryShort
    ? 10
    : isShort
    ? 16
    : 22;

  const fieldMargin = isVeryShort
    ? 8
    : isShort
    ? 12
    : 16;

  const labelMargin = isVerySmall
    ? 3
    : 4;

  const signUpMargin = isVeryShort
    ? 14
    : isShort
    ? 18
    : 22;

  const orMargin = isVeryShort
    ? 8
    : isShort
    ? 11
    : 15;

  // ==================================================
  // REGISTER
  // ==================================================

  const handleRegister = async () => {
    if (!username || !email || !password) {
      Alert.alert(
        "Error",
        "Please fill in all fields."
      );

      return;
    }

    try {
      const response = await fetch(
        "http://192.168.0.194:5000/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });

        return;
      }

      const errorMessage =
        data.error ||
        data.message ||
        "Registration failed.";

      Alert.alert(
        "Error",
        errorMessage
      );
    } catch (error) {
      Alert.alert(
        "Error",
        "An error occurred. Please try again later."
      );

      console.error(
        "Registration error:",
        error
      );
    }
  };

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
          OVERLAY
      ================================================== */}

      <View style={styles.overlay} />

      {/* ==================================================
          KEYBOARD
      ================================================== */}

      <KeyboardAvoidingView
        style={styles.container}
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : "height"
        }
      >
        
          <View
            style={[
              styles.contentWrapper,
              {
                width: contentWidth,
                alignSelf: "center",
                paddingTop: topPadding,
              },
            ]}
          >
            {/* ==================================================
                HEADER
            ================================================== */}

            <View
              style={[
                styles.header,
                {
                  marginBottom: headerMargin,
                },
              ]}
            >
              <HelloText animated={false} />
            </View>

            {/* ==================================================
                TITLE
            ================================================== */}

            <Text
              style={[
                styles.title,
                {
                  fontSize: titleSize,
                  marginBottom: titleMargin,
                },
              ]}
            >
              Register
            </Text>

            {/* ==================================================
                FORM
            ================================================== */}

            <View style={styles.content}>

              {/* ==================================================
                  USERNAME
              ================================================== */}

              <Text
                style={[
                  styles.label,
                  {
                    fontSize: labelSize,
                    marginBottom: labelMargin,
                  },
                ]}
              >
                Username
              </Text>

              <TextInput
                style={[
                  styles.input,
                  {
                    height: inputHeight,
                    fontSize: inputFontSize,
                    borderRadius:
                      inputHeight / 2,
                    paddingHorizontal:
                      isVerySmall ? 15 : 20,
                    marginBottom: fieldMargin,
                  },
                ]}
                placeholder="Enter Username"
                placeholderTextColor="rgba(245, 241, 209, 0.6)"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                autoCorrect={false}
              />

              {/* ==================================================
                  EMAIL
              ================================================== */}

              <Text
                style={[
                  styles.label,
                  {
                    fontSize: labelSize,
                    marginBottom: labelMargin,
                  },
                ]}
              >
                E-mail
              </Text>

              <TextInput
                style={[
                  styles.input,
                  {
                    height: inputHeight,
                    fontSize: inputFontSize,
                    borderRadius:
                      inputHeight / 2,
                    paddingHorizontal:
                      isVerySmall ? 15 : 20,
                    marginBottom: fieldMargin,
                  },
                ]}
                placeholder="Enter E-mail"
                placeholderTextColor="rgba(245, 241, 209, 0.6)"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
              />

              {/* ==================================================
                  PASSWORD
              ================================================== */}

              <Text
                style={[
                  styles.label,
                  {
                    fontSize: labelSize,
                    marginBottom: labelMargin,
                  },
                ]}
              >
                Password
              </Text>

              <View
                style={[
                  styles.passwordBox,
                  {
                    height: inputHeight,
                    borderRadius:
                      inputHeight / 2,
                    paddingHorizontal:
                      isVerySmall ? 15 : 20,
                  },
                ]}
              >
                <TextInput
                  style={[
                    styles.passwordInput,
                    {
                      fontSize: inputFontSize,
                    },
                  ]}
                  placeholder="Enter Password"
                  placeholderTextColor="rgba(245, 241, 209, 0.6)"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                />

                <TouchableOpacity
                  onPress={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  hitSlop={{
                    top: 10,
                    bottom: 10,
                    left: 10,
                    right: 10,
                  }}
                >
                  <Ionicons
                    name={
                      showPassword
                        ? "eye-outline"
                        : "eye-off-outline"
                    }
                    size={iconSize}
                    color="#F5F1D1"
                  />
                </TouchableOpacity>
              </View>

              {/* ==================================================
                  FORGOT PASSWORD
              ================================================== */}

              <TouchableOpacity>
                <Text
                  style={[
                    styles.forgot,
                    {
                      fontSize:
                        forgotFontSize,
                      marginTop: 4,
                    },
                  ]}
                >
                  Forgot password?
                </Text>
              </TouchableOpacity>

              {/* ==================================================
                  SIGN UP
              ================================================== */}

              <TouchableOpacity
                style={[
                  styles.actionButton,
                  {
                    height: inputHeight,
                    borderRadius:
                      inputHeight / 2,
                    marginTop:
                      signUpMargin,
                  },
                ]}
                onPress={handleRegister}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.buttonText,
                    {
                      fontSize:
                        buttonFontSize,
                    },
                  ]}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>

              {/* ==================================================
                  OR
              ================================================== */}

              <View
                style={[
                  styles.or,
                  {
                    marginVertical:
                      orMargin,
                  },
                ]}
              >
                <View
                  style={[
                    styles.line,
                    {
                      height: 2,
                    },
                  ]}
                />

                <Text
                  style={[
                    styles.orText,
                    {
                      fontSize: clamp(
                        width * 0.049,
                        17,
                        20
                      ),
                      marginHorizontal:
                        10,
                    },
                  ]}
                >
                  OR
                </Text>

                <View
                  style={[
                    styles.line,
                    {
                      height: 2,
                    },
                  ]}
                />
              </View>

              {/* ==================================================
                  GOOGLE
              ================================================== */}

              <TouchableOpacity
                style={[
                  styles.actionButton,
                  {
                    height: inputHeight,
                    borderRadius:
                      inputHeight / 2,
                  },
                ]}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.buttonText,
                    {
                      fontSize:
                        buttonFontSize,
                    },
                  ]}
                >
                  Continue with Google
                </Text>

                <FontAwesome
                  name="google"
                  size={iconSize}
                  color="#F5F1D1"
                />
              </TouchableOpacity>

              {/* ==================================================
                  LOGIN
              ================================================== */}

              <View
                style={[
                  styles.login,
                  {
                    marginTop: 7,
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
                  Have an account?
                </Text>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(
                      "Login"
                    )
                  }
                >
                  <Text
                    style={[
                      styles.loginText,
                      {
                        fontSize:
                          smallFontSize,
                      },
                    ]}
                  >
                    {" "}Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </KeyboardAvoidingView>
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
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor:
      "rgba(0,0,0,0.5)",
  },

  // ==================================================
  // CONTAINER
  // ==================================================

  container: {
    flex: 1,
  },

  contentWrapper: {
    flexGrow: 1,
  },

  // ==================================================
  // HEADER
  // ==================================================

  header: {
    alignItems: "flex-start",
  },

  // ==================================================
  // TITLE
  // ==================================================

  title: {
    width: "100%",
    textAlign: "center",
    fontWeight: "500",
    color: "#CF928A",
  },

  // ==================================================
  // FORM
  // ==================================================

  content: {
    width: "100%",
  },

  // ==================================================
  // LABEL
  // ==================================================

  label: {
    color: "#F5F1D1",
  },

  // ==================================================
  // INPUT
  // ==================================================

  input: {
    width: "100%",

    borderWidth: 3,
    borderColor: "#CF928A",

    backgroundColor:
      "rgba(207,146,138,0.3)",

    color: "#F5F1D1",
  },

  // ==================================================
  // PASSWORD
  // ==================================================

  passwordBox: {
    width: "100%",

    borderWidth: 3,
    borderColor: "#CF928A",

    backgroundColor:
      "rgba(207,146,138,0.3)",

    flexDirection: "row",
    alignItems: "center",
  },

  passwordInput: {
    flex: 1,
    color: "#F5F1D1",
    padding: 0,
  },

  // ==================================================
  // FORGOT
  // ==================================================

  forgot: {
    color: "#F5F1D1",
  },

  // ==================================================
  // BUTTONS
  // ==================================================

  actionButton: {
    width: "100%",

    borderWidth: 3,
    borderColor: "#CF928A",

    backgroundColor:
      "rgba(207,146,138,0.3)",

    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",

    gap: 8,
  },

  buttonText: {
    color: "#fffde8",
  },

  // ==================================================
  // OR
  // ==================================================

  or: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  line: {
    flex: 1,
    backgroundColor: "#c99591",
  },

  orText: {
    color: "#c99591",
    fontStyle: "italic",
  },

  // ==================================================
  // LOGIN
  // ==================================================

  login: {
    flexDirection: "row",
    alignItems: "center",
  },

  smallText: {
    color: "#fffde8",
  },

  loginText: {
    color: "#fffde8",
    fontWeight: "600",
  },
});