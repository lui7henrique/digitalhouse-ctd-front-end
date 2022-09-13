import { CharacterCard } from "components/CharacterCard";
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
  return (
    <div className="grade-personagens">
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
    </div>
  );
};
