
import React, { useEffect, useRef } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableOpacity,
  PanResponder
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withSequence,
    withTiming
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HelloText from "../components/HelloText";

<HelloText animated={true} />

  export default function HelloScreen() {
  const navigation = useNavigation();

const buttonY = useRef(new Animated.Value(0)).current;

const screenOpacity = useRef(new Animated.Value(1)).current;
const screenScale = useRef(new Animated.Value(1)).current;

const [isNavigating, setIsNavigating] = React.useState(false);


const handleGoToLogin = () => {
  if (isNavigating) return;

  setIsNavigating(true);

  Animated.parallel([
    
    Animated.timing(screenOpacity, {
      toValue: 0,
      duration: 550,
      useNativeDriver: true,
    }),


    Animated.timing(screenScale, {
      toValue: 1.04,
      duration: 550,
      useNativeDriver: true,
    }),

   
    Animated.timing(buttonY, {
      toValue: -90,
      duration: 450,
      useNativeDriver: true,
    }),
  ]).start(({ finished }) => {
    if (finished) {
      navigation.navigate("Register");
    }
  });
};

const pan = useRef(
  PanResponder.create({
    onStartShouldSetPanResponder: () => !isNavigating,

    onPanResponderMove: (evt, gestureState) => {
      const y = gestureState.dy;

      if (y < 0 && y > -90) {
        buttonY.setValue(y);
      }
    },

    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dy < -80) {
        handleGoToLogin();
      } else {
        Animated.spring(buttonY, {
          toValue: 0,
          useNativeDriver: true,
          friction: 7,
          tension: 45,
        }).start();
      }
    },
  })
).current;

  return (
   <Animated.View style={[ 
    styles.container, 
    { opacity: screenOpacity, 
    transform: [{ scale: screenScale }], 
    }, 
    ]} 
    > 
    <ImageBackground source={require("../components/photos/background.png")} 
    style={styles.background} 
    resizeMode="cover" >
      <View style={styles.overlay} />
      </ImageBackground>
      <View style={styles.header}>
         <HelloText />
      </View>
      <LinearGradient
  colors={[
    "rgba(245, 241, 209, 0.05)",
    "rgba(137, 154, 92, 0.4)"
  ]}
  style={styles.gocontainer}
  locations={[0.16, 0.58]}
>


    <Ionicons name="chevron-up-outline"
          size={27}
          color="rgba(217, 140, 140, 0.65)"
          style={{ marginTop: 25 }} />
    <Ionicons name="chevron-up-outline"
          size={30}
          color="rgba(217, 140, 140, 1.0)"
          style={{ marginTop: -15 }} />
<Animated.View
  {...pan.panHandlers}
  style={[
    styles.button,
    {
      transform:[
        {translateY: buttonY},
      ]
    }
  ]}
>
<Text style={styles.buttonText}>
Go!
</Text>
</Animated.View>
</LinearGradient>
</Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 0,
  },
  header: {
    position: "absolute",
    top: "20%",
    left: "5%",
    zIndex: 1,
  },

  gocontainer: {
  position: "absolute",
  bottom: "5%",
  alignSelf: "center",
  width: 100,
  height: 200,
  borderRadius: 55,
  backgroundColor: "rgba(255,255,255,0.18)",
  alignItems: "center",
  justifyContent: "space-between",
  paddingVertical: 20,
   overflow: "hidden",
},

  button: {
    width: 100,
    height: 100,
    borderRadius: 47.5,
    backgroundColor: "rgba(131, 150, 85, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Inter",
    fontSize: 50,
    fontWeight: "300",
    fontStyle: "italic",
    color: "#F5F1D1",
  },
});
  