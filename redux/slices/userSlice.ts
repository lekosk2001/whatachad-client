import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signup } from "../actions/user";

// initalState 타입 정의
export interface UserState {
  name: string;
  email: string;
  signupLoading: boolean;
  signupDone: boolean;
  signupError: any;
}

// initalState 생성
const initialState: UserState = {
  name: "",
  email: "",
  signupLoading: false, // 회원가입 시도중
  signupDone: false,
  signupError: null,
};

// 슬라이스생성
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signup.pending, (state) => {
        state.signupLoading = true;
        state.signupDone = false;
        state.signupError = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.signupLoading = false;
        state.signupDone = true;
        state.email = action.payload.email;
      })
      .addCase(signup.rejected, (state, action) => {
        state.signupLoading = false;
        state.signupError = action.payload;
      });
  },
});

// 슬라이스를 export 해준다.
export default userSlice;
