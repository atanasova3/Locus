import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  header: {
    position: "absolute",
    alignItems: "flex-start",
    zIndex: 1,
  },
  goContainer: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.18)",
  },
  arrows: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(137, 154, 92, 0.75),", // Adds the semi-transparent green circle
  },
  buttonText: {
    fontFamily: "Inter",
    fontWeight: "300",
    fontStyle: "italic",
    color: "#F5F1D1",
  },
});

export default styles;
