import React from "react";
import { Pressable, type PressableProps } from "react-native";
// components
import { ThemedText } from "../ThemedText/ThemedText";
// styles
import { styles } from "./styles";
import { useThemeColor } from "@/hooks/useThemeColor";

type ButtonProps = PressableProps & {
  label: string;
};
function Button({ label, ...props }: ButtonProps) {
  const backgroundColor = useThemeColor({}, "button");
  const buttonColor = useThemeColor({}, "buttonColor");

  return (
    <Pressable {...props} style={[{ backgroundColor }, styles.button]}>
      <ThemedText lightColor={buttonColor} darkColor={buttonColor} type="defaultSemiBold">
        {label}
      </ThemedText>
    </Pressable>
  );
}

export default Button;
