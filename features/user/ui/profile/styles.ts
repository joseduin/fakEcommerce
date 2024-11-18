import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexDirection: "column",
    alignItems: "center",
  },
  body: {
    flex: 1,
    width: "100%",
    marginTop: 36,
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  card: {
    width: "100%",
    padding: 16,
    borderRadius: 16,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
