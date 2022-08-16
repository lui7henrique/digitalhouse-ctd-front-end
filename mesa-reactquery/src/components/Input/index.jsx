import React, { useContext, useEffect, useRef } from "react";
import { ContextoFormulario } from "../../context/contextoFormulario";

// Adicionamos uma props que nos diz se devemos focar no input.
const Input = ({
  name,
  label,
  type = "text",
  shouldFocus = false,
  isPokemon = false,
}) => {
  // Criamos uma referência para o input.
  const ref = useRef();

  const { handleInputBlur, formulario } = useContext(ContextoFormulario);

  const [value, setValue] = React.useState(formulario[name] || "");

  const onChange = (e) => setValue(e.target.value);

  const onBlur = (e) => {
    e.preventDefault();

    handleInputBlur(isPokemon ? "ATUALIZAR_POKEMON" : "ATUALIZAR_ENTRENADOR", {
      campo: name,
      valor: value,
    });
  };

  // Quando o componente é montado, se precisarmos focar, focamos usando a referência.
  useEffect(() => {
    if (ref.current && shouldFocus) {
      ref.current.focus();
    }
  }, [shouldFocus]);

  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>

      <input
        type={type}
        value={value}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
    </div>
  );
};

export default Input;
