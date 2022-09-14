import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { charactersReducer } from "config/reducers/characters";

import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";

const rootReducer = combineReducers({ characters: charactersReducer });

export type IRootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
