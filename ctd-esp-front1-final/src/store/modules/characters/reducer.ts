import { CharactersState } from "./types";
import { Reducer } from "@reduxjs/toolkit";
import { Action, CharactersActionType } from "store";
import { CHANGE_DATA, DISFAVOR_CHARACTER, FAVORITE_CHARACTER } from "./actions";

const INITIAL_STATE: CharactersState = {
  data: null,
  isLoading: false,
  favorites: null,
};

export const characters: Reducer<CharactersState> = (
  state: CharactersState,
  action: Action
) => {
  const { type } = action;

  const actions: Record<CharactersActionType, () => CharactersState> = {
    CHANGE_DATA: () => CHANGE_DATA(state, action),
    FAVORITE_CHARACTER: () => FAVORITE_CHARACTER(state, action),
    DISFAVOR_CHARACTER: () => DISFAVOR_CHARACTER(state, action),
  };

  const fn = actions[type];

  return typeof fn === "function" ? fn() : INITIAL_STATE;
};
