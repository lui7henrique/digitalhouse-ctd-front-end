import React, { useState } from "react";
import { useForm } from "../../context/contextoFormulario";

const Input = ({ name, label, type = "text" }) => {
  const { setFormState } = useForm();
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    e.preventDefault();

    setFormState((prevFormState) => {
      return { ...prevFormState, [name]: value };
    });
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
