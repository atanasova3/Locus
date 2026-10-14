import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  screen: {
    flex: 1,
  },
  header: {
    position: "absolute",
    alignItems: "flex-start",
    zIndex: 5,
  },
  titleContainer: {
    position: "absolute",
    alignItems: "center",
    zIndex: 4,
  },
  title: {
    color: "#CF928A",
    fontWeight: "500",
    textAlign: "center",
  },
  bottomSection: {
    position: "absolute",
    alignItems: "center",
  },
  codeContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 3,
    borderColor: "#CF928A",
    backgroundColor: "rgba(207,146,138,0.3)",
    color: "#F5F1D1",
    fontWeight: "600",
    padding: 0,
    textAlign: "center",
    textAlignVertical: "center",
  },
  verifyButton: {
    width: "100%",
    alignSelf: "center",
    borderWidth: 3,
    borderColor: "#CF928A",
    backgroundColor: "rgba(207,146,138,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  verifyText: {
    color: "#fffde8",
  },
  register: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
  },
  smallText: {
    color: "#fffde8",
  },
  registerText: {
    color: "#fffde8",
    fontWeight: "600",
  },
});

export default styles;
