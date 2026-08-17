import React, { useRef } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Animated,
  PanResponder,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HelloText from "../components/HelloText";

export default function HelloScreen() {
  const navigation = useNavigation();

  const { width, height } = useWindowDimensions();

  // Base design: iPhone 14 / 15-ish size
  const BASE_WIDTH = 390;
  const BASE_HEIGHT = 844;

  // Scale according to both width and height
  const scale = Math.min(width / BASE_WIDTH, height / BASE_HEIGHT);

  // Prevent elements from becoming too small or too large
  const s = (size) => size * Math.max(0.78, Math.min(scale, 1.15));

  const buttonY = useRef(new Animated.Value(0)).current;

  const screenOpacity = useRef(new Animated.Value(1)).current;
  const screenScale = useRef(new Animated.Value(1)).current;

  const [isNavigating, setIsNavigating] = React.useState(false);

  const handleGoToLogin = () => {
    if (isNavigating) return;

    setIsNavigating(true);

<<<<<<< Updated upstream
   
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
=======
    Animated.parallel([
      Animated.timing(screenOpacity, {
        toValue: 0,
        duration: 550,
        useNativeDriver: true,
      }),
>>>>>>> Stashed changes

      Animated.timing(screenScale, {
        toValue: 1.04,
        duration: 550,
        useNativeDriver: true,
      }),

      Animated.timing(buttonY, {
        toValue: -s(90),
        duration: 450,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      if (finished) {
        navigation.navigate("Home");
      }
    });
  };

  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !isNavigating,

      onPanResponderMove: (evt, gestureState) => {
        const y = gestureState.dy;

        if (y < 0 && y > -s(90)) {
          buttonY.setValue(y);
        }
      },

      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dy < -s(80)) {
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
    <Animated.View
      style={[
        styles.container,
        {
          opacity: screenOpacity,
          transform: [{ scale: screenScale }],
        },
      ]}
    >
      {/* BACKGROUND */}
      <ImageBackground
        source={require("../components/photos/background.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
      </ImageBackground>

      {/* HELLO TEXT */}
      <View
        style={[
          styles.header,
          {
            top: height * 0.2,
            left: width * 0.05,
          },
        ]}
      >
        <HelloText />
      </View>

      {/* GO CONTAINER */}
      <LinearGradient
        colors={[
          "rgba(245, 241, 209, 0.05)",
          "rgba(137, 154, 92, 0.4)",
        ]}
        locations={[0.16, 0.58]}
        style={[
          styles.gocontainer,
          {
            width: s(100),
            height: s(200),
            borderRadius: s(55),
            paddingVertical: s(20),
            bottom: height * 0.05,
          },
        ]}
      >
        {/* TOP ARROWS */}
        <View style={styles.arrows}>
          <Ionicons
            name="chevron-up-outline"
            size={s(27)}
            color="rgba(217, 140, 140, 0.65)"
            style={{
              marginTop: s(25),
            }}
          />

          <Ionicons
            name="chevron-up-outline"
            size={s(30)}
            color="rgba(217, 140, 140, 1)"
            style={{
              marginTop: s(-15),
            }}
          />
        </View>

        {/* GO BUTTON */}
        <Animated.View
          {...pan.panHandlers}
          style={[
            styles.button,
            {
              width: s(100),
              height: s(100),
              borderRadius: s(47.5),
              transform: [{ translateY: buttonY }],
            },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              {
                fontSize: s(50),
              },
            ]}
          >
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
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  header: {
    position: "absolute",
    zIndex: 1,
  },

  gocontainer: {
    position: "absolute",
    alignSelf: "center",

    backgroundColor: "rgba(255,255,255,0.18)",

    alignItems: "center",
    justifyContent: "space-between",

    overflow: "hidden",
  },

  arrows: {
    alignItems: "center",
    justifyContent: "flex-start",
  },

  button: {
    backgroundColor: "rgba(131, 150, 85, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontFamily: "Inter",
    fontWeight: "300",
    fontStyle: "italic",
    color: "#F5F1D1",
  },
});