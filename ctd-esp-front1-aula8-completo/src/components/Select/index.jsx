import React, { useContext } from "react";
import propTypes from "prop-types";
import { ContextoFormulario } from "../../context/contextoFormulario";

// Criamos o componente Select com os adereços que precisamos para poder usá-lo no componente Form
const Select = ({ name, label, options = [], disabled = false }) => {
  const { handleInputBlur } = useContext(ContextoFormulario);

  const onChange = (e) => {
    e.preventDefault();

    handleInputBlur("ATUALIZAR_POKEMON", {
      campo: "tipoPokemon",
      valor: e.target.value,
    });
  };

  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={onChange} disabled={disabled}>
        <option value="">Selecione o tipo de pokémon</option>
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  options: propTypes.array,
  disabled: propTypes.bool,
};

export default Select;
