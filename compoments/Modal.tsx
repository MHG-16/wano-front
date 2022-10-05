import React from "react";
import { useDispatch } from "react-redux";
import { setOpenState } from "../store/modalOpen";
import styles from "../styles/modal.module.css";

export default function Modal({ open }: ModalProps) {
  const dispatch = useDispatch();
  return open ? (
    <div className={styles.modalOverlay}>
      <button onClick={() => dispatch(setOpenState(false))}>close</button>
    </div>
  ) : null;
}

interface ModalProps {
  open: boolean;
}
