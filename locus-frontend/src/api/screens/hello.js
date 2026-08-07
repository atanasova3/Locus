
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



  export default function HelloScreen() {
    const buttonScale = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation();
  const buttonY = useRef(new Animated.Value(0)).current;
  const [isNavigating, setIsNavigating] = React.useState(false);
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleTranslate = useRef(new Animated.Value(20)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoTranslate = useRef(new Animated.Value(20)).current;
  const subtitleOpacity = useRef(new Animated.Value(0)).current;
  const subtitleTranslate = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.parallel([
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(titleTranslate, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(logoTranslate, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(subtitleOpacity, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(subtitleTranslate, {
          toValue: 0,
          duration: 900,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);


const pan = useRef(
  PanResponder.create({

    onStartShouldSetPanResponder: () => true,

    onPanResponderMove: (evt, gestureState) => {

  let y = gestureState.dy;

  if (y < 0 && y > -90) {

    buttonY.setValue(y);



  }

},


    onPanResponderRelease: (evt, gestureState) => {

      if (gestureState.dy < -80) {

        setIsNavigating(true);

        Animated.timing(buttonY,{
  toValue:-90,
  duration:300,
  useNativeDriver:true,

        }).start(()=>{

          navigation.navigate("Login");

        });


      } else {

        // връщане обратно
        Animated.spring(buttonY,{
          toValue:0,
          useNativeDriver:true,
          friction:6
        }).start();

      }

    }

  })
).current;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../components/photos/background.png")}
        style={styles.background}
        resizeMode="cover"
      >
      <View style={styles.overlay} />
      </ImageBackground>
      <View style={styles.header}>
        <Animated.Text
          style={[
            styles.title,
            {
              opacity: titleOpacity,
              transform: [{ translateY: titleTranslate }],
            },
          ]}
        >
          Welcome
        </Animated.Text>
        <Animated.Image
          source={require("../components/photos/logo Locus 1.png")}
          style={[
            styles.logo,
            {
              opacity: logoOpacity,
              transform: [{ translateY: logoTranslate }],
            },
          ]}
        />
        <Animated.Text
          style={[
            styles.subtitle,
            {
              opacity: subtitleOpacity,
              transform: [{ translateY: subtitleTranslate }],
            },
          ]}
        >
          Escape the ordinary
        </Animated.Text>
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
    </View>
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
    top: 210,
    left: 27,
    zIndex: 1,
  },
  title: {
    fontFamily: "Inter",
    color: "#F5F1D1",
    fontSize: 64,
    fontWeight: "300",
  },
  logo: {
    position: "absolute",
    top: 70,
    width: 282,
    height: 74,
  },
  subtitle: {
    fontFamily: "Inter",
    color: "#F5F1D1",
    fontSize: 24,
    fontWeight: "400",
    marginTop: 70,
  },
  gocontainer: {
  position: "absolute",
  bottom: 40,
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
  