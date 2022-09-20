import { FavoriteButton } from "components/FavoriteButton";
import { useSelector, useStore } from "react-redux";
import { useMemo } from "react";
import { IState } from "store";

import { Character } from "types/characters";

import { FavoritesState } from "store/modules/favorites/types";

import "./styles.css";
import {
  disFavorCharacter,
  favoriteCharacter,
} from "store/modules/favorites/actions";

/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns {JSX.Element}
 */

type CharacterProps = {
  character: Character;
};

export const CharacterCard = (props: CharacterProps) => {
  const { character } = props;

  const { dispatch } = useStore();
  const favorites = useSelector<IState, FavoritesState>(
    (state) => state.favorites
  );

  const isFavorite = useMemo(() => {
    const hasInArray = favorites?.items.find(({ id }) => id === character.id);

    return !!hasInArray;
  }, [character, favorites]);

  return (
    <div className="card-personagem">
      <img src={character.image} alt="Rick Sanchez" />

      <div className="card-personagem-body">
        <span>{character.name}</span>

        <FavoriteButton
          isFavorite={isFavorite}
          onClick={() =>
            dispatch(
              isFavorite
                ? disFavorCharacter(character)
                : favoriteCharacter(character)
            )
          }
        />
      </div>
    </div>
  );
};
