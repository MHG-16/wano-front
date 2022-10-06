import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import HomePage from "../compoments/HomePage";
import Modal from "../compoments/Modal";
import { selectOpenState, setOpenState } from "../store/modalOpen";
import { wrapper } from "../store/store";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Home({ products, error }: any) {
  const openState = useSelector(selectOpenState);
  return !error ? (
    <>
      <HomePage products={products} />
      <Modal open={openState} />
    </>
  ) : (
    <div>Error</div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    // we can set the initial state from here
    // we are setting to false but you can run your custom logic here
    await store.dispatch(setOpenState(false));
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
        openState: false,
        products,
        error: products === null,
      },
    };
  }
);
