import Paginacao from "componentes/paginacao/paginacao.componente";
import Filtros from "componentes/personagens/filtros.componente";
import GradePersonagens from "componentes/personagens/grade-personagens.componente";

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
      <Filtros />
      <Paginacao />
      <GradePersonagens />
      <Paginacao />
    </div>
  );
};
