import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// methods request
import { getRequest } from "@/redux/network/Network";
// types
import { IProductApi } from "@/features/product/type/product";

export const fetchProducts = createAsyncThunk(
  "products",
  async (limit: number, thunkAPI) => {
    try {
      const response = await getRequest(`products?limit=${limit}`);
      if (response.status !== 200) {
        return thunkAPI.rejectWithValue(
          new AxiosError(`Request error: ${response.status} code`)
        );
      }

      return response.data as IProductApi[];
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
