import { FavoriteButton } from "components/FavoriteButton";
import "./styles.css";

/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns {JSX.Element}
 */

export const CharacterCard = () => {
  return (
    <div className="card-personagem">
      <img
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Rick Sanchez"
      />
      <div className="card-personagem-body">
        <span>Rick Sanchez</span>
        <FavoriteButton isFavorite={false} />
      </div>
    </div>
  );
};
