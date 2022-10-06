import React from "react";
import { buttonDownClicked, buttonUpClicked } from "../utils/quantitynav";
import styles from "../styles/quantity.module.css";

export default function QuantityNav({ update, price }: QuantityPropsType) {
  return (
    <div className={styles.quantityNav}>
      <div
        className={styles.quantityButton + " " + styles.quantityUp}
        onClick={() => buttonUpClicked(update, price)}
      >
        +
      </div>
      <div
        className={styles.quantityButton + " " + styles.quantityDown}
        onClick={() => buttonDownClicked(update, price)}
      >
        -
      </div>
    </div>
  );
}

interface QuantityPropsType {
  update: React.Dispatch<React.SetStateAction<number>>;
  price: number;
}
