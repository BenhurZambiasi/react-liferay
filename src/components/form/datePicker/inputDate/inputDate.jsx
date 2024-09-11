import React from 'react';

export const InputDate = ({ label }) => {
  return (
    <div className="input-date-picker">
      <label htmlFor="date-picker">{label}</label>
      <div className="input-date-picker-container">
        <input type="date" placeholder="Selecione uma data" />
        <span class="material-symbols-outlined">event</span>
      </div>
    </div>
  );
};
