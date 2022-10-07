import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";

import { setOpenState } from "../store/modalOpen";
import { ModalProps, save } from "../utils/modal";
import ModalLayout from "./ModalLayout";

export default function ModalPanier({ open }: ModalProps) {
  const dispatch = useDispatch();
  const [, setTotal] = useState(0);
  return open && typeof open === "number" ? (
    <ModalLayout
      title="My chart"
      buttonFooterTxt="save without view novoice"
      onClose={() => onClose(dispatch, setTotal)}
      onCloseSave={() => onCloseSave(open, setTotal, dispatch)}
    ></ModalLayout>
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
