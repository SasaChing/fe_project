import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterReducer";
import tabReducer from "./slice/tabReducer";
import gridReducer from "./slice/gridReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tabs: tabReducer,
    grid: gridReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
