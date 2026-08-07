import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HelloScreen from "../screens/hello";
import LoginScreen from "../screens/login";

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
        name="Login"
        component={LoginScreen}
      />

    </Stack.Navigator>
  );
}