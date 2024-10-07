import React from 'react';
import './style.scss';

export const ContainerPdf = ({ className, references, totalPages, children }) => {
  return (
    <div className={`${className ? className : ''}   pdf-container`}>
      <div className="eita-meu" ref={references}>
        <div className="content w-100">{children}</div>
      </div>
    </div>
  );
};
