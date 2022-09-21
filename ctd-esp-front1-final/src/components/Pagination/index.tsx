import { useAppDispatch } from "hooks";
import { useSelector, useStore } from "react-redux";
import { IState } from "store";
import {
  handleNextPage,
  handlePreviousPage,
} from "store/modules/characters/actions";
import { CharactersState } from "store/modules/characters/types";
import "./styles.css";

/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns {JSX.Element}
 */

export const Pagination = () => {
  const dispatch = useAppDispatch();

  const characters = useSelector<IState, CharactersState>(
    (state) => state.characters
  );

  return (
    <div className="paginacao">
      <button
        disabled={!characters?.data?.info.prev}
        className={"primary"}
        onClick={() => handlePreviousPage(dispatch, characters)}
      >
        Anterior
      </button>

      <button
        disabled={!characters?.data?.info.next}
        className={"primary"}
        onClick={() => handleNextPage(dispatch, characters)}
      >
        Próximo
      </button>
    </div>
  );
};
