import React from "react";
import { useDispatch } from "react-redux";
import QuantityNav from "../pages/QunatityNav";
import { setOpenState } from "../store/modalOpen";
import styles from "../styles/modal.module.css";

export default function Modal({ open }: ModalProps) {
  const dispatch = useDispatch();
  return open ? (
    <div className={styles.modalOverlay}>
      <div className={styles.modalHeader}>
        <span className={styles.title}>Add to cart</span>
        <button
          className={styles.closeButton}
          onClick={() => dispatch(setOpenState(false))}
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
              />
              <QuantityNav />
            </span>
          </span>
        </div>
        <div className={styles.totalPrice}>
          <label>Price : 110</label>
        </div>
      </div>
      <div className={styles.modalFooter}>
        <button>Buy</button>
        <button>Cancel</button>
      </div>
    </div>
  ) : null;
}

interface ModalProps {
  open: boolean;
}
