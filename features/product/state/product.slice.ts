import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
// fetch
import { fetchProducts } from "./product.thunk";
import { RequestStatus, RootState } from "@/redux/state.type";
// types
import { IProduct, IProductApi } from "@/features/product/type/product";
// mapper
import { ProductMapper } from "@/features/product/mapper";
// constants
import { Pagination } from "@/constants/Pagination";

interface IProductsState {
  data: IProduct[];
  page: number;
  total: number;
  itemsPerPage: number;
  status: RequestStatus;
}

const initialState: IProductsState = {
  data: [],
  page: 1,
  total: Number.MAX_SAFE_INTEGER,
  itemsPerPage: Pagination.ItemsPerPage,
  status: RequestStatus.IDLE,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetProducts: (state) => {
      state.data = [];
      state.page = 1;
      state.total = Number.MAX_SAFE_INTEGER;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IProductsState>) => {
    builder.addCase(fetchProducts.pending, (nextState) => {
      nextState.status = RequestStatus.PENDING;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (nextState, action: PayloadAction<IProductApi[]>) => {
        const products = action.payload;

        const lastDataItem = nextState.data.at(-1);
        const lastProductItem = products.at(-1);
        if (
          lastDataItem &&
          lastProductItem &&
          lastDataItem.id === lastProductItem.id
        ) {
          nextState.total = nextState.data.length;
        }
        nextState.data = ProductMapper.filterExitence(nextState.data, products);
        nextState.page = nextState.data.length / nextState.itemsPerPage + 1;
        nextState.status = RequestStatus.SUCCESSFULL;
      }
    );
    builder.addCase(fetchProducts.rejected, (nextState) => {
      nextState.status = RequestStatus.FAILED;
    });
  },
});

export const { resetProducts } = productSlice.actions;

export const getProductsState = (state: RootState) => state.products;
export const getProductById = (state: RootState, id: number) => state.products.data.find((product) => product.id === id);

export default productSlice.reducer;
