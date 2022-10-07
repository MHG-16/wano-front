import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";

import { setOpenState } from "../store/modalOpen";
import { ModalProps, save } from "../utils/modal";
import ModalLayout from "./ModalLayout";
import { selectPanierState } from "../store/panier";

export default function ModalPanier({ open }: ModalProps) {
  const dispatch = useDispatch();
  const [, setTotal] = useState(0);
  const products = useSelector(selectPanierState);
  return open && typeof open === "number" ? (
    <ModalLayout
      title="My chart"
      buttonFooterTxt="save without view novoice"
      onClose={() => onClose(dispatch, setTotal)}
      onCloseSave={() => onCloseSave(open, setTotal, dispatch)}
    >
      <div>
        {products.map((product, i) => (
          <div key={i}>
            {" "}
            <span>{product.name}</span>{" "}
          </div>
        ))}
      </div>
    </ModalLayout>
  ) : null;
}

function onClose(
  dispatch: Dispatch,
  setTotal: React.Dispatch<React.SetStateAction<number>>
) {
  setTotal(0);
  dispatch(setOpenState(null));
}

function onCloseSave(
  open: { name: string; price: number },
  setTotal: React.Dispatch<React.SetStateAction<number>>,
  dispatch: Dispatch
) {
  setTotal(0);
  save(open, dispatch);
}
