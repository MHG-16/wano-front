import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

export interface PanierState {
  panierState: {
    name: string;
    quantity: number;
    price: number;
  }[];
}

// initial State
const initialState: PanierState = {
  panierState: [],
};

export const PanierState = createSlice({
  name: "panier",
  initialState,
  reducers: {
    // Action to set the authentication status
    setPanierState(state, action) {
      state.panierState = [...state.panierState, action.payload];
    },
  },
});

export const { setPanierState } = PanierState.actions;

export const selectPanierState = (state: AppState) => state.panier.panierState;

export default PanierState.reducer;
