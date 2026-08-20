import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert, //za greshki izvestqvane (posle shte mahna komentarite, prosto sum bavna i zabravqm)
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
  // RESPONSIVE SCALE
  // ==================================================

  const BASE_WIDTH = 390;
  const BASE_HEIGHT = 844;

  const scale = Math.min(
    width / BASE_WIDTH,
    height / BASE_HEIGHT
  );

  const responsiveScale = Math.min(
    scale,
    1.10
  );

  const s = (value) => value * responsiveScale;

  // ==================================================
  // SCREEN SIZE
  // ==================================================

  const isVeryShort = height < 620;
  const isShort = height < 700;

  // ==================================================
  // SIZES
  // ==================================================

  const titleSize = s(40);

  const labelSize = s(20);

  const inputFontSize = s(18);

  const googleFontSize = s(20);

  const inputHeight = s(45);

  const iconSize = s(23);

  // ==================================================
  // TOP PADDING
  // ==================================================

  let topPadding;

  if (isVeryShort) {
    topPadding = height * 0.025;
  } else if (isShort) {
    topPadding = height * 0.055;
  } else {
    topPadding = height * 0.10;
  }

  // ==================================================
  // SPACING
  // ==================================================

  const headerMargin = isVeryShort
    ? s(5)
    : isShort
    ? s(12)
    : s(20);

  const titleMargin = isVeryShort
    ? s(7)
    : isShort
    ? s(14)
    : s(20);

  const inputMargin = isVeryShort
    ? s(9)
    : isShort
    ? s(14)
    : s(19);

  const orMargin = isVeryShort
    ? s(8)
    : isShort
    ? s(11)
    : s(15);

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

      const response = await fetch("http://192.168.0.194:5000/api/register", { // ip na kompa
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });


      const data = await response.json();

      if (response.ok) {
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });

        return;

      } else {
        const errorMessage = data.error || data.message || "Registration failed.";

        Alert.alert(
          "Error",
          errorMessage
        );
      }
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

      {/* DARK OVERLAY */}

      <View style={styles.overlay} />

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
              paddingTop: topPadding,
              paddingHorizontal: width * 0.05,
            },
          ]}
        >

          {/* ==========================================
              HEADER
          ========================================== */}

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


          {/* ==========================================
              REGISTER TITLE
          ========================================== */}

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


          {/* ==========================================
              FORM
          ========================================== */}

          <View style={styles.content}>

            {/* ========================================
                USERNAME
            ======================================== */}

            <Text
              style={[
                styles.label,
                {
                  fontSize: labelSize,
                  marginBottom: s(4),
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
                  borderRadius: s(35),
                  paddingHorizontal: width * 0.05,
                  marginBottom: inputMargin,
                },
              ]}
              placeholder="Enter Username"
              placeholderTextColor="rgba(245, 241, 209, 0.6)"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              autoCorrect={false}
            />


            {/* ========================================
                EMAIL
            ======================================== */}

            <Text
              style={[
                styles.label,
                {
                  fontSize: labelSize,
                  marginBottom: s(4),
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
                  borderRadius: s(35),
                  paddingHorizontal: width * 0.05,
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


            {/* ========================================
                PASSWORD
            ======================================== */}

            <Text
              style={[
                styles.label,
                {
                  fontSize: labelSize,
                  marginBottom: s(4),
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
                  borderRadius: s(35),
                  paddingHorizontal: width * 0.05,
                  marginBottom: s(3),
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


              {/* PASSWORD VISIBILITY */}

              <TouchableOpacity
                onPress={() =>
                  setShowPassword(!showPassword)
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


            {/* ========================================
                FORGOT PASSWORD
            ======================================== */}

            <TouchableOpacity>

              <Text
                style={[
                  styles.forgot,
                  {
                    fontSize: s(14),
                    marginTop: s(1),
                  },
                ]}
              >
                Forgot password?
              </Text>

            </TouchableOpacity>
{/* ========================================
    SIGN UP
======================================== */}

<TouchableOpacity
  style={[
  styles.google,
  {
    height: inputHeight,
    borderRadius: s(35),
    marginTop: s(22),
    marginBottom: orMargin,
  },
]}
  onPress={handleRegister}
>
  <Text
    style={[
      styles.googleText,
      {
        fontSize: googleFontSize,
      },
    ]}
  >
    Sign Up
  </Text>
</TouchableOpacity>

            {/* ========================================
                OR
            ======================================== */}

            <View
              style={[
                styles.or,
                {
                  marginVertical: orMargin,
                },
              ]}
            >

              <View
                style={[
                  styles.line,
                  {
                    height: s(2),
                  },
                ]}
              />

              <Text
                style={[
                  styles.orText,
                  {
                    fontSize: s(19),
                    marginHorizontal: s(10),
                  },
                ]}
              >
                OR
              </Text>

              <View
                style={[
                  styles.line,
                  {
                    height: s(2),
                  },
                ]}
              />

            </View>


            {/* ========================================
                GOOGLE
            ======================================== */}

            <TouchableOpacity
              style={[
                styles.google,
                {
                  height: inputHeight,
                  borderRadius: s(35),
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
                size={iconSize}
                color="#F5F1D1"
              />

            </TouchableOpacity>


            {/* ========================================
                LOGIN
            ======================================== */}

            <View
              style={[
                styles.login,
                {
                  marginTop: s(6),
                },
              ]}
            >

              <Text
                style={[
                  styles.smallText,
                  {
                    fontSize: s(15),
                  },
                ]}
              >
                Have an account?
              </Text>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Login")
                }
              >

                <Text
                  style={[
                    styles.loginText,
                    {
                      fontSize: s(15),
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

  // -----------------------------------------------
  // BACKGROUND
  // -----------------------------------------------

  background: {
    flex: 1,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },


  // -----------------------------------------------
  // CONTAINER
  // -----------------------------------------------

  container: {
    flex: 1,
  },

  contentWrapper: {
    flex: 1,
    width: "100%",
  },


  // -----------------------------------------------
  // HEADER
  // -----------------------------------------------

  header: {
    alignItems: "flex-start",
  },


  // -----------------------------------------------
  // TITLE
  // -----------------------------------------------

  title: {
    textAlign: "center",
    fontWeight: "500",
    color: "#CF928A",
  },


  // -----------------------------------------------
  // FORM
  // -----------------------------------------------

  content: {
    width: "100%",
  },


  // -----------------------------------------------
  // LABEL
  // -----------------------------------------------

  label: {
    color: "#F5F1D1",
  },


  // -----------------------------------------------
  // INPUT
  // -----------------------------------------------

  input: {
    width: "100%",

    borderWidth: 3,
    borderColor: "#CF928A",

    backgroundColor:
      "rgba(207,146,138,0.3)",

    color: "#F5F1D1",
  },


  // -----------------------------------------------
  // PASSWORD
  // -----------------------------------------------

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
  },


  // -----------------------------------------------
  // FORGOT
  // -----------------------------------------------

  forgot: {
    color: "#F5F1D1",
  },


  // -----------------------------------------------
  // OR
  // -----------------------------------------------

  or: {
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


  // -----------------------------------------------
  // GOOGLE
  // -----------------------------------------------

  google: {
    width: "100%",

    borderWidth: 3,
    borderColor: "#c99591",

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


  // -----------------------------------------------
  // LOGIN
  // -----------------------------------------------

  login: {
    flexDirection: "row",
  },

  smallText: {
    color: "#fffde8",
  },

  loginText: {
    color: "#fffde8",
    fontWeight: "600",
  },



});