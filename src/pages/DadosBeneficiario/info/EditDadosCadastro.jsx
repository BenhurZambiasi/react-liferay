import { useState } from "react";
import { TextField } from "../TextField";

import "./editDadosCadastro.scss";
import { ContainerEdit } from "./ContainerEdit";

export const EditDadosCadastro = () => {
  const [formData, setFormData] = useState({
    nome: "",
    nascimento: "",
    cpf: "",
    pis: "",
    rg: "",
    orgaoEmissor: "",
    estadoCivil: "",
    dtCasamento: "",
    nomeMae: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ContainerEdit title={"Dados do cadastro"}>
      <div className="d-flex gap-5 flex-wrap">
        <TextField
          label={"Nome"}
          name={"nome"}
          onChange={handleChange}
          value={formData.nome}
          disabled
        />
        <TextField
          label={"Nascimento"}
          name={"nascimento"}
          onChange={handleChange}
          value={formData.nascimento}
          disabled
        />
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <TextField
          label={"CPF"}
          name={"cpf"}
          onChange={handleChange}
          value={formData.cpf}
          required
        />
        <TextField
          label={"PIS"}
          name={"pis"}
          onChange={handleChange}
          value={formData.pis}
          required
        />
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <TextField
          label={"RG"}
          name={"rg"}
          onChange={handleChange}
          value={formData.rg}
          required
        />
        <TextField
          label={"Orgão Emissor"}
          name={"orgaoEmissor"}
          onChange={handleChange}
          value={formData.orgaoEmissor}
          required
        />
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <TextField
          label={"Estado Civil"}
          name={"estadoCivil"}
          onChange={handleChange}
          value={formData.estadoCivil}
          required
        />
        <TextField
          label={"Data do casamento"}
          name={"dtCasamento"}
          onChange={handleChange}
          value={formData.dtCasamento}
          required
        />
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <TextField
          label={"Nome da Mãe"}
          name={"nomeMae"}
          onChange={handleChange}
          value={formData.nomeMae}
          required
        />
        <TextField hidden />
      </div>
    </ContainerEdit>
  );
};
