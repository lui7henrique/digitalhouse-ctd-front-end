import React from "react";
import { useForm } from "../../context/contextoFormulario";

const Detalhe = () => {
  const { formState } = useForm();

  return (
    <div className="detalhe-formulario">
      <div className="cabecalho">
        <h3>Vista prévia da solicitação</h3>
      </div>

      <section className="dados-cliente">
        <h4>Dados do Treinador</h4>

        <div className="lista">
          <p>Nome: {formState.nome}</p>

          <p>Sobrenome: {formState.sobrenome}</p>

          <p>Email: {formState.email}</p>
        </div>
      </section>

      <section className="dados-cliente">
        <h4>Dados do Pokémon</h4>

        <div className="lista">
          <p>Nome: {formState.nomePokemon}</p>
        </div>
      </section>

      <button
        className="botao-enviar"
        onClick={() => alert("Solicitação enviada :)")}
      >
        Enviar Solicitação
      </button>
    </div>
  );
};

export default Detalhe;
