import { Dispatch } from "redux";
import { api } from "services/api";
import { Action } from "store";
import { GetCharacters } from "types/characters";
import { CharactersState } from "./types";

export const fetchInitialCharacters = async (dispatch: Dispatch<Action>) => {
  const { data } = await api.get<GetCharacters>("/character");

  dispatch({
    type: "CHANGE_DATA",
    payload: {
      data,
    },
  });
};

export const handlePreviousPage = async (
  dispatch: Dispatch<Action>,
  state: CharactersState
) => {
  const next = state?.data?.info.prev;
  const page = next?.split("=")[1];

  const { data } = await api.get("/character", {
    params: {
      page,
    },
  });

  dispatch({
    type: "CHANGE_DATA",
    payload: {
      data,
    },
  });
};
export const handleNextPage = async (
  dispatch: Dispatch<Action>,
  state: CharactersState
) => {
  const next = state?.data?.info.next;
  const page = next?.split("=")[1];

  const { data } = await api.get("/character", {
    params: {
      page,
    },
  });

  dispatch({
    type: "CHANGE_DATA",
    payload: {
      data,
    },
  });
};

export const CHANGE_DATA = (state: CharactersState, action: Action) => {
  const newState: CharactersState = {
    ...state,
    isLoading: false,
    data: action.payload?.data || null,
  };

  return newState;
};

export const FAVORITE_CHARACTER = (state: CharactersState, action: Action) => {
  const oldFavorites = state?.favorites ?? [];
  const newFavorites = action.payload?.character
    ? [...oldFavorites, action.payload?.character]
    : [];

  const newState: CharactersState = {
    ...state,
    isLoading: false,
    favorites: newFavorites,
  };

  return newState;
};

export const DISFAVOR_CHARACTER = (state: CharactersState, action: Action) => {
  const character = action.payload?.character;
  const newFavorites = state?.favorites?.filter(
    (favorite) => favorite.id !== character?.id
  );

  const newState: CharactersState = {
    ...state,
    isLoading: false,
    favorites: newFavorites,
  };

  return newState;
};
