import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface QuickFormState {
  title: string;
  description: string;
  isPublished: boolean;
  category: string;
}

const initialState: QuickFormState = {
  title: "",
  description: "",
  isPublished: false,
  category: "",
};

export const quickFormSlice = createSlice({
  name: "quickForm",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setIsPublished: (state, action: PayloadAction<boolean>) => {
      state.isPublished = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    // Optional generic setter
    setField: (
      state,
      action: PayloadAction<{ field: keyof QuickFormState; value: never }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const {
  setTitle,
  setDescription,
  setIsPublished,
  setCategory,
  setField,
} = quickFormSlice.actions;
export default quickFormSlice.reducer;
