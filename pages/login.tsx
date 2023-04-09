import { login } from "@/redux/actions/user";
import { ReducerStates } from "@/redux/store";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface LoginState {
  id: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const loginLoading = useSelector(
    (state: ReducerStates) => state.user.loginLoading
  );
  const loginError = useSelector(
    (state: ReducerStates) => state.user.loginError
  );
  const loginDone = useSelector((state: ReducerStates) => state.user.loginDone);

  const [loginState, setLoginState] = useState<LoginState>({
    id: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginState((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id, password } = loginState;
    dispatch(login({ id, password }));
  };

  if (loginDone) {
    router.push("/");
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            name="id"
            value={loginState.id}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={loginState.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit" disabled={loginLoading}>
          {loginLoading ? "Logging in..." : "Login"}
        </button>
        {loginError && <div>{loginError}</div>}
      </form>
    </div>
  );
};

export default Login;
