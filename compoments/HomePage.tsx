/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Head from "next/head";

import Header from "./Header";
import ListItem from "./ListItem";
import style from "../styles/home.module.css";

export default function HomePage({ products }: any) {
  return (
    <>
      <Head>
        <title>Wano</title>
        <meta name="description" content="Wano home page" />
        <link rel="icon" href="/index.jpeg" />
      </Head>
      <Header />
      <main>
        <div className={style.container}>
          <ListItem products={products} />
        </div>
        {/*<MonPanier />*/}
      </main>
    </>
  );
}
