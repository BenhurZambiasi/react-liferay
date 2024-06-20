import { FieldText } from "./FieldText";

export const EnderecoResidencial = ({enderecoResidencial}) => {
  return (
    <div className="d-flex flex-column w-100 p-4 m-0 gap-6">
      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Endereço" value={enderecoResidencial.endereco} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Número" value={enderecoResidencial.numero} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Complemento" value={enderecoResidencial.complemento} />
        </div>
      </div>
      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Bairro" value={enderecoResidencial.bairro} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Município" value={enderecoResidencial.municipio} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="UF" value={enderecoResidencial.uf} />
        </div>
      </div>

      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Cep" value={enderecoResidencial.cep} />
        </div>
        <div className="col-md-8 col-sm-12 p-0">
          <FieldText label="País" value={enderecoResidencial.pais} />
        </div>
      </div>
      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Telefone" value={enderecoResidencial.telefone} />
        </div>
        <div className="col-4 p-0">
          <FieldText label="Celular" value={enderecoResidencial.celular} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="E-mail" value={enderecoResidencial.email} />
        </div>
      </div>
    </div>
  );
};
