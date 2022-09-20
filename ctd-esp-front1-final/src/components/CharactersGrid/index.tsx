import { CharacterCard } from "components/CharacterCard";

import { useEffect } from "react";
import { connect, useSelector, useStore } from "react-redux";
import { IState } from "store";
import { fetchInitialCharacters } from "store/modules/characters/actions";
import { CharactersState } from "store/modules/characters/types";

import "./styles.css";

/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns {JSX.Element}
 */

export const CharactersGrid = () => {
  const characters = useSelector<IState, CharactersState>(
    (state) => state.characters
  );

  const { dispatch } = useStore();

  useEffect(() => {
    const fetch = async () => {
      await fetchInitialCharacters(dispatch);
    };

    fetch();
  }, [dispatch]);

  if (characters.isLoading) {
    return <h1>loading...</h1>;
  }

  if (characters.items) {
    return (
      <div className="grade-personagens">
        {characters.items.map((character) => {
          return <CharacterCard character={character} />;
        })}
      </div>
    );
  }

  return <div className="grade-personagens"></div>;
};
