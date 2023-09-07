import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";

export const store = configureStore({
  reducer: {
    chatReducer: chatSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;