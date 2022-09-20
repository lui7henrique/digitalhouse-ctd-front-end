import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "./modules/rootReducer";

import { CharactersState } from "./modules/characters/types";
import { FavoritesState } from "./modules/favorites/types";
import { Character } from "types/characters";

export type FavoritesActionType = "FAVORITE_CHARACTER" | "DISFAVOR_CHARACTER";
export type CharactersActionType = "CHANGE_CHARACTERS";

export type Action = {
  payload?: {
    character?: Character;
  };
};

export type FavoritesAction = Action & {
  type: FavoritesActionType;
};

export type CharactersAction = Action & {
  type: CharactersActionType;
};

export interface IState {
  characters: CharactersState;
  favorites: FavoritesState;
}

export const store = configureStore({
  reducer: combineReducers,
});
