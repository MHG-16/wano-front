/* eslint-disable @typescript-eslint/no-explicit-any */
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";

import { setOpenState } from "../store/modalOpen";
import styles from "../styles/home.module.css";

import More from "./More";

export default function ProductItem({ product }: any) {
  const dispatch = useDispatch();

  const productItem = (
    <>
      <div className={styles.product_img}>
        <img src={product.url_images} alt={product.name} />
      </div>
      <div className={styles.product_content}>
        <span className={styles.product_name}>{product.name}</span>
        <span className={styles.product_price}>
          {product.price} <small> DT </small>
        </span>
        <div className={styles.btn_group}>
          <div className={styles.btn_container}>
            <a
              href="#"
              onClick={() =>
                dispatch(
                  setOpenState({
                    name: product.name,
                    price: product.price,
                  })
                )
              }
            >
              <button>
                <label className={styles.txt_content}>Add to cart</label>
                <FontAwesomeIcon icon={faCartPlus} className={styles.icon} />
              </button>
            </a>
          </div>
          <div className={styles.btn_container}>
            <a href="#">
              <More />
            </a>
          </div>
        </div>
      </div>
    </>
  );
  return productItem;
}
