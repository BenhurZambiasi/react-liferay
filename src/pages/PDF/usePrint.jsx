import React from 'react';
import { ContainerPdf } from './containerPdf';
import { useReactToPrint } from 'react-to-print';

export const usePrint = ({ references, className, documentTitle }) => {
  const handlePrint = useReactToPrint({
    content: () => {
      return references.current;
    },
    documentTitle,
  });

  const Teste = ({ children }) => {
    return (
      <ContainerPdf references={references} className={className}>
        {children}
      </ContainerPdf>
    );
  };

  return { handlePrint, Component: Teste };
};
