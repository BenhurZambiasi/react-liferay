import { Fragment, useRef, useState } from 'react';
import { Button } from '../components/form/button/Button';
import { guia } from './mocks';
import { ContainerPdf } from './PDF/containerPdf';
import { useReactToPrint } from 'react-to-print';
import './style.scss';

export const App = () => {
  const ref = useRef();
  const [totalPages, setTotalPages] = useState(0);
  const handlePrint = useReactToPrint({
    content: () => {
      return ref.current;
    },
    documentTitle: 'Guia Médico',
    onBeforeGetContent: () => {
      // Calcular quantas páginas o conteúdo gera e inserir números de página
      const contentElement = ref.current;
      if (contentElement) {
        const totalHeight = contentElement.scrollHeight; // Altura total do conteúdo
        const pageHeight = 1123; // Aproximadamente o tamanho de uma página A4 em pixels (ajuste conforme necessário)
        const pages = Math.ceil(totalHeight / pageHeight);
        setTotalPages(pages); // Definir o número total de páginas
      }
    },
  });

  return (
    <div className="container w-100 mt-3 d-flex flex-column">
      <div>
        <div>
          <Button className="w-25" onClick={handlePrint}>
            Ver PDF
          </Button>
        </div>
      </div>
      <div className="d-flex flex-column gap-4 mt-5 hide">
        {guia.prestadores.map(({ nome, codigo }) => {
          return (
            <div className="prestadores" key={codigo}>
              {nome}
            </div>
          );
        })}
      </div>
      <ContainerPdf className="pdf-guia-lista " references={ref} totalPages={totalPages}>
        <div className="content-pdf w-100 d-flex flex-column gap-5">
          <div className="header d-flex flex-column gap-5">
            <div className="title-container d-flex justify-content-between">
              <span className="title">Resultado da pesquisa</span>

              <span className="info-date d-flex align-items-center gap-1">Esta pesquisa é válida para 05/09/2024.</span>
            </div>
            <div className="infos-filtro row no-gutters">
              <div className="col-6">
                <div className="row no-gutters">
                  <div className="field">
                    <span className="title">Tipo de Prestador:</span>
                    <span className="text">Médico/Clínica</span>
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="field">
                    <span className="title">Especialidade:</span>
                    <span className="text">Cardiologia</span>
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="field">
                    <span className="title">Rede:</span>
                    <span className="text">Rede RB Básica FS 147</span>
                  </div>
                </div>
              </div>
              <div className="col-6 gap-4">
                <div className="row no-gutters">
                  <div className="field">
                    <span className="title">Nome Prestador:</span>
                    <span className="text">Antonio de Alvarenga</span>
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="field">
                    <span className="title">UF:</span>
                    <span className="text">São Paulo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lista d-flex flex-column">
            {guia.prestadores.map(({ nome, codigo, endereco }, index) => {
              return (
                <Fragment key={codigo}>
                  <div className="page-break"></div>
                  <div className="item no-break">
                    <span className="nome">{nome}</span>
                    <div className="d-flex gap-2">
                      <span className="endereco d-flex align-items-center gap-1">
                        {endereco.logradouro}, {endereco.numero}, {endereco.bairro}, {endereco.cidade}-{endereco.uf}
                      </span>

                      {endereco.contatos.map(({ ddd, numero }) => {
                        return (
                          <span className="telefone d-flex align-items-center gap-1" key={`${ddd}${numero}`}>
                            ({ddd}) {numero}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </ContainerPdf>
    </div>
  );
};
