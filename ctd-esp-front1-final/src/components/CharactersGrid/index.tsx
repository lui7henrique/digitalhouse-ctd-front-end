import { CharacterCard } from "components/CharacterCard";
import { IRootState } from "config/store";
import { State } from "config/store/types";
import { useStore } from "react-redux";
import { GetCharacters } from "types/characters";
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
  const { getState } = useStore<IRootState>();
  const state = getState();

  const data = (state.characters as State).data;

  if (data) {
    return (
      <div className="grade-personagens">
        {data.results.map((character) => {
          return <CharacterCard character={character} />;
        })}
      </div>
    );
  }

  return <div className="grade-personagens"></div>;
};
