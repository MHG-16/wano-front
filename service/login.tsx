import axios from "axios";

import { setAuthState } from "../store/authSlice";

export async function onSubmitLogin(data, router, authState, dispatch) {
  const userName = data.email;
  const password = data.password;
  const token = Buffer.from(`${userName}:${password}`, "utf-8").toString(
    "base64"
  );
  await axios
    .post("http://localhost:5000/login", data, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
    .then((response) => {
      sessionStorage.setItem("idSession", response.data.message.access_token);
      authState ? dispatch(setAuthState(false)) : dispatch(setAuthState(true));

      router.push({
        pathname: "/",
        query: {
          connected: true,
        },
      });
    });
}

export async function onLogout(authState, dispatch) {
  const acess_token = sessionStorage.getItem("idSession") as string;
  await axios
    .post("http://localhost:5000/logout", "", {
      headers: {
        Authorization: acess_token,
      },
    })
    .then(() => {
      sessionStorage.removeItem("idSession");
      authState ? dispatch(setAuthState(false)) : dispatch(setAuthState(true));
    })
    .finally(() => {
      console.info("done");
    });
}
