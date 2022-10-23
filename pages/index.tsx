import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import ModalPanier from "../compoments/addCart";

import HomePage from "../compoments/HomePage";
import Modal from "../compoments/Modal";
import Page500 from "../customPageError/page500";
import { selectOpenState } from "../store/modalOpen";
import { wrapper } from "../store/store";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Home({ products, error }: any) {
  const openState = useSelector(selectOpenState);
  return !error ? (
    <>
      <HomePage products={products} />
      <Modal open={openState} title="Add to cart" buttonFooterTxt="buy" />
      <ModalPanier open={openState} title={""} buttonFooterTxt={""} />
    </>
  ) : (
    <Page500 />
  );
}

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  // we can set the initial state from here
  // we are setting to false but you can run your custom logic here
  const products = await axios
    .get("http://localhost:5000/product/list")
    .then((response) => {
      return response.data.message.products;
    })
    .catch(() => {
      console.log("Failed to get product list");
      return null;
    });
  return {
    props: {
      openState: 0,
      products,
      error: products === null,
    },
  };
});
