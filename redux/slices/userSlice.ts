import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, signup } from "../actions/user";

// initalState 타입 정의
export interface UserState {
  me: any;
  name: string;
  email: string;
  signupLoading: boolean;
  signupDone: boolean;
  signupError: string | null;
  loginLoading: boolean;
  loginDone: boolean;
  loginError: string | null;
}

// initalState 생성
const initialState: UserState = {
  me: null,
  name: "",
  email: "",
  signupLoading: false, // 회원가입 시도중
  signupDone: false,
  signupError: null,
  loginLoading: false, // 로그인 시도중
  loginDone: false,
  loginError: null,
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
        if (typeof action.payload === "string") {
          state.signupError = action.payload;
        } else {
          state.signupError = "An error occurred";
        }
      })
      .addCase(login.pending, (state) => {
        state.loginLoading = true;
        state.loginDone = false;
        state.loginError = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.loginDone = true;
        state.me = action.payload;

        // state.name = action.payload.name;
        // state.email = action.payload.email;
      })
      .addCase(login.rejected, (state, action) => {
        state.loginLoading = false;
        if (typeof action.payload === "string") {
          state.loginError = action.payload;
        } else {
          state.loginError = "An error occurred";
        }
      });
  },
});

// 슬라이스를 export 해준다.
export default userSlice;
