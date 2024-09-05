import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
