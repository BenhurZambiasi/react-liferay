import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './app-teste.scss';
const PrintableContent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="content">
        {/* Conteúdo principal aqui */}
        <p>Conteúdo da página...</p>
        <p>Mais conteúdo...</p>
      </div>
      <div className="footer">
        {/* O número da página será automaticamente incrementado aqui */}
        <p className="page-number"></p>
      </div>
    </div>
  );
});

export const AppTest = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <button onClick={handlePrint}>Imprimir</button>
      <div className="d-none">
        <PrintableContent ref={componentRef} />
      </div>
    </div>
  );
};
