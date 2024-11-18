import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
// fetch
import { fetchSignIn } from "./auth.thunk";
import { RequestStatus, RootState } from "@/redux/state.type";
// types
import { ISignInApi } from "@/features/auth/type/auth";

interface IAuthState {
  token: string;
  error: { message: string } | undefined;
  status: RequestStatus;
}

const initialState: IAuthState = {
  token: "",
  error: undefined,
  status: RequestStatus.IDLE,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    destroySession: (state) => {
      state.token = "";
      state.error = undefined;
      state.status = RequestStatus.IDLE;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IAuthState>) => {
    builder.addCase(fetchSignIn.pending, (nextState) => {
      nextState.token = "";
      nextState.error = undefined;
      nextState.status = RequestStatus.PENDING;
    });
    builder.addCase(
      fetchSignIn.fulfilled,
      (nextState, action: PayloadAction<ISignInApi>) => {
        nextState.token = action.payload.token;
        nextState.status = RequestStatus.SUCCESSFULL;
      }
    );
    builder.addCase(
      fetchSignIn.rejected,
      (nextState, action: PayloadAction<any>) => {
        nextState.error = {
          message: action.payload.response.data,
        };
        nextState.status = RequestStatus.FAILED;
      }
    );
  },
});

export const { destroySession } = authSlice.actions;

export const getToken = (state: RootState) => state.auth.token;
export const getAuthError = (state: RootState) => state.auth.error;

export default authSlice.reducer;
