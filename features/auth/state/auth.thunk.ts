import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// methods request
import { postRequest } from "@/redux/network/Network";
// types
import { ISignInApi } from "@/features/auth/type/auth";

export const fetchSignIn = createAsyncThunk(
  "signIn",
  async ({ name, password }: { name: string; password: string }, thunkAPI) => {
    try {
      const body = {
        username: name,
        password: password,
      };
      const response = await postRequest(`auth/login`, body);
      if (response.status === 401) {
        return thunkAPI.rejectWithValue(
          new AxiosError(response.data)
        );
      }

      if (response.status !== 200) {
        return thunkAPI.rejectWithValue(
          new AxiosError(`Request error: ${response.status} code`)
        );
      }
      return response.data as ISignInApi;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
