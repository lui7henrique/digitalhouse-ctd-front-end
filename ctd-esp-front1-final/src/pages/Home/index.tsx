import { CharactersFilters } from "components/CharactersFilters";
import { CharactersGrid } from "components/CharactersGrid";
import { Pagination } from "components/Pagination";

/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <Home /> ```
 *
 * @returns {JSX.Element}
 */

export const Home = () => {
  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>
        <button className="danger">Test Button</button>
      </div>

      <CharactersFilters />
      <Pagination />
      <CharactersGrid />
      <Pagination />
    </div>
  );
};
