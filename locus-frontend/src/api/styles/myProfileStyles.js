import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalRoot: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.20)",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.20)",
  },
  outsideTap: {
    ...StyleSheet.absoluteFillObject,
  },
  safeArea: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  profilePanel: {
    alignSelf: "center",
    overflow: "hidden",
  },
  panelScroll: {
    flex: 1,
    width: "100%",
  },
  panelScrollContent: {
    flexGrow: 1,
    paddingBottom: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingHorizontal: 3,
  },
  headerLine: {
    height: StyleSheet.hairlineWidth,
    flex: 1,
    maxWidth: 50,
    backgroundColor: "#CF928A",
  },
  headerTitle: {
    color: "#CF928A",
    fontWeight: "600",
    letterSpacing: 0.3,
  },
  closeButton: {
    position: "absolute",
    right: -5,
    top: -5,
    padding: 5,
    zIndex: 2,
  },
  identityCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "rgba(245,241,209,0.85)",
  },
  avatar: {
    borderWidth: 1.5,
    borderColor: "#F5F1D1",
    alignItems: "center",
    justifyContent: "center",
  },
  identityText: {
    flex: 1,
    minWidth: 0,
    justifyContent: "center",
  },
  profileName: {
    color: "#CF928A",
    fontWeight: "600",
    lineHeight: 22,
  },
  email: {
    color: "#F5F1D1",
    opacity: 0.9,
    marginTop: 2,
  },
  section: {
    paddingTop: 5,
  },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionLine: {
    height: StyleSheet.hairlineWidth,
    flex: 1,
    backgroundColor: "rgba(245,241,209,0.45)",
  },
  sectionTitle: {
    color: "#F5F1D1",
    fontWeight: "500",
    letterSpacing: 0.4,
  },
  settingsRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  lastRow: {
    marginBottom: 0,
  },
  rowLabel: {
    color: "#F5F1D1",
    flex: 1,
    paddingRight: 6,
    fontWeight: "500",
  },
  strongLabel: {
    fontWeight: "600",
  },
  rowRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    maxWidth: "48%",
    gap: 4,
  },
  switchTrack: {
    justifyContent: "center",
    alignSelf: "center",
    marginHorizontal: 2,
  },
  switchThumb: {
    backgroundColor: "#F5F1D1",
  },
  rowValue: {
    color: "rgba(245,241,209,0.70)",
    textAlign: "right",
    fontWeight: "600",
  },
});

export default styles;
