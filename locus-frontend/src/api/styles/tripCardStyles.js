import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    overflow: "hidden",
    borderColor: "#CF928A",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  infoContainer: {
    backgroundColor: "rgba(207, 146, 138, 0.70)",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 6,
  },
  title: {
    flex: 1,
    color: "#F5F1D1",
    fontWeight: "700",
  },
  rating: {
    color: "#F5F1D1",
    fontWeight: "500",
  },
  location: {
    color: "#F5F1D1",
    fontStyle: "italic",
  },
});

export default styles;
