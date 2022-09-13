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
  return (
    <div className="paginacao">
      <button disabled={true} className={"primary"}>
        Anterior
      </button>
      <button disabled={false} className={"primary"}>
        Próximo
      </button>
    </div>
  );
};
