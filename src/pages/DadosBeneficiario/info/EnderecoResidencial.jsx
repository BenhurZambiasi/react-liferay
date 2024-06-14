import { FieldText } from "./FieldText";

export const EnderecoResidencial = () => {
  return (
    <div className="d-flex flex-column w-100 p-4 m-0 gap-6">
      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Endereço" value="Rua Victor Brecheret" />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Número" value="344" />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Complemento" value="-" />
        </div>
      </div>
      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Bairro" value="Vila Yara" />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Município" value="Osasco" />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="UF" value="SP" />
        </div>
      </div>

      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Cep" value="06026-000" />
        </div>
        <div className="col-md-8 col-sm-12 p-0">
          <FieldText label="País" value="Brasil" />
        </div>
      </div>
      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Telefone" value="(11) 3214-5678  (Ramal: 1234)" />
        </div>
        <div className="col-4 p-0">
          <FieldText label="Celular" value="(11) 98765-4321" />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="E-mail" value="lidia.maria@email.com" />
        </div>
      </div>
    </div>
  );
};
