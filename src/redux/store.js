import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./features/themeSlice";
import apiSlice from "./features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    theme: themeSlice,
  },

  devTools: process.env.NODE_ENV !== "production",

  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
