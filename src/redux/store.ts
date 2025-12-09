import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import outlineReducer from "./outlineSlice";
import quickFormReducer from "./quickFormSlice";
import reviewerReducer from "./reviewer";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    outline: outlineReducer,
    quickForm: quickFormReducer,
    reviewer: reviewerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
