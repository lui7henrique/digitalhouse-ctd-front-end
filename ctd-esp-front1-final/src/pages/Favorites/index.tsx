import { CharactersGrid } from "components/CharactersGrid";

/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <Favorites /> ```
 *
 * @returns {JSX.Element}
 */

export const Favorites = () => {
  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        <button className="danger">Test Button</button>
      </div>

      <CharactersGrid />
    </div>
  );
};
