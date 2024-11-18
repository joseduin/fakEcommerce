import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const padding$ = 16;

export const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: padding$,
  },
  image: {
    width: 100,
    height: 100,
    minWidth: 100,
    minHeight: 100,
    aspectRatio: 1,
    borderRadius: 8,
  },
  body: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: 8,
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
    alignItems: "flex-end",
  },
  separatorContainer: {
    width: width,
  },
  separator: {
    height: 0.5,
    width: width - (padding$ * 2),
    transform: [{ translateX: padding$ }],
    backgroundColor: "#E0E0E0",
  },
});
