import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../common/userApi";

export const fetchUserAsyncAddToRedux = createAsyncThunk(
  "user/fetchUserAsyncAddToRedux",
  async () => {
    const response = await userApi.get(`?page=1`);
    const data = await response.data.data;

    return data;
  }
);

const initialState = {
  user: {},
  isLoading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: (state, action) => {
      state.user = action.payload;
    },
    getUser: (state) => {
      return state.user;
    },
  },
  extraReducers: {
    [fetchUserAsyncAddToRedux.pending]: (state) => {
      return { ...state };
    },
    [fetchUserAsyncAddToRedux.fulfilled]: (state, action) => {
      console.log("data Fetched successfully");
      return { ...state, user: action.payload, isLoading: false };
    },
    [fetchUserAsyncAddToRedux.rejected]: () => {
      console.log("Something went wrong ");
    },
  },
});

export const { removeUser, getUser } = userSlice.actions;
export default userSlice.reducer;
