import { FavoriteButton } from "components/FavoriteButton";
import { Character } from "types/characters";
import "./styles.css";

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

  return (
    <div className="card-personagem">
      <img src={character.image} alt="Rick Sanchez" />

      <div className="card-personagem-body">
        <span>{character.name}</span>

        <FavoriteButton isFavorite={false} />
      </div>
    </div>
  );
};
