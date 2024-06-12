/* eslint-disable react/prop-types */
import "./menu_select.scss";

export const MenuSelect = ({ name, onChange, value, options = [] }) => {
  return (
    <ul className="list-unstyled un-container-options-periodo un-custom-scrollbar mb-0">
      {options.map((option) => {
        return (
          <li
            key={option.value}
            className="un-periodo-option-container">
            <label
              htmlFor={option.value}
              className="un-periodo-option-label">
              <input
                checked={value == option.value ? true : false}
                className="d-none un-input-check-periodo"
                type="checkbox"
                name={option.value}
                id={option.value}
                onChange={() => {
                  onChange(name, option.value);
                }}
              />
              <span>{option.label}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
