/* eslint-disable react/prop-types */
import TabelaBody from "./TabelaBody";

const columns = {
    "Carteiras emitidas": ["Nº da via", "Houve cobrança?", "Data de emissão", "Validade", "Motivo"],
    "Carteiras a emitir": ["Data da solicitação", "Validade", "Usuário", "Motivo"],
    "Trocas de plano": ["Plano", "Data histórico", "Início", "Fim", "Usuário"]
};

const Tabela = ({ title }) => {
    const columnTitles = columns[title];

    return (
        <table className="historico-do-cadastro-container-tabela">
            <thead>
                <tr>
                    {columnTitles.map((columnTitle) => (
                        <th key={columnTitle}>{columnTitle}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <TabelaBody title={title} />
            </tbody>
        </table>
    );
};

export default Tabela;
