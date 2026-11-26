
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
  },

  blur: {
    ...StyleSheet.absoluteFill,
  },

  backdrop: {
    ...StyleSheet.absoluteFill,
  },

  panel: {
    position: "absolute",
    top: 26,
    right: 26,
    overflow: "hidden",

    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
  },

  gradient: {
    flex: 1,
    paddingHorizontal: 9,
    paddingTop: 34,
    paddingBottom: 34,
  },

  itemsContainer: {
    width: "100%",
    flexShrink: 1,
  },

  itemsContent: {
    width: "100%",
  },

  menuItem: {
    minHeight: 65,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(243,240,213,0.22)",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",

    gap: 7,
    paddingHorizontal: 5,
  },

  itemText: {
    color: "#F3F0D5",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "right",
    flexShrink: 1,
  },

  logoutButton: {
    position: "absolute",
    bottom: 34,
    left: 10,
    right: 10,

    height: 40,
    borderWidth: 2,
    borderColor: "#D99A94",
    borderRadius: 25,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
  },

  logoutText: {
    color: "#F3F0D5",
    fontSize: 16,
  },
});

export default styles;
