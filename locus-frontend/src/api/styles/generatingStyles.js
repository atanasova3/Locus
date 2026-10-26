import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#996C66",
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignSelf: "center",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  illustrationContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  illustration: {
    resizeMode: "contain",
  },
  message: {
    color: "#D5B4A6",
    textAlign: "center",
    fontWeight: "600",
    includeFontPadding: false,
  },
  dots: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    borderRadius: 99,
    backgroundColor: "#F0DFC1",
  },
});

export default styles;
