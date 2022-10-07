/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

export interface ModalOpenState {
  openState:
    | {
        name: string;
        price: number;
      }
    | any;
}

// initial State
const initialState: ModalOpenState = {
  openState: null,
};

export const OpenState = createSlice({
  name: "open",
  initialState,
  reducers: {
    // Action to set the authentication status
    setOpenState(state, action) {
      state.openState = action.payload;
    },
  },
});

export const { setOpenState } = OpenState.actions;

export const selectOpenState = (state: AppState) => state.open.openState;

export default OpenState.reducer;
