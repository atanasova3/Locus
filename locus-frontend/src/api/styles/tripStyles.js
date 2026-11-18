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
  timelinePressable: {
    width: "100%",
  },
  timelineCloseButton: {
    position: "absolute",
    zIndex: 20,
  },
  closeText: {
    color: "#e99a9a",
    fontWeight: "300",
    lineHeight: 30,
  },
  content: {
    flex: 1,
    paddingBottom: 12,
  },
  pinkPanel: {
    borderWidth: 2,
    borderColor: "rgba(207, 146, 138, 0.3)",
    backgroundColor: "rgba(180,130,120,0.12)",
    alignItems: "flex-start",
    overflow: "hidden",
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
    width: "100%",
    overflow: "hidden",
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
    zIndex: 5,
  },
  input: {
    flex: 1,
    color: "#F5E5D5",
    fontStyle: "italic",
  },
  sendButton: {
    color: "#D99A91",
  },
  assistantPressable: {
    width: "100%",
  },
  backButton: {
    position: "absolute",
    zIndex: 10,
  },
  chatScroll: {
    flex: 1,
  },
  chatBubble: {
    maxWidth: "85%",
    backgroundColor: "rgba(205,146,138,0.35)",
    borderWidth: 1.5,
    borderColor: "#CF928A",
  },
  welcomeChatBubble: {
    alignSelf: "flex-start",
  },
  userChatBubble: {
    alignSelf: "flex-end",
  },
  assistantChatBubble: {
    alignSelf: "flex-start",
  },
  chatText: {
    color: "#F5E8CF",
    fontStyle: "italic",
  },
  quickActions: {
    position: "absolute",
    zIndex: 3,
  },
  quickAction: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    borderWidth: 1.5,
    borderColor: "#F0C5B5",
    backgroundColor: "rgba(255,255,255,0.06)",
  },
  quickActionActive: {
    borderColor: "#F5E8CF",
    backgroundColor: "rgba(207,146,138,0.38)",
  },
  quickActionText: {
    color: "#E8C8B5",
  },
  quickActionTextActive: {
    color: "#F5E8CF",
  },
  voiceContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  voiceOrb: {
    alignItems: "center",
    justifyContent: "center",
  },
  voiceWave: {
    position: "absolute",
    borderColor: "#CF928A",
  },
  voiceWaveLeft: {
    borderLeftWidth: 2.5,
    borderTopWidth: 2.5,
    borderBottomWidth: 2.5,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  voiceWaveRight: {
    borderRightWidth: 2.5,
    borderTopWidth: 2.5,
    borderBottomWidth: 2.5,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  microphoneCircle: {
    backgroundColor: "#B98079",
    alignItems: "center",
    justifyContent: "center",
  },
  speakingText: {
    color: "#F5F1D1",
    fontStyle: "italic",
  },
});

export default styles;
