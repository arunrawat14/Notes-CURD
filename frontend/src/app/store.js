import { configureStore } from "@reduxjs/toolkit";
import todoUser from "../features/todoSclice";

export const store = configureStore({
  reducer: {
    app: todoUser,
  },
});