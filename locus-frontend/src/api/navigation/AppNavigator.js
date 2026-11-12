import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HelloScreen from "../screens/hello";
import LoginScreen from "../screens/login";
import HomeScreen from "../screens/home";
import RegisterScreen from "../screens/register";
import VerificationScreen from "../screens/verification";
import GeneratingTripScreen from "../screens/generating";
import StartScreen from "../screens/startTrip";
import ReadyTripScreen from "../screens/trip";

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
      <Stack.Screen
        name="GeneratingTrip"
        component={GeneratingTripScreen}
      />
       <Stack.Screen
        name="StartTrip"
        component={StartScreen}
      />
       <Stack.Screen
        name="Trip"
        component={ReadyTripScreen}
      />

    </Stack.Navigator>
  );
}