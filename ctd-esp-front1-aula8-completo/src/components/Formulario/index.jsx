import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import ProviderFormulario from "../../context/contextoFormulario";
import pokebola from "../../assets/pokebola.png";
import treinador from "../../assets/treinador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input";
import Select from "../Select";
import Detalhe from "./detalhe";
import InputEspecie from "../InputEspecie";

// Criamos a função que obtém os tipos de pokemon da API.
const getPokemonTypes = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/type/");
  const data = await response.json();
  return data.results;
};

/**
 * Componente que exibe os inputs do formulário.
 *
 * @returns {JSX.Element}
 */
const Formulario = () => {
  // Obtenha os tipos de pokemon da API usando o hook useQuery. Obtemos o resultado da consulta
  // e armazená-lo na variável de tipos. Além disso, obtemos as variáveis ​​isLoading e isError para desabilitar
  // a entrada.
  const {
    data: tipos,
    isLoading,
    isError,
  } = useQuery("pokemonTypes", getPokemonTypes);

  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokémon de Ash</h2>
        </div>
        <Link className="retorna" to="/">
          Inicio
        </Link>
      </header>
      <div className="formulario-entrada">
        <h3>Solicitação de atenção</h3>
        <p>
          Por favor, preencha o formulário para que possamos mostrar seu Pokémon
        </p>
        <div className="corpo-formulario">
          <ProviderFormulario>
            <div className="inputs">
              <div>
                <p className="nome-secao">
                  <img src={treinador} alt="treinador" />
                  <span>Treinador</span>
                </p>
                <Input name="nome" label="Nome" shouldFocus={true} />
                <Input name="apelido" label="Apelido" />
                <Input name="email" label="Email" type="email" />
              </div>
              <div>
                <p className="nome-secao">
                  <img src={pikachu} alt="pikachu" />
                  <span>Pokémon</span>
                </p>
                <Input name="nomePokemon" label="Nome" isPokemon={true} />
                <Select
                  name="tipoPokemon"
                  label="Tipo"
                  options={tipos}
                  disabled={isLoading || isError} // Desativamos o input se estiver carregando ou se houver um erro
                />
                <Input
                  name="elementoPokemon"
                  label="Elemento"
                  isPokemon={true}
                />
                <Input name="alturaPokemon" label="Altura" isPokemon={true} />
                <Input name="idadePokemon" label="Idade" isPokemon={true} />
                <InputEspecie name="especiePokemon" label="Especie" />
              </div>
            </div>
            <Detalhe />
          </ProviderFormulario>
        </div>
      </div>
    </>
  );
};

Formulario.propTypes = {};

export default Formulario;
