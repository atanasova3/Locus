
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  modal: {
    position: "relative",
    overflow: "hidden",
    paddingHorizontal: 18,
    paddingTop: 10,
  },

  decorations: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },

  content: {
    flex: 1,
    zIndex: 5,
  },

  close: {
    position: "absolute",
    top: 5,
    right: 12,
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 20,
  },

  closeText: {
    color: "#E99A9A",
    fontSize: 26,
    fontWeight: "300",
  },

  step: {
    fontSize: 36,
    fontStyle: "italic",
    fontWeight: "500",
    color: "#CF928A",
    marginTop: 0,
  },

  underline: {
    width: 183,
    height: 2,
    backgroundColor: "#dc9997",
    marginTop: 2,
    marginBottom: 15,
  },

  question: {
    color: "#CF928A",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
  },

  options: {
    flex: 1,
    justifyContent: "flex-start",
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 14,
    marginBottom: 0,
  },

  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 2,
    borderColor: "#CF928A",
    borderRadius: 3,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  checkboxChecked: {
    backgroundColor: "rgba(233, 154, 154, 0.25)",
  },

  checkmark: {
    color: "#FFF4D9",
    fontSize: 15,
    lineHeight: 15,
    fontWeight: "400",
  },

  optionText: {
    color: "#CF928A",
    fontSize: 18,
    fontWeight: "500",
  },

  nextButton: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 10,
    height: 40,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#dc9997",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(207, 146, 138, 0.3)",
  },
  nextText: {
    color: "#fff4d9",
    fontSize: 20,
    fontWeight: "500",
  },
});

export default styles;
