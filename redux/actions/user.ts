import { LoginData, SignupData } from "@/types/users";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/api";

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

// 회원가입
export const signup = createAsyncThunk(
  "user/signup",
  async (data: SignupData, thunkAPI) => {
    try {
      const response = await axios.post("/signUp", data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// 로그인
export const login = createAsyncThunk(
  "user/login",
  async (data: LoginData, thunkAPI) => {
    try {
      const response = await axios.post("/login", data);
      const tokens: Tokens = response.data;

      localStorage.setItem("accessToken", tokens.accessToken);
      localStorage.setItem("refreshToken", tokens.refreshToken);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
