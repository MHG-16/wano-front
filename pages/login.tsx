/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable max-len */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faChevronRight,
  faChevronCircleLeft,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import Link from "next/link";

import styles from "../styles/login.module.css";
import { useRouter } from "next/router";
import { selectAuthState, setAuthState } from "../store/authSlice";
import { wrapper } from "../store/store";
import { onSubmitLogin } from "../service/login";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const router = useRouter();
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const showPassword = () => {
    const inputPassword = document.getElementById(
      "password"
    ) as HTMLInputElement;
    if (inputPassword.type === "password") {
      inputPassword.type = "text";
    } else {
      inputPassword.type = "password";
    }
  };

  const onSubmit = async (data) =>
    onSubmitLogin(data, router, authState, dispatch);

  return (
    <div className={styles.containerLogin}>
      <div className={styles.screen}>
        <div className={styles.formContent}>
          <div className={styles.HomeButtonContainer}>
            <Link href="/">
              <a>
                <FontAwesomeIcon
                  icon={faChevronCircleLeft}
                  className={styles.iconHome}
                />{" "}
                <label>Return to home Page</label>
              </a>
            </Link>
          </div>
          <form
            className={styles.login}
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
          >
            <div className={styles.FormField}>
              <FontAwesomeIcon icon={faUser} className={styles.iconInput} />
              <input
                type="email"
                id="email"
                required
                placeholder="Email"
                className={styles.input}
                {...register("email")}
              />
            </div>
            <div className={styles.FormField}>
              <FontAwesomeIcon icon={faLock} className={styles.iconInput} />
              <input
                type="password"
                id="password"
                required
                placeholder="password"
                className={styles.input}
                {...register("password")}
              />
              <span onClick={showPassword}>
                {" "}
                <FontAwesomeIcon icon={faEye} className={styles.EyeIcon} />
              </span>
            </div>
            <div>
              <span className={styles.forgetTxt}>
                Forgot your password ? Click{" "}
                <a href="#" className={styles.forgetLien}>
                  <strong>here</strong>
                </a>
              </span>
            </div>
            <div className={styles.buttonSubmit}>
              <div className={styles.bgBtn}></div>
              <button type="submit" className={styles.btnSubmit}>
                <span className={styles.btnlabel}>Login in</span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styles.btnSubIcon}
                />
              </button>
            </div>
            <div className={styles.textCreate}>
              <span className={styles.forgetTxt}>
                Prima volta su Wano ?
                <a href="#" className={styles.forgetLien}>
                  <strong>Registrati</strong>
                </a>
              </span>
            </div>
          </form>
          <div className={styles.footerLogin}>
            <div className={styles.socialMedia}>
              <h3>Log in via</h3>
              <div className={styles.socialMediaIcons}>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={styles.iconMedia}
                />
                <FontAwesomeIcon icon={faGoogle} className={styles.iconMedia} />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={styles.iconMedia}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.screen__background}>
          <span
            className={
              styles.screen__background__shape +
              " " +
              styles.screen__background__shape4
            }
          ></span>
          <span
            className={
              styles.screen__background__shape +
              " " +
              styles.screen__background__shape3
            }
          ></span>
          <span
            className={
              styles.screen__background__shape +
              " " +
              styles.screen__background__shape2
            }
          ></span>
          <span
            className={
              styles.screen__background__shape +
              " " +
              styles.screen__background__shape1
            }
          ></span>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    // we can set the initial state from here
    // we are setting to false but you can run your custom logic here
    await store.dispatch(setAuthState(false));
    return {
      props: {
        authState: false,
      },
    };
  }
);

export default Login;
