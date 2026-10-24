import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignItems: "center",
    zIndex: 100,
  },
  menu: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});

export default styles;
