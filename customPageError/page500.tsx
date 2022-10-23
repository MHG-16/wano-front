import { useRouter } from "next/router";
import React from "react";

import styles from "../styles/500.module.css";

export default function Page500() {
  const router = useRouter();
  return (
    <div className={styles.screen} onMouseMove={(e) => moveEyes(e)}>
      <div className={styles.container}>
        <div className="codeHttp">
          <span className={styles.numero}>5</span>
          <div className={styles.eye + " " + "eye"}></div>
          <div className={styles.eye + " " + "eye"}></div>
        </div>

        <h2>Page not working</h2>
        <p>
          Sorry! Echec to connected to server.{" "}
          <i> We{"'"} re looking to see what happened.</i>
        </p>
        <button onClick={() => router.reload()}>Refresch this page</button>
      </div>
    </div>
  );
}

function moveEyes(event) {
  const eyes = document.getElementsByClassName(
    "eye"
  ) as HTMLCollectionOf<HTMLElement>;
  const x = eyes[0].offsetLeft + 50;
  const y = eyes[0].offsetTop + 50;
  const rad = Math.atan2(event.pageX - x, event.pageY - y);
  const rot = rad * (180 / Math.PI) * -1 + 180;
  for (const eye of eyes) {
    eye.style.transform = "rotate(" + rot + "deg)";
  }
}
