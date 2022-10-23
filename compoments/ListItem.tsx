import React from "react";

import styles from "../styles/home.module.css";
import ProductItem from "./ProductItem";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ListItem({ products }: any) {
  return products.map(
    (product: {
      id: string;
      name: string;
      url_images: string;
      price: number;
    }) => (
      <div className={styles.product_item} key={"prod" + product.name}>
        <ProductItem product={product} />
      </div>
    )
  );
}
