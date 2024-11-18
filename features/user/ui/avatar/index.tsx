import React from "react";
import { View } from "react-native";
// styles
import { styles } from "./styles";
// components
import { ThemedText } from "@/components/ThemedText/ThemedText";

interface AvatarProps {
  name: string;
  lastName: string;
}
function Avatar({ name, lastName }: AvatarProps) {
  const initials = `${name.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

  return (
    <View style={styles.avatar}>
      <ThemedText testID="labelInitials" type="title" style={styles.text}>{initials}</ThemedText>
    </View>
  );
}

export default Avatar;
