import React from "react";
import { useLocalSearchParams } from "expo-router";
// components
import ProductDetail from "@/features/product/ui/productDetail";
import Header from "@/components/Header/Header";

function ProductDetailPage() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <>
      <Header title="Product detail" showBackButton />
      <ProductDetail id={Number(id)} />
    </>
  );
}

export default ProductDetailPage;
