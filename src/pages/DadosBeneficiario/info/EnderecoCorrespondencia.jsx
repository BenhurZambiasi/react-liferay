import { FieldText } from "./FieldText";

export const EnderecoCorrespondencia = ({enderecodecorrespondencia}) => {
  return (
    <div className="d-flex flex-column w-100 p-4 m-0 gap-6">
      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Endereço" value={enderecodecorrespondencia.endereco} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Número" value={enderecodecorrespondencia.numero} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Complemento" value={enderecodecorrespondencia.complemento} />
        </div> 
      </div>
      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Bairro" value={enderecodecorrespondencia.bairro} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Município" value={enderecodecorrespondencia.municipio} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="UF" value={enderecodecorrespondencia.uf} />
        </div>
      </div>

      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Cep" value={enderecodecorrespondencia.cep} />
        </div>
        <div className="col-md-8 col-sm-12 p-0">
          <FieldText label="País" value={enderecodecorrespondencia.pais} />
        </div>
      </div>
      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Telefone" value={enderecodecorrespondencia.telefone} />
        </div>
        <div className="col-4 p-0">
          <FieldText label="Celular" value={enderecodecorrespondencia.celular} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="E-mail" value={enderecodecorrespondencia.email} />
        </div>
      </div>
    </div>
  );
};

