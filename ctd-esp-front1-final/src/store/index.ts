import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "./modules/rootReducer";

import { CharactersState } from "./modules/characters/types";
import { Character, GetCharacters } from "types/characters";

export type CharactersActionType =
  | "CHANGE_DATA"
  | "FAVORITE_CHARACTER"
  | "DISFAVOR_CHARACTER";

export type Action = {
  payload?: {
    data?: GetCharacters;
    character?: Character;
    search?: string;
  };
  type: CharactersActionType;
};

export interface IState {
  characters: CharactersState;
}

export const store = configureStore({
  reducer: combineReducers,
});

export type AppDispatch = typeof store.dispatch;
