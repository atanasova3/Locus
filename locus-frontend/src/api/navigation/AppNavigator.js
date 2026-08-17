import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HelloScreen from "../screens/hello";
import LoginScreen from "../screens/login";
import HomeScreen from "../screens/home";
import RegisterScreen from "../screens/register";
import VerificationScreen from "../screens/verification";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

      <Stack.Screen
        name="Hello"
        component={HelloScreen}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
      />
       <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        name="Verification"
        component={VerificationScreen}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />

    </Stack.Navigator>
  );
}