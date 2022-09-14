import { GetCharacters } from "types/characters";

export type State = {
  isLoading?: boolean;
  data?: GetCharacters;
};

export type ActionType = "CHANGE_LOADING" | "CHANGE_CHARACTERS";

export type Action = {
  payload: {
    data?: GetCharacters;
    isLoading?: boolean;
  };
  type: ActionType;
};
