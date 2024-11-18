import React from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity, SafeAreaView } from "react-native";
// components
import { IconSymbol } from "../ui/IconSymbol/IconSymbol";
import { ThemedText } from "../ThemedText/ThemedText";
// styles
import { useThemeColor } from "@/hooks/useThemeColor";
import { styles } from "./styles";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}
function Header({ title, showBackButton = false }: HeaderProps) {
  const backgroundColor = useThemeColor({}, "header");
  const iconColor = useThemeColor({}, "headerIcon");
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={[{ backgroundColor }, styles.headerContainer]}>
      {showBackButton && (
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton} testID="headerBack">
          <IconSymbol size={24} color={iconColor} name="chevron.backward" />
        </TouchableOpacity>
      )}
      <ThemedText type="subtitle" style={styles.title} testID="headerTitle">
        {title}
      </ThemedText>
    </SafeAreaView>
  );
}


export default Header;
