import React, { useReducer } from "react";

// Criamos nosso estado inicial.
const initialState = {
  treinador: {
    nome: "",
    apelido: "",
    email: "",
  },
  pokemon: {
    nomePokemon: "",
    tipoPokemon: "",
    elementoPokemon: "",
    alturaPokemon: "",
    idadePokemon: "",
  },
};

// Criamos a função redutora com os diferentes tipos de ações.
const reducer = (state, action) => {
  switch (action.type) {
    case "ATUALIZAR_TREINADOR":
      return {
        ...state,
        treinador: {
          ...state.treinador,
          ...action.payload,
        },
      };
    case "ATUALIZAR_POKEMON":
      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export const ContextoFormulario = React.createContext();

const ProviderFormulario = ({ children }) => {
  // Criamos o estado usando useReducer.
  const [formulario, dispatch] = useReducer(reducer, initialState);

  // Modificamos a função de status de atualização para receber o tipo de ação e as informações a serem atualizadas.
  const handleInputBlur = (type, valorInput) => {
    const { campo, valor } = valorInput;

    // Despachamos a ação.
    dispatch({
      type,
      payload: {
        [campo]: valor,
      },
    });
  };

  return (
    <ContextoFormulario.Provider
      value={{
        formulario,
        handleInputBlur,
      }}
    >
      {children}
    </ContextoFormulario.Provider>
  );
};

export default ProviderFormulario;
