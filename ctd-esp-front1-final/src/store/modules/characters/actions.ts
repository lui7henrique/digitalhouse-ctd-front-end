import { CharactersAction } from "store";
import { Dispatch } from "redux";
import { api } from "services/api";
import { GetCharacters } from "types/characters";

export const fetchInitialCharacters = async (
  dispatch: Dispatch<CharactersAction>
) => {
  const newCharacters = await api.get<GetCharacters>("/characters");

  dispatch({
    type: "CHANGE_CHARACTERS",
  });
};
