import React from 'react';
import './tooltip.scss';

export const Tooltip = ({ text, className = '', children }) => {
  return (
    <div className={`un-tooltip ${className}`} data-title={text}>
      {children}
    </div>
  );
};
