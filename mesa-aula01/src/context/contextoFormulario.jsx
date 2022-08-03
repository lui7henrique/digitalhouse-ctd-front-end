// Aqui devemos criar nosso contexto e nosso provider.

import { createContext, useContext, useState } from "react";

export const FormContext = createContext({});

export const FormContextProvider = (props) => {
  const [formState, setFormState] = useState({});

  return (
    <FormContext.Provider value={{ formState, setFormState }}>
      {props.children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const value = useContext(FormContext);

  return value;
};
