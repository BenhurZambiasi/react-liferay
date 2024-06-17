/* eslint-disable react/prop-types */
import TabelaBody from "./TabelaBody";

const Tabela = ({ columns, data, expanded, onExpand }) => {
  return (
    <table className="historico-do-cadastro-container__tabela">
      <thead>
        <tr>
          {columns.map(({ label }) => (
            <th key={label}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <TabelaBody
          columns={columns}
          data={data}
          expanded={expanded}
          onExpand={onExpand}
        />
      </tbody>
    </table>
  );
};

export default Tabela;
