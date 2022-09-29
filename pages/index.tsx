import React from "react";
import HomePage from "../compoments/HomePage";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Home({ connected }: any) {
  return <HomePage connected={connected}></HomePage>;
}
