import React, { useEffect, useRef } from "react";
import {
  Animated,
  View,
  useWindowDimensions,
} from "react-native";
import startLogoStyles from "../styles/startLogoStyles";
import { getHelloLayoutMetrics } from "../utils/helloLayout";
import { getStartLogoLayoutMetrics } from "../utils/startLogoLayout";

const styles = startLogoStyles;

export default function StartLogo() {
  const { width, height } = useWindowDimensions();
  const { headerHorizontalPadding } = getHelloLayoutMetrics(width, height);
  const { logoWidth, logoHeight } = getStartLogoLayoutMetrics(
    width - headerHorizontalPadding * 2,
    height
  );

  // ==================================================
  // UI
  // ==================================================

  return (
    <View
      style={[
        styles.header,
        {
          width: "100%",
        },
      ]}
    >

      <Animated.Image
        source={require("./photos/Logoo.png")}
        resizeMode="contain"
        accessibilityLabel="Locus"
        style={[
          styles.logo,
          {
            width: logoWidth,
            height: logoHeight,
          },
        ]}
      />
    </View>
  );
}
