import React from "react";
import { Text, type TextProps } from "react-native";
// styles
import { StyleType } from "./styles";
import { useThemeColor } from "@/hooks/useThemeColor";

type TextTypes =
  | "default"
  | "title"
  | "defaultSemiBold"
  | "subtitle"
  | "small"
  | "link";
export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: TextTypes;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <Text style={[{ color }, StyleType[type] || {}, style]} {...rest} />;
}


