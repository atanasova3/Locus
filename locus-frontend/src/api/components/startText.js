import React, { useEffect, useRef } from "react";
import { Animated, useWindowDimensions } from "react-native";
import helloTextStyles from "../styles/helloTextStyles";
import { getHelloTextLayoutMetrics } from "../utils/helloTextLayout";

export default function StartText({ animated = true }) {
  const { width, height } = useWindowDimensions();
  const { titleSize } = getHelloTextLayoutMetrics(width, height);
  const titleOpacity = useRef(new Animated.Value(animated ? 0 : 1)).current;
  const titleTranslate = useRef(new Animated.Value(animated ? 20 : 0)).current;

  useEffect(() => {
    if (!animated) {
      titleOpacity.setValue(1);
      titleTranslate.setValue(0);
      return;
    }

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
    ]).start();
  }, [animated, titleOpacity, titleTranslate]);

  return (
    <Animated.Text
      style={[
        helloTextStyles.title,
        {
          fontSize: titleSize,
          opacity: titleOpacity,
          transform: [{ translateY: titleTranslate }],
        },
      ]}
    >
      Start your trip
    </Animated.Text>
  );
}
