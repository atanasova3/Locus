import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 36,
    flexShrink: 0,
    position: "relative",
    alignItems: "center",
  },
  row: {
    width: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  pointContainer: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
  },
  line: {
    position: "absolute",
    left: "50%",
    width: 3,
    marginLeft: -1.5,
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1,
  },
  dash: {
    width: 3,
    height: 14,
    borderRadius: 2,
    backgroundColor: "#CF928A",
  },
  inactiveCircle: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#CF928A",
    opacity: 0.8,
    zIndex: 5,
  },
  activeOuter: {
    width: 23,
    height: 23,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#CF928A",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    zIndex: 5,
  },
  activeInner: {
    width: 13,
    height: 13,
    borderRadius: 12,
    backgroundColor: "#CF928A",
  },
});

export default styles;
