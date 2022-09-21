import { Character, GetCharacters } from "types/characters";

export type CharactersState =
  | {
      data?: GetCharacters | null;
      favorites?: Character[] | null;
      isLoading: boolean;
    }
  | undefined;
