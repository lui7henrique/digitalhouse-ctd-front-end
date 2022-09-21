import { FavoriteButton } from "components/FavoriteButton";
import { useSelector } from "react-redux";
import { useMemo } from "react";

import { useAppDispatch } from "hooks";

import { CharactersState } from "store/modules/characters/types";

import { Character } from "types/characters";
import "./styles.css";
import { IState } from "store";

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

  const dispatch = useAppDispatch();

  const characters = useSelector<IState, CharactersState>(
    (state) => state.characters
  );

  const isFavorite = useMemo(() => {
    const hasInArray = characters?.favorites?.find(
      ({ id }) => id === character.id
    );

    return !!hasInArray;
  }, [character, characters]);

  return (
    <div className="card-personagem">
      <img src={character.image} alt="Rick Sanchez" />

      <div className="card-personagem-body">
        <span>{character.name}</span>

        <FavoriteButton
          isFavorite={isFavorite}
          onClick={() => {
            isFavorite
              ? dispatch({
                  type: "DISFAVOR_CHARACTER",
                  payload: {
                    character,
                  },
                })
              : dispatch({
                  type: "FAVORITE_CHARACTER",
                  payload: {
                    character,
                  },
                });
          }}
        />
      </div>
    </div>
  );
};
