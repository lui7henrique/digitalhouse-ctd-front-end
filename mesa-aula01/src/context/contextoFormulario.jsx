import { createContext, useContext, useReducer } from "react";

export const FormContext = createContext({});

export const FormContextProvider = (props) => {
  const initialState = {};

  const reducer = (state, action) => {
    const actions = {
      ATUALIZAR_TREINADOR: { ...state, [action.name]: action.value },
      ATUALIZAR_POKEMON: { ...state, [action.name]: action.value },
    };

    return actions[action.type];
  };

  const [formState, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={{ formState, dispatch }}>
      {props.children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const value = useContext(FormContext);

  return value;
};
