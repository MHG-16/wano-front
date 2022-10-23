import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { authSlice } from "./authSlice";
import { OpenState } from "./modalOpen";
import { PanierState } from "./panier";

export const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [OpenState.name]: OpenState.reducer,
      [PanierState.name]: PanierState.reducer,
    },
    devTools: true,
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store["dispatch"];
export type AppState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(makeStore, { debug: true });
