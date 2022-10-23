import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faPencil,
  faSave,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { ModalProps } from "../utils/modal";
import { ProductItemType, ProductTableType } from "../types/monPanier";

import { save } from "../utils/modal";
import { setOpenState } from "../store/modalOpen";
import ModalLayout from "./ModalLayout";
import { selectPanierState } from "../store/panier";
import styles from "../styles/table.module.css";
import {
  cancelButtonClicked,
  editButtonClicked,
  onChange,
  removeProduct,
  saveButtonClicked,
} from "../utils/monPanier";

export default function ModalPanier({ open }: ModalProps) {
  const dispatch = useDispatch();
  const products = useSelector(selectPanierState) as {
    name: string;
    price: number;
    quantity: number;
  }[];
  return open && typeof open === "number" ? (
    <ModalLayout
      title="My chart"
      buttonFooterTxt="save without view novoice"
      onClose={() => dispatch(setOpenState(null))}
      onCloseSave={() => save(open, dispatch)}
    >
      <div>
        <TableOfProducts products={products} />
      </div>
    </ModalLayout>
  ) : null;
}

function TableOfProducts({ products }: ProductTableType) {
  return (
    <table className={styles.tableOfProducts}>
      <thead>
        <tr>
          <th>name</th>
          <th>price</th>
          <th>quantity</th>
          <th>total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map(
          (
            product: { name: string; price: number; quantity: number },
            index: number
          ) => (
            <ProductItem
              product={product}
              index={index}
              key={product.name + index}
            />
          )
        )}
      </tbody>
      <tfoot>
        <td colSpan={2}>Total price</td>
        <td id="Total">
          {products.reduce((a, b) => a + b.quantity * b.price, 0)}
        </td>
      </tfoot>
    </table>
  );
}

function ProductItem({ product, index }: ProductItemType) {
  const [isEnabled, setEnabled] = useState(true);
  const [oldItem, setPrice] = useState({ price: 0, quantity: 0 });

  return (
    <tr className={"product-container"} id={"line " + index}>
      <td className={styles.productField}>{product.name}</td>
      <td className={styles.productField}>{product.price}</td>
      <td className={styles.productField}>
        <input
          className={styles.disabled}
          type="number"
          id={"quantityOfProduct" + index}
          defaultValue={product.quantity}
          disabled={isEnabled}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e, product.price, index)
          }
        />
      </td>
      <td className={styles.totalField} id={"Totalprice" + index}>
        {product.price * product.quantity}
      </td>
      <td
        style={{ display: "flex", padding: "15px", justifyContent: "center" }}
      >
        <button
          className={styles.buttonEnabled}
          onClick={() => {
            editButtonClicked(setEnabled, index, setPrice, product.price);
          }}
          id={"editButton" + index}
        >
          <FontAwesomeIcon icon={faPencil} className={styles.icon} />
        </button>
        <button
          className={styles.saveButton}
          id={"saveButton" + index}
          onClick={() => saveButtonClicked(setEnabled, index)}
        >
          <FontAwesomeIcon icon={faSave} className={styles.icon} />
        </button>
        <button
          className={styles.deleteButton}
          id={"deleteButton" + index}
          onClick={() => removeProduct(index)}
        >
          <FontAwesomeIcon icon={faTrash} className={styles.icon} />
        </button>
        <button
          id={"cancelButton" + index}
          className={styles.cancelButton}
          onClick={() => cancelButtonClicked(index, setEnabled, oldItem)}
        >
          <FontAwesomeIcon icon={faClose} className={styles.icon} />
        </button>
      </td>
    </tr>
  );
}
