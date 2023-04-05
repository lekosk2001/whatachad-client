import {
  configureStore,
  Reducer,
  AnyAction,
  Action,
  CombinedState,
} from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { combineReducers, applyMiddleware } from "redux";
import userSlice, { UserState } from "./slices/userSlice";
import calendarSlice, { CalendartState } from "./slices/calendarSlice";
import workoutSlice, { WorkoutState } from "./slices/workoutSlice";
import budgetSlice, { BudgetState } from "./slices/budgetSlice";

// ### 리듀서 State 타입 정의
export interface ReducerStates {
  user: UserState;
  calendar: CalendartState;
  workout: WorkoutState;
  budget: BudgetState;
}
// ### 루트 리듀서 생성
const rootReducer = (
  state: CombinedState<ReducerStates> = {
    user: userSlice.reducer(undefined, {} as AnyAction),
    calendar: calendarSlice.reducer(undefined, {} as AnyAction),
    workout: workoutSlice.reducer(undefined, {} as AnyAction),
    budget: budgetSlice.reducer(undefined, {} as AnyAction),
  },
  action: AnyAction
): CombinedState<ReducerStates> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user: userSlice.reducer,
        calendar: calendarSlice.reducer,
        workout: workoutSlice.reducer,
        budget: budgetSlice.reducer,
      });
      return combineReducer(state, action);
    }
  }
};

// store 생성 함수
const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === "development",
  });

  return store;
};

// Create next-redux-wrapper's wrapper
export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === "development",
});

// export default wrapper;
