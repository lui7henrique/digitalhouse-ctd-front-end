import { FavoritesAction } from "store";
import { Character } from "types/characters";

export const favoriteCharacter = (character: Character): FavoritesAction => {
  return {
    type: "FAVORITE_CHARACTER",
    payload: {
      character,
    },
  };
};

export const disFavorCharacter = (character: Character): FavoritesAction => {
  return {
    type: "DISFAVOR_CHARACTER",
    payload: {
      character,
    },
  };
};
