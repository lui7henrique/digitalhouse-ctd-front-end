import React, { useState, useContext } from "react";
import { useQuery } from "react-query";
import { ContextoFormulario } from "../../context/contextoFormulario";
import { pokeapi } from "../../services/pokeapi";

const InputEspecie = ({ name, label }) => {
  const [offset, setOffset] = useState(0);

  const { data, isLoading } = useQuery(["species", offset], async () => {
    const { data } = await pokeapi.get("/pokemon-species", {
      params: {
        offset: offset,
      },
    });

    return data;
  });

  console.log();

  const [mostrarPopup, setMostrarPopup] = useState(false);
  const { handleInputBlur } = useContext(ContextoFormulario);

  const elegirEspecie = (e, nomeEspecie) => {
    e.preventDefault();

    handleInputBlur("ATUALIZAR_POKEMON", {
      campo: "especiePokemon",
      valor: nomeEspecie,
    });
    setMostrarPopup(false);
  };

  const handleNextPage = () => {
    setOffset((prevOffset) => prevOffset + 20);
  };

  const handlePreviousPage = () => {
    setOffset((prevOffset) => prevOffset - 20);
  };

  const renderizarEspecies = () => (
    <>
      {data.results.map((especie) => (
        <button
          key={especie.name}
          className="botoes-especie"
          onClick={(e) => elegirEspecie(e, especie.name)}
        >
          {especie.name}
        </button>
      ))}
    </>
  );

  return (
    <div className="input-receptor">
      {mostrarPopup && (
        <div className="popup-especie">
          <h4>Selecionar espécie</h4>
          <div className="receptor-especies">
            {isLoading ? <>carregando...</> : renderizarEspecies()}
          </div>

          <div className="paginacao">
            <button
              className="botao-anterior"
              onClick={handlePreviousPage}
              disabled={!data?.previous}
            >
              Anterior
            </button>

            <button
              className="botao-seguinte"
              onClick={handleNextPage}
              disabled={!data?.next}
            >
              Seguinte
            </button>
          </div>
        </div>
      )}

      <p htmlFor={name}>{label}</p>
      <button
        className="botao-selecionar-especies"
        onClick={() => setMostrarPopup(true)}
      >
        Selecionar
      </button>
    </div>
  );
};

export default InputEspecie;
