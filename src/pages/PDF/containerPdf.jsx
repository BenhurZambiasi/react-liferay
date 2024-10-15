import React from 'react';
import './style.scss';

export const ContainerPdf = ({ className, references, children }) => {
  return (
    <div className={`${className ? className : ''}  pdf-container`}>
      <div ref={references}>
        <div className="pdf-content w-100">{children}</div>
      </div>
    </div>
  );
};
