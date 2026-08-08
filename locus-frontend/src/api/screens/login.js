
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import HelloText from "../components/HelloText";

export default function LoginScreen() {
   const [showPassword, setShowPassword] = useState(false);
  return (
    
    <ImageBackground
      source={require("../components/photos/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
    <View style={styles.header}>
        <HelloText animated={false} />
      </View>
      <Text style={styles.text}>Login</Text>
      <View style={styles.content}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          placeholderTextColor="rgb(245, 241, 209, 0.6)"
        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter E-mail"
          placeholderTextColor="rgb(245, 241, 209, 0.6)"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password</Text>

        <View style={styles.passwordBox}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter Password"
            placeholderTextColor="rgb(245, 241, 209, 0.6)"
            secureTextEntry={!showPassword}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={23}
              color="#F5F1D1"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>

        <View style={styles.or}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.google}>
          <Text style={styles.googleText}>
            Continue with Google
          </Text>

          <FontAwesome
            name="google"
            size={23}
            color="#F5F1D1"
          />
        </TouchableOpacity>

        <View style={styles.register}>
          <Text style={styles.smallText}>
            Don’t have an account?
          </Text>

          <TouchableOpacity>
            <Text style={styles.registerText}> Register</Text>
          </TouchableOpacity>
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
  textAlignVertical: "center",
  fontSize: 40,
  fontWeight: "500",
  color: "#CF928A",
},
content: {
    flex: 1,
    paddingHorizontal: "5%",
    top: "42%",
  },

  label: {
    color: "#F5F1D1",
    fontSize: 20,
    marginBottom: 5,
  },

  input: {
    height: 52,
    borderWidth: 3,
    borderColor: "#CF928A",
    borderRadius: 35,
    backgroundColor: "rgba(207,146,138,0.3)",
    paddingHorizontal: "5%",
    color: "#F5F1D1",
    fontSize: 18,
    marginBottom: 25,
  },

  passwordBox: {
    height: 52,
    borderWidth: 3,
    borderColor: "#CF928A",
    borderRadius: 35,
    backgroundColor: "rgba(207,146,138,0.3)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "5%",
    marginBottom: 5,
  },

  passwordInput: {
    flex: 1,
    color: "#F5F1D1",
    fontSize: 18,
  },

  forgot: {
    color: "#F5F1D1",
    fontSize: 14,
    marginTop: 2,
  },

  or: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 14,
  },

  line: {
    flex: 1,
    height: 2,
    backgroundColor: "#c99591",
  },

  orText: {
    color: "#c99591",
    fontSize: 20,
    marginHorizontal: 12,
    fontStyle: "italic"
  },

  google: {
    height: 52,
    borderWidth: 3,
    borderColor: "#c99591",
    borderRadius: 35,
    backgroundColor: "rgba(207,146,138,0.3)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  googleText: {
    color: "#fffde8",
    fontSize: 20,
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

