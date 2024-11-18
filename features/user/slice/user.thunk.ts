import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// methods request
import { getRequest } from "@/redux/network/Network";
// types
import { IUserApi } from "@/features/user/type/user";

export const fetchUsers = createAsyncThunk(
  "users",
  async ({ name, password }: { name: string; password: string }, thunkAPI) => {
    try {
      const response = await getRequest(`users`);
      if (response.status !== 200) {
        return thunkAPI.rejectWithValue(
          new AxiosError(`Request error: ${response.status} code`)
        );
      }

      const users = response.data as IUserApi[];
      const user = users.find((user) => user.username === name && user.password === password);

      if (!user) {
        return thunkAPI.rejectWithValue(new AxiosError("User not found"));
      }

      return user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
