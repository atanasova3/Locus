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
  container: {
    flex: 1,
  },
  contentWrapper: {
    flexGrow: 1,
  },
  header: {
    alignItems: "flex-start",
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontWeight: "500",
    color: "#CF928A",
  },
  content: {
    width: "100%",
  },
  label: {
    color: "#F5F1D1",
  },
  input: {
    width: "100%",
    borderWidth: 3,
    borderColor: "#CF928A",
    backgroundColor: "rgba(207,146,138,0.3)",
    color: "#F5F1D1",
  },
  passwordBox: {
    width: "100%",
    borderWidth: 3,
    borderColor: "#CF928A",
    backgroundColor: "rgba(207,146,138,0.3)",
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    color: "#F5F1D1",
    padding: 0,
  },
  forgot: {
    color: "#F5F1D1",
  },
  actionButton: {
    width: "100%",
    borderWidth: 3,
    borderColor: "#CF928A",
    backgroundColor: "rgba(207,146,138,0.3)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  buttonText: {
    color: "#fffde8",
  },
  or: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    flex: 1,
    backgroundColor: "#c99591",
  },
  orText: {
    color: "#c99591",
    fontStyle: "italic",
  },
  login: {
    flexDirection: "row",
    alignItems: "center",
  },
  register: {
    flexDirection: "row",
    alignItems: "center",
  },
  smallText: {
    color: "#fffde8",
  },
  loginText: {
    color: "#fffde8",
    fontWeight: "600",
  },
  registerText: {
    color: "#fffde8",
    fontWeight: "600",
  },
});

export default styles;
