import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthState } from "../store/authSlice";
import { onLogout } from "../service/login";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Header = () => {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
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
          <a href="#"> About</a>
          {!authState ? (
            <a onClick={() => (window.location.href = "/login")}>login</a>
          ) : (
            <Link href="/">
              <a onClick={() => onLogout(authState, dispatch)}> Logout</a>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
