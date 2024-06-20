/* eslint-disable react/prop-types */
import "./textField.scss";
export const TextField = ({
  value,
  name,
  label,
  onChange,
  required,
  hidden,
  type = "text",
  disabled = false,
}) => {
  const formatTypeNumber = () => {
    return type == "number" ? value.replace(/\D/g, "") : value;
  };
  return (
    <div
      className="container-textfield w-100"
      data-disabled={disabled}
      data-hidden={hidden}>
      {!hidden && (
        <div className="w-100 d-flex flex-column gap-2">
          <label htmlFor={name}>
            {label}
            {required && <span>*</span>}
          </label>

          <input
            readOnly={disabled}
            type={type}
            name={name}
            id={name}
            value={formatTypeNumber()}
            onChange={onChange}
          />
        </div>
      )}
    </div>
  );
};
