import { Character } from "types/characters";

export type CharactersState = {
  items: Character[];
  isLoading: boolean;
};
