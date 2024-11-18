import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  small: {
    fontSize: 14,
    lineHeight: 20,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});

export const StyleType = {
  default: styles.default,
  title: styles.title,
  defaultSemiBold: styles.defaultSemiBold,
  subtitle: styles.subtitle,
  small: styles.small,
  link: styles.link,
};
