import React, { useState } from "react";
import { useDispatch } from "react-redux";
import QuantityNav from "./QunatityNav";
import { setOpenState } from "../store/modalOpen";
import styles from "../styles/modal.module.css";

export default function Modal({ open }: ModalProps) {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  return open ? (
    <div className={styles.modalOverlay}>
      <div className={styles.modalHeader}>
        <span className={styles.title}>Add to cart</span>
        <button
          className={styles.closeButton}
          onClick={() => {
            setTotal(0);
            dispatch(setOpenState(null));
          }}
        >
          X
        </button>
      </div>
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
      <div className={styles.modalFooter}>
        <button>Buy</button>
        <button
          onClick={() => {
            setTotal(0);
            dispatch(setOpenState(null));
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  ) : null;
}

interface ModalProps {
  open: {
    name: string;
    quantity: number;
    price: number;
  } | null;
}
