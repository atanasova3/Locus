
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert, //za greshki izvestqvane (posle shte mahna komentarite, prosto sum bavna i zabravqm hahahaha)
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import HelloText from "../components/HelloText";

export default function RegisterScreen({ navigation }) {
   const [showPassword, setShowPassword] = useState(false);
// state promenlivi
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleRegister = async () => { //izprashtame kum backend
    if (!username || !email || !password) { //validirame dali vs e ppopulneno
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    try {
      const response = await fetch("http://192.168.1.100:5000/register", { //trqq sloja ip na kompa
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        Alert.alert("Success", "Registration successful!");
        navigation.navigate("Login");
      } else {
        Alert.alert("Error", data.message || "Registration failed.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred. Please try again later.");
      console.error("Registration error:", error);
    }
  };

  return (
    
    <ImageBackground
      source={require("../components/photos/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

<KeyboardAvoidingView
  style={styles.container}
  behavior={Platform.OS === "ios" ? "padding" : "height"}
>
  <ScrollView
    contentContainerStyle={styles.scrollContent}
    showsVerticalScrollIndicator={false}
    keyboardShouldPersistTaps="handled"
  >
    <View style={styles.header}>
      <HelloText animated={false} />
    </View>

    <Text style={styles.text}>Register</Text>

    <View style={styles.content}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          placeholderTextColor="rgb(245, 241, 209, 0.6)"
          value={username} //state
          onChangeText={setUsername} 
          autoCapitalize="none" // za vseki sluchai
        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter E-mail"
          placeholderTextColor="rgb(245, 241, 209, 0.6)"
          keyboardType="email-address"
          value ={email} //state
          onChangeText={setEmail} 
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>

        <View style={styles.passwordBox}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter Password"
            placeholderTextColor="rgb(245, 241, 209, 0.6)"
            secureTextEntry={!showPassword}
            value={password} //state
            onChangeText={setPassword} 
            autoCapitalize="none"
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
            Have an account?
          </Text>

          <TouchableOpacity onPress= {() => navigation.navigate("Login")}>
            <Text style={styles.registerText}> Login</Text>
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
  paddingTop: "25%",
  paddingBottom: 30,
},

header: {
  marginBottom: 40,
},

text: {
  textAlign: "center",
  fontSize: 40,
  fontWeight: "500",
  color: "#CF928A",
  marginBottom: 35,
},

content: {
  width: "100%",
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

