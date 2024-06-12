/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { dayjs, formatDate } from '../../../utils/date';
import Accordion from './Accordion';
import { useState} from "react"


import "./lista.scss"
const mock = [
  {
    dataDigitacao: "2022-11-08T00:00:00.000+00:00",
    codigoServico: null,
    nomeServico: null,
    nomePrestador: "Connect Care",
    nomeEspecialidade: "Clinica Medica",
    guia: "633524",
    nomeSolicitante: "Connect Care",
    tipoGuia: "TELESSAÚDE",
    numeroSolicitacao: "633524P00097501795",
  },
  {
    dataDigitacao: "2022-12-08T00:00:00.000+00:00",
    codigoServico: null,
    nomeServico: null,
    nomePrestador: "Augusto e Bortolotti Clinica Medica Ltda Me",
    nomeEspecialidade: "Endocrinologia E Metabologia",
    guia: "1009988",
    nomeSolicitante: "Augusto e Bortolotti Clinica Medica Ltda Me",
    tipoGuia: "CONSULTA",
    numeroSolicitacao: "1009988P00002599252",
  },
  {
    dataDigitacao: "2023-02-11T00:00:00.000+00:00",
    codigoServico: null,
    nomeServico: null,
    nomePrestador: "Ortocity Servicos Medicos Socied Civil",
    nomeEspecialidade: "Ortopedia e Traumatologia",
    guia: "1045633",
    nomeSolicitante: "Ortocity Servicos Medicos Socied Civil",
    tipoGuia: "CONSULTA",
    numeroSolicitacao: "1045633P00055577977",
  },
  {
    dataDigitacao: "2023-02-11T00:00:00.000+00:00",
    codigoServico: null,
    nomeServico: null,
    nomePrestador: "Ortocity Servicos Medicos Socied Civil",
    nomeEspecialidade: "CLINICA MEDICA",
    guia: "52444710",
    nomeSolicitante: "Ortocity Servicos Medicos Socied Civil",
    tipoGuia: "INTERNAÇÃO",
    numeroSolicitacao: "52444710P00055577977",
  },
  {
    dataDigitacao: "2023-02-17T00:00:00.000+00:00",
    codigoServico: null,
    nomeServico: null,
    nomePrestador: "Ortocity Servicos Medicos Socied Civil",
    nomeEspecialidade: "Ortopedia e Traumatologia",
    guia: "52484980",
    nomeSolicitante: "Ortocity Servicos Medicos Socied Civil",
    tipoGuia: "SADT",
    numeroSolicitacao: "52484980P00055577977",
  },
  {
    dataDigitacao: "2023-03-27T00:00:00.000+00:00",
    codigoServico: null,
    nomeServico: null,
    nomePrestador: "Gto Grupo de Traumatologia e Ortopedia",
    nomeEspecialidade: "CLINICA MEDICA",
    guia: "1011364",
    nomeSolicitante: "Gto Grupo de Traumatologia e Ortopedia",
    tipoGuia: "SADT",
    numeroSolicitacao: "1011364P00002387891",
  },
  {
    dataDigitacao: "2023-03-29T00:00:00.000+00:00",
    codigoServico: null,
    nomeServico: null,
    nomePrestador: "Gto Grupo de Traumatologia e Ortopedia",
    nomeEspecialidade: "CLINICA MEDICA",
    guia: "1011384",
    nomeSolicitante: "Gto Grupo de Traumatologia e Ortopedia",
    tipoGuia: "SADT",
    numeroSolicitacao: "1011384P00002387891",
  },
  {
    dataDigitacao: "2023-06-13T00:00:00.000+00:00",
    codigoServico: null,
    nomeServico: null,
    nomePrestador: "Instituto Bem Estar",
    nomeEspecialidade: "Endocrinologia E Metabologia",
    guia: "1026726",
    nomeSolicitante: "Instituto Bem Estar",
    tipoGuia: "CONSULTA",
    numeroSolicitacao: "1026726P00002382296",
  },
  {
    dataDigitacao: "2022-09-17T00:00:00.000+00:00",
    codigoServico: null,
    nomeServico: null,
    nomePrestador: "Gto Grupo de Traumatologia e Ortopedia",
    nomeEspecialidade: "CLINICA MEDICA",
    guia: "1009646",
    nomeSolicitante: "Gto Grupo de Traumatologia e Ortopedia",
    tipoGuia: "SADT",
    numeroSolicitacao: "1009646P00002387891",
  },
  {
    dataDigitacao: "2022-09-17T00:00:00.000+00:00",
    codigoServico: null,
    nomeServico: null,
    nomePrestador: "Gto Grupo de Traumatologia e Ortopedia",
    nomeEspecialidade: "CLINICA MEDICA",
    guia: "1009648",
    nomeSolicitante: "Gto Grupo de Traumatologia e Ortopedia",
    tipoGuia: "SADT",
    numeroSolicitacao: "1009648P00002387891",
  },
  {
    dataDigitacao: "2023-02-11T00:00:00.000+00:00",
    codigoServico: null,
    nomeServico: null,
    nomePrestador: "Ortocity Servicos Medicos Socied Civil",
    nomeEspecialidade: "CLINICA MEDICA",
    guia: "52444710",
    nomeSolicitante: "Ortocity Servicos Medicos Socied Civil",
    tipoGuia: "INTERNAÇÃO",
    numeroSolicitacao: "52444710P00055577977",
  },
  {
    dataDigitacao: "2023-07-07T00:00:00.000+00:00",
    codigoServico: null,
    nomeServico: null,
    nomePrestador: "Delboni Auriemo",
    nomeEspecialidade: "Clinica Medica",
    guia: "1100000024649904",
    nomeSolicitante: "Delboni Filial Barueri",
    tipoGuia: "SADT",
    numeroSolicitacao: "1100000024649904P00061486650",
  },
  {
    dataDigitacao: "2023-07-07T00:00:00.000+00:00",
    codigoServico: null,
    nomeServico: null,
    nomePrestador: "Delboni Auriemo",
    nomeEspecialidade: "Clinica Medica",
    guia: "1100000024649905",
    nomeSolicitante: "Delboni Filial Barueri",
    tipoGuia: "SADT",
    numeroSolicitacao: "1100000024649905P00061486650",
  },
  {
    dataDigitacao: "2023-10-14T00:00:00.000+00:00",
    codigoServico: null,
    nomeServico: null,
    nomePrestador: "Dr. On-Line Telemedicina",
    nomeEspecialidade: "Clinica Medica",
    guia: "312983535",
    nomeSolicitante: "Dr. On-Line Telemedicina",
    tipoGuia: "TELESSAÚDE",
    numeroSolicitacao: "312983535P00097505339",
  },
];
export const Lista = () => {
  const [form, setForm] = useState({
    nome:"", endereco:""
  })
  const [errors, setErrors] = useState({ nome: "" })


  const handleValidate = async () => {
    let error = { ...errors }
    let flagError = 0

    if (!form.nome) {
      error.nome = "Nome é obrigatório";
      flagError += 1;
    }

    setErrors(error)

    if (flagError > 0) return 
    
    await handleSubmit()
  }

  const handleSubmit = async() => {
    
  }


  return (
    <div className="container-lista">
      <TextField error={errors.nome} onFocus={() => setErrors({...errors, nome:""})} />
       
    </div>
  );
};


const TextField = ({label, value, onChange, error, onFocus}) => {
  return (
    <div>
      <label className={`${error&& "error"}`}>{label}</label>
      <input value={value} onChange={onChange} onFocus={onFocus} type="text" />
      {error && <span className="">{error}</span>}
    </div>
  );
}



