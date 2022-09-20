import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "./modules/rootReducer";

import { CharactersState } from "./modules/characters/types";
import { FavoritesState } from "./modules/favorites/types";
import { Character } from "types/characters";

export type ActionType = "FAVORITE_CHARACTER" | "DISFAVOR_CHARACTER";

export type Action = {
  type: ActionType;
  payload?: {
    character?: Character;
  };
};

export interface IState {
  characters: CharactersState;
  favorites: FavoritesState;
}

export const store = configureStore({
  reducer: combineReducers,
});
