export interface SignupData {
  id: string;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phone: undefined;
  meta: any;
}

export interface UserInfo {
  email: string;
  password: string;
}
