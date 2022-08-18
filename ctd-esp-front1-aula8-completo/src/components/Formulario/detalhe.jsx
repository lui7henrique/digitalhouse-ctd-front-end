import React, { useContext, useEffect } from "react";
import { useMutation } from "react-query";
import { ContextoFormulario } from "../../context/contextoFormulario";

// Esta função é responsável por enviar o formulário ao servidor quando o método mutate é chamado.
const enviarFormulario = async (data) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Erro ao enviar o formulário");
  }
};

/**
 * Componente que mostra os detalhes do formulário, com
 * o relatório de cada um dos campos que foram preenchidos.
 *
 * @returns {JSX.Element}
 */
const Detalhe = () => {
  // Usamos useMutation para enviar o formulário para o servidor.
  const { data, isLoading, isError, mutate, isSuccess } =
    useMutation(enviarFormulario);

  const { formulario } = useContext(ContextoFormulario);

  const { nome, apelido, email } = formulario?.treinador;

  const {
    nomePokemon,
    tipoPokemon,
    elementoPokemon,
    alturaPokemon,
    idadePokemon,
    especiePokemon,
  } = formulario?.pokemon;

  // Usamos um useEffect para executar uma vez que a mutação é feita e exibir a mensagem de sucesso ou erro.
  useEffect(() => {
    if (isSuccess) {
      alert(`Formulário enviado com sucesso, id ${data ? data?.id : ""}`);
    } else if (isError) {
      alert("Erro ao enviar o formulário. Por favor, tente novamente");
    }
  }, [isSuccess, data, isError]);

  return (
    <div className="detalhe-formulario">
      <div className="cabecalho">
        <h3>Vista prévia da solicitação</h3>
      </div>
      <section className="dados-cliente">
        <h4>Dados do Treinador</h4>
        <div className="lista">
          <p>Nome: {nome}</p>
          <p>Apelido: {apelido}</p>
          <p>Email: {email}</p>
        </div>
      </section>
      <section className="dados-cliente">
        <h4>Dados do Pokémon</h4>
        <div className="lista">
          <p>Nome: {nomePokemon}</p>
          <p>Tipo: {tipoPokemon}</p>
          <p>Elemento: {elementoPokemon}</p>
          <p>Altura: {alturaPokemon}</p>
          <p>Idade: {idadePokemon}</p>
          <p>Especie: {especiePokemon}</p>
        </div>
      </section>
      <button className="botao-enviar" onClick={() => mutate(formulario)}>
        {isLoading ? "Enviando formulario..." : "Enviar Solicitação"}
      </button>
    </div>
  );
};
Detalhe.propTypes = {};

export default Detalhe;
