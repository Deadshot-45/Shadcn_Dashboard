import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ReviewerState {
  reviewer: string;
}

const initialState: ReviewerState = {
  reviewer: "",
};

export const reviewerSlice = createSlice({
  name: "reviewer",
  initialState,
  reducers: {
    setReviewer: (state, action: PayloadAction<string>) => {
      state.reviewer = action.payload;
    },
  },
});

export const { setReviewer } = reviewerSlice.actions;
export default reviewerSlice.reducer;
