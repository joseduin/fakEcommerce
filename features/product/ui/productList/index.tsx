import React, { useEffect } from "react";
import { FlatList } from "react-native";
// redux
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { fetchProducts } from "@/features/product/state/product.thunk";
import { getProductsState } from "../../state/product.slice";
// types
import { RequestStatus } from "@/redux/state.type";
// components
import ProductItem, { ProductSeparator } from "../productItem";
import Loading from "@/components/Loading/Loading";

function ProductList() {
  const dispatch = useAppDispatch();
  const { data, page, status, itemsPerPage, total } =
    useAppSelector(getProductsState);

  useEffect(() => {
    dispatch(fetchProducts(itemsPerPage));
  }, [dispatch]);

  const loadMore = () => {
    if (status !== RequestStatus.PENDING && data.length < total) {
      dispatch(fetchProducts(page * itemsPerPage));
    }
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ProductItem key={item.id} product={item} />}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ItemSeparatorComponent={() => <ProductSeparator />}
      ListFooterComponent={() =>
        status === RequestStatus.PENDING ? <Loading size="large" /> : null
      }
    />
  );
}

export default ProductList;
