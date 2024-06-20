import { FieldText } from "./FieldText";

export const DadosComplementares = ({ dadosComplementares }) => {
  return (
    <div className="d-flex flex-column w-100 p-4 m-0 gap-6">
      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Empresa" value={dadosComplementares.empresa} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Ini. Contribuição" value={dadosComplementares.ini_contribuicao} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText
            label="Lotação"
            value={dadosComplementares.lotacao}
          />
        </div>
      </div>

      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Ini. Lotação" value={dadosComplementares.ini_lotacao} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Centro de Custo" value={dadosComplementares.centro_de_custo} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Função" value={dadosComplementares.funcao} />
        </div>
      </div>

      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Unidade" value={dadosComplementares.unidade} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Local" value={dadosComplementares.local} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Situação Especial" value={dadosComplementares.situacao_especial} />
        </div>
      </div>

      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="A partir de" value={dadosComplementares.a_partir_de} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Matrícula Titular" value={dadosComplementares.matricula_titular} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Situação Empresa" value={dadosComplementares.situacao_empresa} />
        </div>
      </div>

      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Matrícula" value={dadosComplementares.matricula} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Seq." value={dadosComplementares.seq} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Admissão" value={dadosComplementares.admissao} />
        </div>
      </div>

      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Cargo" value={dadosComplementares.cargo} />
        </div>
      </div>
      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Banco Reembolso" value={dadosComplementares.banco_reembolso} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Ag. Reembolso" value={dadosComplementares.ag_reembolso} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="CC. Reembolso" value={dadosComplementares.cc_reembolso} />
        </div>
      </div>
      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Banco Faturamento" value={dadosComplementares.banco_faturamento} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Ag. Faturamento" value={dadosComplementares.ag_faturamento} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="CC. Faturamento" value={dadosComplementares.cc_faturamento} />
        </div>
      </div>
      <div className="row m-0 gap-sm-6">
        <div className="col-md-8 col-sm-12 p-0">
          <FieldText label="Forma Cobrança" value={dadosComplementares.forma_cobranca} />
        </div>

        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Vl. Limite Consignação" value={dadosComplementares.vl_limite_consignacao} />
        </div>
      </div>
      <div className="row m-0 gap-sm-6">
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Percentual Desconto" value={dadosComplementares.percentual_desconto} />
        </div>
        <div className="col-md-4 col-sm-12 p-0">
          <FieldText label="Forma Valoração" value={dadosComplementares.forma_valoracao} />
        </div>
      </div>
    </div>
  );
};

