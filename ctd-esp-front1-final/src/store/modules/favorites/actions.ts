import { Action } from "store";
import { Character } from "types/characters";

export const favoriteCharacter = (character: Character): Action => {
  return {
    type: "FAVORITE_CHARACTER",
    payload: {
      character,
    },
  };
};

export const disFavorCharacter = (character: Character): Action => {
  return {
    type: "DISFAVOR_CHARACTER",
    payload: {
      character,
    },
  };
};
