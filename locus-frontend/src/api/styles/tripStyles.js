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
  content: {
    paddingBottom: 12,
  },
  pinkPanel: {
    borderWidth: 2,
    borderColor: "rgba(207, 146, 138, 0.3)",
    backgroundColor: "rgba(180,130,120,0.12)",
    alignItems: "flex-start",
  },
  buttonsRow: {
    flexDirection: "row",
  },
  actionButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: "rgba(207, 146, 138, 0.3)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "rgba(180,130,120,0.12)",
  },
  actionText: {
    color: "#F3DCC3",
    fontStyle: "italic",
  },
  assistantBox: {
    borderWidth: 2,
    borderColor: "rgba(207, 146, 138, 0.3)",
    position: "relative",
    backgroundColor: "rgba(180,130,120,0.10)",
  },
  message: {
    width: "100%",
    borderWidth: 2,
    borderColor: "rgba(207, 146, 138, 0.3)",
  },
  messageText: {
    color: "#F5F1D1",
    fontStyle: "italic",
  },
  mascot: {
    position: "absolute",
    zIndex: 3,
  },
  mascotImage: {
    width: 120,
    height: 150,
  },
  inputContainer: {
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(230,166,151,0.5)",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: "#F5E5D5",
    fontStyle: "italic",
  },
  sendButton: {
    color: "#D99A91",
  },
});

export default styles;
