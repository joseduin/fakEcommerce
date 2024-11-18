import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
// fetch
import { fetchUsers } from "./user.thunk";
import { RequestStatus, RootState } from "@/redux/state.type";
// types
import { IUser, IUserApi } from "@/features/user/type/user";
// mapper
import { UserMapper } from "@/features/user/mapper";

interface IUserState {
  data: IUser;
  status: RequestStatus;
}

const initialState: IUserState = {
  data: {} as IUser,
  status: RequestStatus.IDLE,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IUserState>) => {
    builder.addCase(fetchUsers.pending, (nextState) => {
      nextState.data = {} as IUser;
      nextState.status = RequestStatus.PENDING;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (nextState, action: PayloadAction<IUserApi>) => {
        nextState.data = UserMapper.toParse(action.payload);
        nextState.status = RequestStatus.SUCCESSFULL;
      }
    );
    builder.addCase(fetchUsers.rejected, (nextState) => {
      nextState.status = RequestStatus.FAILED;
    });
  },
});

export const getAuthUser = (state: RootState) => state.user.data;

export default userSlice.reducer;
