import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  header: {
    width: "100%",
    position: "relative",
  },
  heroGradient: {
    position: "absolute",
    left: 0,
    zIndex: 0,
  },
  heroContent: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1,
  },
  lokiContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 1,
  },
  speechBubble: {
    backgroundColor: "rgba(207, 146, 138, 1)",
    justifyContent: "center",
    flexShrink: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
  },
  speechTitle: {
    color: "#F5F1D1",
    fontStyle: "italic",
    fontWeight: "500",
  },
  speechText: {
    color: "#F5F1D1",
    fontStyle: "italic",
    fontWeight: "500",
  },
  profileButton: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#F5F1D1",
    backgroundColor: "rgba(245, 241, 209, 0.05)",
  },
  currentTrip: {
    width: "100%",
    position: "relative",
    borderColor: "#405D38",
  },
  tripTextContainer: {
    flex: 1,
    paddingRight: 45,
  },
  currentTripTitle: {
    color: "#F5F1D1",
    fontWeight: "500",
  },
  currentTripDate: {
    color: "rgba(207, 146, 138, 0.75)",
  },
  peopleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  peopleText: {
    color: "#F5F1D1",
  },
  editButton: {
    position: "absolute",
  },
  nextButton: {
    position: "absolute",
    backgroundColor: "#CF928A",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 2,
  },
  myTrips: {
    color: "#CF928A",
    fontWeight: "600",
  },
  addTripText: {
    color: "#F5F1D1",
    fontStyle: "italic",
  },
  cards: {
    paddingBottom: 12,
  },
});

export default styles;
