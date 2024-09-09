import React, { useRef, useState } from "react";

const isValidDDD = (ddd) => {
  const dddNumber = parseInt(ddd, 10);
  return (
    !isNaN(dddNumber) && ddd.length === 2 && dddNumber >= 11 && dddNumber <= 99
  );
};

export const FoneField = ({
  label,
  name,
  value,
  onChange,
  error,
  required,
  onClearError,
  placeholder,
}) => {
  const foneRef = useRef(null);
  const parseNumero = value.replace(/\D/g, "");
  const dddValue = value ? parseNumero.slice(0, 2) : "";
  const foneNumber = value ? parseNumero.slice(2, value.length) : "";

  const [ddd, setDDD] = useState(dddValue);
  const [fone, setFone] = useState(foneNumber);

  const [errorDDD, setErrorDDD] = useState("");

  const handleChangeDDD = (e) => {
    setErrorDDD("");
    const valor = e.target.value;
    setDDD(valor.replace(/\D/g, ""));
    if (valor.length == 2) {
      if (isValidDDD(valor)) foneRef && foneRef.current.focus();
      else setErrorDDD("DDD inválido");
    }
    onChange({ target: { value: `${valor}${fone}`, name: name } });
  };

  const handleChangeFone = (e) => {
    const valor = e.target.value.replace(/\D/g, "");
    setFone(valor);
    onChange({ target: { value: `${ddd}${valor}`, name: name } });
  };
  return (
    <div
      className="un-container-fone-field d-flex flex-column gap-2"
      data-error={!!error}
      data-error-ddd={!!errorDDD}>
      <label htmlFor={name} className="m-0">
        {label} {required && <span>*</span>}
      </label>
      <div className="d-flex gap-2 container-fone-text">
        <input
          type="text"
          name={name}
          id={name}
          className="ddd bg-white align-items-center d-flex gap-4 py-2 px-3"
          placeholder="DDD"
          value={ddd}
          maxLength={2}
          onChange={handleChangeDDD}
          onFocus={() => {
            setErrorDDD("");
            onClearError && onClearError({ target: { name } });
          }}
        />
        <input
          ref={foneRef}
          type="text"
          name={name}
          className="fone bg-white align-items-center d-flex gap-4 py-2 px-3"
          value={fone}
          onChange={handleChangeFone}
          onFocus={onClearError}
          placeholder={placeholder}
        />
      </div>
      {error || errorDDD ? (
        <span className="error-container filled">{error || errorDDD}</span>
      ) : (
        <></>
      )}
    </div>
  );
};
