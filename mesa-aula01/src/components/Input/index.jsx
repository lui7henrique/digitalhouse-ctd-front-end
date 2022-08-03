import React, { useState } from "react";
import { useForm } from "../../context/contextoFormulario";

const Input = ({ name, label, type = "text" }) => {
  const { dispatch, formState } = useForm();
  const [value, setValue] = useState(formState[name]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    e.preventDefault();

    const dispatchType = name.includes("pokemon")
      ? "ATUALIZAR_POKEMON"
      : "ATUALIZAR_TREINADOR";

    dispatch({ type: dispatchType, name, value: value });
  };

  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>

      <input
        type={type}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </div>
  );
};

export default Input;
