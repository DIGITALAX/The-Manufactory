import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./reducers/modalSlice";

const reducer = combineReducers({
  modalReducer,
});

export const store = configureStore({
  reducer: {
    app: reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
