import React from "react";
import Head from "next/head";

import Header from "./Header";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HomePage({ children, connected }: any) {
  return (
    <>
      <Head>
        <title>Wano</title>
        <meta name="description" content="Wano home page" />
        <link rel="icon" href="/index.jpeg" />
      </Head>
      {connected ? <Header connected={true} /> : <Header connected={false} />}
      <main>{children}</main>
    </>
  );
}
