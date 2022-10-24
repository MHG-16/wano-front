import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

export interface PanierState {
  panierState: {
    name: string;
    quantity: number;
    price: number;
    id_product: string;
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
    updatePanierState(state, action) {
      const quantityInputElement = document.getElementById(
        "quantityOfProduct" + action.payload
      ) as HTMLInputElement;
      state.panierState = state.panierState.map((item, index) =>
        action.payload === index
          ? { ...item, quantity: quantityInputElement.valueAsNumber }
          : item
      );
    },
  },
});

export const { setPanierState, updatePanierState } = PanierState.actions;
export const selectPanierState = (state: AppState) => state.panier.panierState;

export default PanierState.reducer;
