import { Character } from "types/characters";

type Favorite = Character;

export type FavoritesState =
  | {
      items: Favorite[];
      isLoading: boolean;
    }
  | undefined;
