import { Reducer } from "@reduxjs/toolkit";
import { Action, ActionType } from "store";
import { FavoritesState } from "./types";

const INITIAL_STATE: FavoritesState = {
  items: [],
  isLoading: false,
};

export const favorites: Reducer<FavoritesState> = (
  state: FavoritesState,
  action: Action
) => {
  const { payload, type } = action;

  const actions: Record<ActionType, () => FavoritesState> = {
    DISFAVOR_CHARACTER: () => {
      const newState = {
        ...state,
        isLoading: false,
        items:
          state?.items.filter(
            (character) => character.id !== payload?.character?.id
          ) ?? [],
      };

      return newState;
    },
    FAVORITE_CHARACTER: () => {
      const newItems =
        state?.items && payload?.character
          ? [...state.items, payload?.character]
          : [];

      const newState = {
        ...state,
        isLoading: false,
        items: newItems ? newItems : [],
      };

      return newState;
    },
  };

  const fn = actions[type];

  return fn ? fn() : INITIAL_STATE;
};
