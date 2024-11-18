import React from "react";
import { Image } from "react-native";
import { Link } from "expo-router";
// styles
import { styles } from "./styles";
import { Colors } from "@/constants/Colors";
// types
import { IProduct } from "@/features/product/type/product";
// libs
import { Currency } from "@/lib/currency";
// components
import { ThemedView } from "@/components/ThemedView/ThemedView";
import { ThemedText } from "@/components/ThemedText/ThemedText";
import Rating from "../rating";

export function ProductSeparator() {
  return (
    <ThemedView style={styles.separatorContainer}>
      <ThemedView style={styles.separator} />
    </ThemedView>
  );
}

interface ProductItemProps {
  product: IProduct;
}
function ProductItem({ product }: ProductItemProps) {
  return (
    <Link href={{ pathname: "/product/[id]", params: { id: product.id } }}>
      <ThemedView style={styles.container} testID="containerProduct">
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          testID="productImage"
        />
        <ThemedView style={styles.body}>
          <ThemedText type="subtitle" numberOfLines={2} testID="productTitle">
            {product.title}
          </ThemedText>
          <ThemedView style={styles.labelsContainer}>
            <ThemedView style={styles.ratingContainer}>
              <ThemedText
                testID="labelRate"
                type="small"
                style={styles.ratingCount}
              >{`(${product.rating.rate})`}</ThemedText>
              <Rating rate={product.rating.rate} />
            </ThemedView>
            <ThemedText
              testID="productPrice"
              type="defaultSemiBold"
              lightColor={Colors.light.price}
              darkColor={Colors.dark.price}
            >
              {Currency.format({ value: product.price })}
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </Link>
  );
}

export default ProductItem;
