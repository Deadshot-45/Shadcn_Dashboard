import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface OutlineState {
  checkedRows: Record<number, boolean>;
  selectAll: boolean;
}

const initialState: OutlineState = {
  checkedRows: {},
  selectAll: false,
};

export const outlineSlice = createSlice({
  name: "outline",
  initialState,
  reducers: {
    toggleRowCheckbox: (state, action: PayloadAction<number>) => {
      const rowId = action.payload;
      state.checkedRows[rowId] = !state.checkedRows[rowId];
    },
    setRowCheckbox: (
      state,
      action: PayloadAction<{ id: number; checked: boolean }>
    ) => {
      state.checkedRows[action.payload.id] = action.payload.checked;
    },
    setSelectAll: (state, action: PayloadAction<boolean>) => {
      state.selectAll = action.payload;
    },
    resetCheckedRows: (state) => {
      state.checkedRows = {};
      state.selectAll = false;
    },
  },
});

export const {
  toggleRowCheckbox,
  setRowCheckbox,
  setSelectAll,
  resetCheckedRows,
} = outlineSlice.actions;
export default outlineSlice.reducer;
