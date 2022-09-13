import { Link } from "react-router-dom";
import "./styles.css";

/**
 * Header que contém os links para navegar entre as páginas
 *
 * Uso: `<Header />`
 *
 * @returns {JSX.Element}
 */

export const Header = () => {
  return (
    <header>
      <div>
        <div>
          <h2>Exame Final de Frontend IV</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/favoritos">Favoritos</Link>
            </li>
            <li>
              <Link to="/detalhe">Detalhe</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
