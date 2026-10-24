import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
  },
  backgroundBlur: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.22)",
  },
  panel: {
    overflow: "hidden",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 18,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 7,
    marginBottom: 18,
  },
  backText: {
    color: "#CF928A",
    fontSize: 18,
    fontWeight: "600",
  },
  title: {
    color: "#F5F1D1",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 2,
  },
  titleLine: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#F5F1D1",
    marginBottom: 17,
  },
  scrollWrapper: {
    flex: 1,
    width: "100%",
    position: "relative",
  },
  panelScroll: {
    flex: 1,
    width: "100%",
  },
  panelScrollContent: {
    paddingBottom: 12,
    paddingRight: 10,
  },
  scrollTrack: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 3,
    borderRadius: 10,
    backgroundColor: "rgba(245, 241, 209, 0.12)",
  },
  scrollThumb: {
    width: 3,
    borderRadius: 10,
    backgroundColor: "#CF928A",
  },
  sectionTitle: {
    color: "#F5F1D1",
    fontSize: 12,
    fontWeight: "700",
    fontStyle: "italic",
    marginBottom: 13,
    marginTop: 1,
  },
  paragraph: {
    color: "#F5F1D1",
    fontSize: 12,
    lineHeight: 15,
    fontStyle: "italic",
    marginBottom: 17,
  },
});

export default styles;
