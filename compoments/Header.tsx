import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Header = ({ connected }: any) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.leftPartie}>W</div>
        <div className={styles.rightPartie}>Wano</div>
      </div>
      <nav>
        <div className={styles.myLinks} id={styles.myLinks}>
          <a className={styles.active} href="#">
            Home
          </a>
          <a href="#"> Registrati</a>
          <a href="#"> Servizio Wano</a>
          {connected == false ? (
            <Link href="/login">
              <a href="#"> login</a>
            </Link>
          ) : (
            <Link href="/">
              <a> Logout</a>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
