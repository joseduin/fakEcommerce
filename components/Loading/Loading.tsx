import React from "react";
import { ActivityIndicator, type ActivityIndicatorProps } from "react-native";
// hooks
import { useThemeColor } from "@/hooks/useThemeColor";

function Loading({ ...props }: Omit<ActivityIndicatorProps, "color">) {
  const color = useThemeColor({}, "indicator");

  return <ActivityIndicator color={color} {...props} />;
}

export default Loading;
