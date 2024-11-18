import React from "react";
import { Image } from "react-native";
// redux
import { useAppSelector } from "@/redux/hook";
import { getProductById } from "../../state/product.slice";
// components
import ParallaxScrollView from "@/components/ParallaxScrollView/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText/ThemedText";
import { ThemedView } from "@/components/ThemedView/ThemedView";
import Rating from "../rating";
// styles
import { styles } from "./styles";
import { Colors } from "@/constants/Colors";
// libs
import { Currency } from "@/lib/currency";

interface ProductDetailProps {
  id: number;
}
function ProductDetail({ id }: ProductDetailProps) {
  const product = useAppSelector((state) => getProductById(state, id))!;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          testID="productImage"
          source={{ uri: product.image }}
          style={styles.image}
        />
      }
    >
      <ThemedText testID="productTitle" type="title">
        {product.title}
      </ThemedText>

      <ThemedText testID="productCategory" type="link">
        {product.category}
      </ThemedText>

      <ThemedView style={styles.labelsContainer}>
        <ThemedView style={styles.ratingWrap}>
          <ThemedView style={styles.ratingContainer}>
            <ThemedText
              testID="productRate"
              type="small"
              style={styles.ratingCount}
            >{`(${product.rating.rate})`}</ThemedText>
            <Rating rate={product.rating.rate} />
          </ThemedView>
          <ThemedText testID="productRatingCount">{`By ${product.rating.count} users`}</ThemedText>
        </ThemedView>

        <ThemedText
          testID="productPrice"
          type="subtitle"
          lightColor={Colors.light.price}
          darkColor={Colors.dark.price}
        >
          {Currency.format({ value: product.price })}
        </ThemedText>
      </ThemedView>

      <ThemedText testID="productDescription">{product.description}</ThemedText>
    </ParallaxScrollView>
  );
}

export default ProductDetail;
