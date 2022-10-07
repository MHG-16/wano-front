/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "redux";
import { setOpenState } from "../store/modalOpen";
import { setPanierState } from "../store/panier";

export interface ModalProps {
  open: {
    name: string;
    price: number;
  } | null;
  title: string;
  buttonFooterTxt: string;
}

interface dataType {
  name: string;
  price: number;
}

export function save(data: dataType, dispatch: Dispatch) {
  const QuantityInput = document.getElementById(
    "quantity-input"
  ) as HTMLInputElement;
  const quantity = QuantityInput.valueAsNumber;
  const dataSaved = {
    name: data.name,
    quantity: quantity,
    price: data.price,
  };
  dispatch(setPanierState(dataSaved));
  dispatch(setOpenState(null));
}
