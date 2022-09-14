import { Action, ActionType, State } from "config/store/types";
import { Dispatch } from "redux";
import { api } from "services/api";
import { GetCharacters } from "types/characters";

export const getInitialCharacters = async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: "CHANGE_LOADING",
    payload: {
      isLoading: true,
    },
  });

  try {
    const { data } = await api.get<GetCharacters>("/character");

    dispatch({
      type: "CHANGE_CHARACTERS",
      payload: {
        data: data,
      },
    });

    return data;
  } catch {
  } finally {
    dispatch({
      type: "CHANGE_LOADING",
      payload: {
        isLoading: false,
      },
    });
  }
};

export const charactersReducer = (state: State, action: Action): State => {
  if (!state) {
    return {};
  }

  const actions: Record<ActionType, State> = {
    CHANGE_LOADING: {
      ...state,
      isLoading: action.payload.isLoading,
    },
    CHANGE_CHARACTERS: {
      ...state,
      data: action.payload.data,
    },
  };

  return actions[action.type];
};
