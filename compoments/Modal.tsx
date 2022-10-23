import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";

import QuantityNav from "./QunatityNav";
import { setOpenState } from "../store/modalOpen";
import styles from "../styles/modalAddContent.module.css";
import { ModalProps, save } from "../utils/modal";
import ModalLayout from "./ModalLayout";

export default function Modal({ open, title, buttonFooterTxt }: ModalProps) {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  return open && typeof open === "object" ? (
    <ModalLayout
      title={title}
      buttonFooterTxt={buttonFooterTxt}
      onClose={() => onClose(dispatch, setTotal)}
      onCloseSave={() => onCloseSave(open, setTotal, dispatch)}
    >
      <div className={styles.modalContent}>
        <div className={styles.modalField}>
          <span>
            <label htmlFor="quantity">Quantity:</label>
            <span className={styles.inputQuantity}>
              <input
                type="number"
                id="quantity-input"
                min={0}
                defaultValue="0"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  console.log(open);
                  setTotal(e.target.valueAsNumber * open.price);
                }}
              />
              <QuantityNav update={setTotal} price={open.price} />
            </span>
          </span>
        </div>
        <div className={styles.totalPrice}>
          <label>Price : {total}</label>
        </div>
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
