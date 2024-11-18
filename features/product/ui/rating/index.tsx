import React, { useEffect, useState } from "react";
// components
import { ThemedView } from "@/components/ThemedView/ThemedView";
import { IconSymbol, IconSymbolName } from "@/components/ui/IconSymbol/IconSymbol";
// styles
import { styles } from "./styles";
import { useThemeColor } from "@/hooks/useThemeColor";

type StarType = "empty" | "full" | "half";
const starIcons = {
  empty: "star.slash",
  half: "star.lefthalf.fill",
  full: "star.fill",
};
interface StarProps {
  star: StarType;
}
function Star({ star }: StarProps) {
  const color = useThemeColor({ }, 'start');

  return (
    <IconSymbol
      size={16}
      color={color}
      name={starIcons[star] as IconSymbolName}
    />
  );
}

interface RatingProps {
  rate: number;
}
function Rating({ rate }: RatingProps) {
  const [stars, setStars] = useState<StarType[]>([]);

  useEffect(() => {
    setStars(roundRatingToHalf(rate));
  }, [rate]);

  function roundRatingToHalf(value: number): StarType[] {
    const stars: StarType[] = ["empty", "empty", "empty", "empty", "empty"];

    for (let i = 1; i <= 5; i += 1) {
      if (value >= i) {
        stars[i - 1] = "full";
      } else if (value > i - 1 && value < i) {
        stars[i - 1] = "half";
      }
    }

    return stars;
  }

  return (
    <ThemedView style={styles.container} testID="containerRating">
      {stars.map((star, index) => (
        <Star key={index} star={star} />
      ))}
    </ThemedView>
  );
}

export default Rating;
