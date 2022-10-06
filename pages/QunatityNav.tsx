import React from "react";
import { buttonDownClicked, buttonUpClicked } from "../utils/quantitynav";
import styles from "../styles/quantity.module.css";

export default function QuantityNav() {
  return (
    <div className={styles.quantityNav}>
      <div
        className={styles.quantityButton + " " + styles.quantityUp}
        onClick={() => buttonUpClicked()}
      >
        +
      </div>
      <div
        className={styles.quantityButton + " " + styles.quantityDown}
        onClick={() => buttonDownClicked()}
      >
        -
      </div>
    </div>
  );
}
