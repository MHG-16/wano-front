import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { setOpenState } from "../store/modalOpen";

import styles from "../styles/MonPanier.module.css";

export default function MonPanier() {
  const dispatch = useDispatch();
  return (
    <button className={styles.btn} onClick={() => dispatch(setOpenState(1))}>
      <span data-text="My cart">
        <label> My cart </label>
        <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
      </span>
    </button>
  );
}
