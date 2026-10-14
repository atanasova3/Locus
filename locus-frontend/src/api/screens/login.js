import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from "react-native";

import {
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";

import HelloText from "../components/HelloText";
import authStyles from "../styles/authStyles";
import { getAuthLayoutMetrics } from "../utils/authLayout";
import { loginUser } from "../services/authService";

const styles = authStyles;

export default function LoginScreen({ navigation }) {
  const { width, height } = useWindowDimensions();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    isVerySmall,
    contentWidth,
    titleSize,
    labelSize,
    inputFontSize,
    buttonFontSize,
    inputHeight,
    iconSize,
    smallFontSize,
    forgotFontSize,
    topPadding,
    headerMargin,
    titleMargin,
    fieldMargin: inputMargin,
    labelMargin,
    primaryButtonMargin: buttonMargin,
    orMargin,
    clamp,
  } = getAuthLayoutMetrics(width, height, "login");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert(
        "Error",
        "Please fill in email and password."
      );

      return;
    }

    try {
      await loginUser({
        email,
        password,
      });

      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    } catch (error) {
      Alert.alert(
        "Error",
        error.message ||
          "An error occurred. Please try again later."
      );

      console.error(
        "Login error:",
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
        imageStyle={{
    resizeMode: "cover",
  }}
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
        
          {/* ==================================================
              CONTENT
          ================================================== */}

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
              Login
            </Text>

            {/* ==================================================
                FORM
            ================================================== */}

            <View style={styles.content}>

              {/* ==================================================
                  EMAIL
              ================================================== */}

              <Text
                style={[
                  styles.label,
                  {
                    fontSize: labelSize,
                    marginBottom: 4,
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
                    marginBottom: inputMargin,
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
                    marginBottom: 4,
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

              <TouchableOpacity
                style={{
                  alignSelf: "flex-start",
                  marginTop: 4,
                }}
              >
                <Text
                  style={[
                    styles.forgot,
                    {
                      fontSize:
                        forgotFontSize,
                    },
                  ]}
                >
                  Forgot password?
                </Text>
              </TouchableOpacity>

              {/* ==================================================
                  LOGIN BUTTON
              ================================================== */}

              <TouchableOpacity
                style={[
                  styles.actionButton,
                  {
                    height: inputHeight,
                    borderRadius:
                      inputHeight / 2,
                    marginTop: buttonMargin,
                  },
                ]}
                onPress={handleLogin}
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
                  Log In
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
                      marginHorizontal: 10,
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
                  REGISTER
              ================================================== */}

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
                      fontSize:
                        smallFontSize,
                    },
                  ]}
                >
                  Don't have an account?
                </Text>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(
                      "Register"
                    )
                  }
                >
                  <Text
                    style={[
                      styles.registerText,
                      {
                        fontSize:
                          smallFontSize,
                      },
                    ]}
                  >
                    {" "}Register
                  </Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
