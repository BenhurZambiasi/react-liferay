import { FieldText } from "./FieldText";

export const EnderecoCobranca = ({enderecoDeCobranca}) => {
  return (
    <div className="d-flex flex-column w-100 p-4 m-0 gap-6">
      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Endereço" value={enderecoDeCobranca.endereco} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Número" value={enderecoDeCobranca.numero} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Complemento" value={enderecoDeCobranca.complemento} />
        </div>
      </div>
      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Bairro" value={enderecoDeCobranca.bairro} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Município" value={enderecoDeCobranca.municipio} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="UF" value={enderecoDeCobranca.uf} />
        </div>
      </div>

      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Cep" value={enderecoDeCobranca.cep} />
        </div>
        <div className="col-md-8 col-sm-12 p-0">
          <FieldText label="País" value={enderecoDeCobranca.pais} />
        </div>
      </div>
      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Telefone" value={enderecoDeCobranca.telefone} />
        </div>
        <div className="col-4 p-0">
          <FieldText label="Celular" value={enderecoDeCobranca.celular} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="E-mail" value={enderecoDeCobranca.email} />
        </div>
      </div>
    </div>
  );
};

