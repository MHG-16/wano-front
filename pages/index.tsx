import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import HomePage from "../compoments/HomePage";
import Modal from "../compoments/Modal";
import { selectOpenState, setOpenState } from "../store/modalOpen";
import { wrapper } from "../store/store";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Home({ products }: any) {
  const openState = useSelector(selectOpenState);
  return (
    <>
      <HomePage products={products} />
      <Modal open={openState} />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    // we can set the initial state from here
    // we are setting to false but you can run your custom logic here
    await store.dispatch(setOpenState(false));
    const req = await axios.get("http://localhost:5000/product/list");
    const products = req.data.message.products;
    return {
      props: {
        openState: false,
        products,
      },
    };
  }
);
