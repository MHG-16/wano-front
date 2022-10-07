/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "../styles/modal.module.css";

export default function ModalLayout({
  title,
  buttonFooterTxt,
  onClose,
  onCloseSave,
  children,
}: any) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalHeader}>
        <span className={styles.title}>{title}</span>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
      {children}
      <div className={styles.modalFooter}>
        <button onClick={onCloseSave}>{buttonFooterTxt}</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
