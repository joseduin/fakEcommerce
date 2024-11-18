import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  image: {
    width: width,
    height: 250,
    aspectRatio: (width / 250),
    objectFit: "contain",
  },
  ratingWrap: {
    flexDirection: "column",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  ratingCount: {
    marginRight: 6,
  },
  labelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingBottom: 16,
  },
});
