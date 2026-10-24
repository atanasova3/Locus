import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    position: "relative",
    overflow: "hidden",
  },
  close: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  closeText: {
    color: "#e99a9a",
    fontWeight: "300",
    lineHeight: 30,
  },
  title: {
    color: "#e09b9b",
    fontWeight: "600",
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#e0a0a0",
  },
  empty: {
    color: "#d0c9b9",
    fontStyle: "italic",
  },
  cards: {
    flexGrow: 1,
  },
});

export default styles;
