import { useState } from "react";
import { Notification } from "../Notification";
import { FieldText } from "./FieldText";

/* eslint-disable react/prop-types */
export const DadosCadastro = ({ protocoloDados, dadosDoCadastro }) => {
  return (
    <div className="d-flex flex-column w-100 ">
      <div className="d-flex flex-column w-100 p-4 m-0 gap-6">
        {protocoloDados.protocolo && (
          <Notification
            title={protocoloDados.status}
            nprotocolo={protocoloDados.protocolo}
            dtSolicitacao={protocoloDados.dtSolicitacao}
            status={protocoloDados.status}
            observacao={protocoloDados.observacao}
          />
        )}

        <div className="row m-0 gap-sm-6">
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Código" value={dadosDoCadastro.codigo} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Código antigo" value={dadosDoCadastro.codigoAntigo} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Situação" value={dadosDoCadastro.situacao} />
          </div>
        </div>
        <div className="row m-0 gap-sm-6">
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Origem" value={dadosDoCadastro.origem} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Nome cartão" value={dadosDoCadastro.nomeCartao} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Código cartão" value={dadosDoCadastro.codigoCartao} />
          </div>
        </div>
        <div className="row m-0 gap-sm-6">
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="LCAT" value={dadosDoCadastro.lcat} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Nome LCAT" value={dadosDoCadastro.nomeLcat} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Nome" value={dadosDoCadastro.nome} />
          </div>
        </div>
        <div className="row m-0 gap-sm-6">
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Sexo" value={dadosDoCadastro.sexo} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="CPF" value={dadosDoCadastro.cpf} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Nascimento" value={dadosDoCadastro.nascimento} />
          </div>
        </div>
        <div className="row m-0 gap-sm-6">
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="PIS" value={dadosDoCadastro.pis} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="CBO" value={dadosDoCadastro.cbo} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Estado Civil" value={dadosDoCadastro.estadoCivil} />
          </div>
        </div>
        <div className="row m-0 gap-sm-6">
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Data do casamento" value={dadosDoCadastro.dataCasamento} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="RG" value={dadosDoCadastro.rg} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="País" value={dadosDoCadastro.pais} />
          </div>
        </div>
        <div className="row m-0 gap-sm-6">
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Nacionalidade" value={dadosDoCadastro.nacionalidade} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText
              label="Órgão emissor"
              value={dadosDoCadastro.orgaoEmissor}
            />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Nome da Mãe" value={dadosDoCadastro.nomeMae} />
          </div>
        </div>
        <div className="row m-0 gap-sm-6">
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Data da inclusão" value={dadosDoCadastro.dataInclusao} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Data da adesão" value={dadosDoCadastro.dataAdesao} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Data da exclusão" value={dadosDoCadastro.dataExclusao} />
          </div>
        </div>
        <div className="row m-0 gap-sm-6">
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Motivo da exclusão" value={dadosDoCadastro.motivoExclusao} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Data da devolução do cartão" value={dadosDoCadastro.dataDevolucaoCartao} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Tipo" value={dadosDoCadastro.tipo} />
          </div>
        </div>
        <div className="row m-0 gap-sm-6">
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Grau de dependência" value={dadosDoCadastro.grauDependencia} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Matrícula" value={dadosDoCadastro.matricula} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Rede" value={dadosDoCadastro.rede} />
          </div>
        </div>
        <div className="row m-0 gap-sm-6">
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Limite no Plano" value={dadosDoCadastro.limitePlano} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Contrato Administradora" value={dadosDoCadastro.contratoAdministradora} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Código CCO (ANS)" value={dadosDoCadastro.codigoCcoAns} />
          </div>
        </div>
        <div className="row m-0 gap-sm-6">
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Dias em atraso" value={dadosDoCadastro.diasAtraso} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Situação inadimplência" value={dadosDoCadastro.situacaoInadimplencia} />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText label="Data inadimplência" value={dadosDoCadastro.dataInadimplencia} />
          </div>
        </div>
        <div className="row m-0 gap-sm-6">
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText
              label="Nº do Cartão Nacional de Saúde"
              value={dadosDoCadastro.numeroCartaoNacionalSaude}
            />
          </div>
          <div className="col-md-8 col-sm-12 p-0">
            <FieldText
              label="Nº da matrícula do beneficiário no plano privado de assistência à saúde"
              value={dadosDoCadastro.numeroMatriculaBeneficiario}
            />
          </div>
        </div>
        <div className="row m-0 gap-sm-6">
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText
              label="Registro Operadora ANS"
              value={dadosDoCadastro.registroOperadoraAns1}
            />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText
              label="Registro Operadora ANS"
              value={dadosDoCadastro.registroOperadoraAns2}
            />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText
              label="Operadora"
              value={dadosDoCadastro.operadora}
            />
          </div>
        </div>
        <div className="row m-0 gap-sm-6">
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText
              label="Administradora de benefácios"
              value={dadosDoCadastro.administradoraBeneficios}
            />
          </div>
          <div className="col-md-4 col-sm-12 p-0">
            <FieldText
              label="Nome da pessoa jurídica contratante do plano coletivo"
              value={dadosDoCadastro.nomePessoaJuridica}
            />
          </div>
        </div>
      </div>
    </div>
  );
};