import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import HelloText from "../components/HelloText";

export default function LoginScreen() {
  const { width, height } = useWindowDimensions();

  const [showPassword, setShowPassword] = useState(false);

  // Responsive стойности
  const isSmallScreen = width < 380;
  const isShortScreen = height < 700;

  const titleSize = isSmallScreen ? 34 : 40;
  const labelSize = isSmallScreen ? 18 : 20;
  const inputFontSize = isSmallScreen ? 16 : 18;
  const googleFontSize = isSmallScreen ? 18 : 20;

  const inputHeight = isSmallScreen ? 48 : 52;

  const topPadding = isShortScreen
    ? height * 0.18
    : height * 0.25;

  return (
    <ImageBackground
      source={require("../components/photos/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : "height"
        }
      >
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            {
              paddingTop: topPadding,
            },
          ]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* HEADER */}
          <View
            style={[
              styles.header,
              {
                marginBottom: isSmallScreen
                  ? 25
                  : 40,
              },
            ]}
          >
            <HelloText animated={false} />
          </View>

          {/* TITLE */}
          <Text
            style={[
              styles.text,
              {
                fontSize: titleSize,
                marginBottom: isSmallScreen
                  ? 25
                  : 35,
              },
            ]}
          >
            Login
          </Text>

          <View style={styles.content}>

            {/* USERNAME */}
            <Text
              style={[
                styles.label,
                {
                  fontSize: labelSize,
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
                },
              ]}
              placeholder="Enter Username"
              placeholderTextColor="rgba(245, 241, 209, 0.6)"
              autoCapitalize="none"
            />

            {/* EMAIL */}
            <Text
              style={[
                styles.label,
                {
                  fontSize: labelSize,
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
                },
              ]}
              placeholder="Enter E-mail"
              placeholderTextColor="rgba(245, 241, 209, 0.6)"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {/* PASSWORD */}
            <Text
              style={[
                styles.label,
                {
                  fontSize: labelSize,
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
                autoCapitalize="none"
              />

              <TouchableOpacity
                onPress={() =>
                  setShowPassword(!showPassword)
                }
              >
                <Ionicons
                  name={
                    showPassword
                      ? "eye-outline"
                      : "eye-off-outline"
                  }
                  size={isSmallScreen ? 21 : 23}
                  color="#F5F1D1"
                />
              </TouchableOpacity>
            </View>

            {/* FORGOT PASSWORD */}
            <TouchableOpacity>
              <Text style={styles.forgot}>
                Forgot password?
              </Text>
            </TouchableOpacity>

            {/* OR */}
            <View
              style={[
                styles.or,
                {
                  marginVertical: isSmallScreen
                    ? 10
                    : 14,
                },
              ]}
            >
              <View style={styles.line} />

              <Text
                style={[
                  styles.orText,
                  {
                    fontSize: isSmallScreen
                      ? 18
                      : 20,
                  },
                ]}
              >
                OR
              </Text>

              <View style={styles.line} />
            </View>

            {/* GOOGLE */}
            <TouchableOpacity
              style={[
                styles.google,
                {
                  height: inputHeight,
                },
              ]}
            >
              <Text
                style={[
                  styles.googleText,
                  {
                    fontSize: googleFontSize,
                  },
                ]}
              >
                Continue with Google
              </Text>

              <FontAwesome
                name="google"
                size={isSmallScreen ? 21 : 23}
                color="#F5F1D1"
              />
            </TouchableOpacity>

            {/* REGISTER */}
            <View style={styles.register}>
              <Text style={styles.smallText}>
                Don’t have an account?
              </Text>

              <TouchableOpacity>
                <Text style={styles.registerText}>
                  {" "}Register
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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

  container: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: "5%",
    paddingBottom: 30,
  },

  header: {
    alignItems: "center",
  },

  text: {
    textAlign: "center",
    fontWeight: "500",
    color: "#CF928A",
  },

  content: {
    width: "100%",
  },

  label: {
    color: "#F5F1D1",
    marginBottom: 5,
  },

  input: {
    width: "100%",
    borderWidth: 3,
    borderColor: "#CF928A",
    borderRadius: 35,
    backgroundColor:
      "rgba(207,146,138,0.3)",
    paddingHorizontal: "5%",
    color: "#F5F1D1",
    marginBottom: 25,
  },

  passwordBox: {
    width: "100%",
    borderWidth: 3,
    borderColor: "#CF928A",
    borderRadius: 35,
    backgroundColor:
      "rgba(207,146,138,0.3)",

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: "5%",
    marginBottom: 5,
  },

  passwordInput: {
    flex: 1,
    color: "#F5F1D1",
  },

  forgot: {
    color: "#F5F1D1",
    fontSize: 14,
    marginTop: 2,
  },

  or: {
    flexDirection: "row",
    alignItems: "center",
  },

  line: {
    flex: 1,
    height: 2,
    backgroundColor: "#c99591",
  },

  orText: {
    color: "#c99591",
    marginHorizontal: 12,
    fontStyle: "italic",
  },

  google: {
    width: "100%",

    borderWidth: 3,
    borderColor: "#c99591",
    borderRadius: 35,

    backgroundColor:
      "rgba(207,146,138,0.3)",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    gap: 8,
  },

  googleText: {
    color: "#fffde8",
  },

  register: {
    flexDirection: "row",
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