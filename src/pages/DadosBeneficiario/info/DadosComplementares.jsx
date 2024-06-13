import { FieldText } from "./FieldText";

export const DadosComplementares = () => {
  return (
    <div className="d-flex flex-column w-100 p-4 m-0 gap-6">
      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Empresa" value="XYZ Serviços e Negócios LTDA" />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Ini. Contribuição" value="-" />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText
            label="Lotação"
            value="1011040204 - EQ Projetos e Sistemas III"
          />
        </div>
      </div>

      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Ini. Lotação" value="01/01/2024" />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Centro de Custo" value="-" />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Função" value="-" />
        </div>
      </div>

      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Unidade" value="-" />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Local" value="-" />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Situação Especial" value="-" />
        </div>
      </div>

      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="A partir de" value="-" />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Matrícula Titular" value="50170" />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Situação Empresa" value="-" />
        </div>
      </div>

      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Matrícula" value="50170" />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Seq." value="-" />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Admissão" value="17/02/2020" />
        </div>
      </div>

      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Cargo" value="-" />
        </div>
      </div>
      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Banco Reembolso" value="-" />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Ag. Reembolso" value="-" />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="CC. Reembolso" value="-" />
        </div>
      </div>
      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Banco Faturamento" value="-" />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Ag. Faturamento" value="-" />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="CC. Faturamento" value="-" />
        </div>
      </div>
      <div className="row m-0 gap-sm-6">
        <div className="col-md-8 col-sm-12 p-0">
          <FieldText label="Forma Cobrança" value="-" />
        </div>

        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Vl. Limite Consignação" value="-" />
        </div>
      </div>
      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Percentual Desconto" value="-" />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Forma Valoração" value="-" />
        </div>
      </div>
    </div>
  );
};
