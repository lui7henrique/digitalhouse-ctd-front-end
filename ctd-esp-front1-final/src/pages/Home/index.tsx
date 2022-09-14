import { CharactersFilters } from "components/CharactersFilters";
import { CharactersGrid } from "components/CharactersGrid";
import { Pagination } from "components/Pagination";
import { getInitialCharacters } from "config/reducers/characters";
import { useStore } from "react-redux";
import { useEffect } from "react";

/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <Home /> ```
 *
 * @returns {JSX.Element}
 */

export const Home = () => {
  const store = useStore();

  useEffect(() => {
    const fn = async () => {
      await getInitialCharacters(store.dispatch);
    };

    fn();
  }, [store.dispatch]);

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
