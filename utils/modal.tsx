/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "redux";
import { setOpenState } from "../store/modalOpen";
import { setPanierState } from "../store/panier";

export interface ModalProps {
  open: {
    name: string;
    price: number;
    id_product: string;
  } | null;
  title: string;
  buttonFooterTxt: string;
}

interface dataType {
  name: string;
  price: number;
  id_product: string;
}

export function save(data: dataType, dispatch: Dispatch) {
  const QuantityInput = document.getElementById(
    "quantity-input"
  ) as HTMLInputElement;
  const quantity = QuantityInput.valueAsNumber;
  console.log(data);
  const dataSaved = {
    id_product: data.id_product,
    name: data.name,
    quantity: quantity,
    price: data.price,
  };
  dispatch(setPanierState(dataSaved));
  dispatch(setOpenState(null));
}
