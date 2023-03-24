import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { signup } from "@/redux/actions/user";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { SignupData } from "@/types/users";

type State = {};

type AppDispatch = ThunkDispatch<State, any, AnyAction>;

interface SignupState extends SignupData {
  confirmPassword: string;
  passwordMatch: boolean;
}

const initialState: SignupState = {
  id: "",
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  phone: undefined,
  meta: {
    ROLE: "ROLE_CUSTOMER",
  },
  passwordMatch: true,
};

const reducer = (state: SignupData, action: any) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

const Signup = () => {
  const dispatch: AppDispatch = useDispatch();
  const [state, dispatchForm] = useReducer(reducer, initialState);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (state.password !== state.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    dispatch(
      signup({
        id: state.id,
        email: state.email,
        password: state.password,
        confirmPassword: state.confirmPassword,
        name: state.name,
        phone: state.phone,
        meta: {
          ROLE: "ROLE_CUSTOMER",
        },
      })
    );
  };

  const handleChange = (e: any) => {
    dispatchForm({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div>
      <h1>Sign Up to WaC</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            name="id"
            value={state.id}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={state.email}
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
            value={state.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={state.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={state.phone}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">확인</button>
      </form>
    </div>
  );
};

export default Signup;
