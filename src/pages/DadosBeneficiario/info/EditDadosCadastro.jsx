/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextField } from "../TextField";
import { CustomSelect } from "../customSelect/CustomSelect"
import "./editDadosCadastro.scss";
import { ContainerEdit } from "./ContainerEdit";
import { Mask, mascaraRG } from "../../../utils/mask";
import { ShowModal } from "./ShowModal";

export const EditDadosCadastro = ({
  handleCloseEdit,
  generateProtocolo,
  protocoloDados,
  dadosDoCadastro,
}) => {
  const [formData, setFormData] = useState({
    nome: dadosDoCadastro.nome,
    nascimento: dadosDoCadastro.nascimento,
    cpf: dadosDoCadastro.cpf,
    pis: dadosDoCadastro.pis,
    rg: dadosDoCadastro.rg,
    orgaoEmissor: dadosDoCadastro.orgaoEmissor,
    estadoCivil: dadosDoCadastro.estadoCivil,
    dataCasamento: dadosDoCadastro.dataCasamento,
    nomeMae: dadosDoCadastro.nomeMae,
  });
  const [showError, setShowError] = useState({
    cpf: false,
    pis: false,
    rg: false,
    orgaoEmissor: false,
    dataCasamento: false,
    nomeMae: false,
  });
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name)
    if (name === "cpf") {
      const cpfValido = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value.slice(0, 14));
      if (!cpfValido) {
        setShowError((prevState) => ({ ...prevState, cpf: true }));
      } else {
        setShowError((prevState) => ({ ...prevState, cpf: false }));
      }
    }

    if (name === "pis") {
      const pisValido = /^\d{3}\.\d{5}\.\d{2}\.\d{1}$/.test(value.slice(0, 14));
      if (!pisValido) {
        setShowError((prevState) => ({ ...prevState, pis: true }));
      } else {
        setShowError((prevState) => ({ ...prevState, pis: false }));
      }
    }

    if (name === "rg") {
      const rgValido8 = /^\d{1,2}\.\d{3}\.\d{3}$/.test(mascaraRG(value));
      const rgValido9 = /^\d{1,2}\.\d{3}\.\d{3}-\d{1}$/.test(mascaraRG(value));
      const rgValido10 = /^\d{1,2}\.\d{3}\.\d{3}-\d{2}$/.test(mascaraRG(value));
      if (rgValido9 || rgValido8 || rgValido10) {
        setShowError((prevState) => ({ ...prevState, rg: false }));
      } else {
        setShowError((prevState) => ({ ...prevState, rg: true }));
      }
    }
    if (name === "orgaoEmissor" && !value.length) {
      setShowError((prevState) => ({ ...prevState, orgaoEmissor: true }));
    } else {
      setShowError((prevState) => ({ ...prevState, orgaoEmissor: false }));
    }

    if (name === "dataCasamento") {
      const dataValida = /^\d{2}\/\d{2}\/\d{4}$/.test(value.slice(0, 10));
      if (!dataValida) {
        setShowError((prevState) => ({ ...prevState, dataCasamento: true }));
      } else {
        setShowError((prevState) => ({ ...prevState, dataCasamento: false }));
      }
    }
    if (name === "nomeMae" && !value.length) {
      setShowError((prevState) => ({ ...prevState, nomeMae: true }));
    } else {
      setShowError((prevState) => ({ ...prevState, nomeMae: false }));
    }

    setFormData({ ...formData, [name]: value });
  };

  const onSave = () => {
    let hasError = false;
    const newShowError = { ...showError };

    Object.keys(showError).forEach((key) => {
      if (!formData[key] && !showError[key]) {
        newShowError[key] = true;
        hasError = true;
      }
    });

    setShowError(newShowError);
    if (Object.values(showError).includes(true)) {
      return;
    }
    if (!hasError) {
      console.log("Data saved:", formData);
      setShowModalConfirm(true);
    }
  };

  const onCancel = () => {
    console.log("Edit canceled");
    handleCloseEdit();
  };

  const handleSaveModalProsserguir = async () => {
    setLoading(true);
    await generateProtocolo()
      .then(() => {
        setShowModalConfirm(false);
        setShowModalUpdate(true);
      })
      .catch(() => { })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <ContainerEdit
      title={"Dados do cadastro"}
      onSave={onSave}
      onCancel={onCancel}>
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
        <div className="container-textfield w-100">
          <TextField
            label={"CPF"}
            name={"cpf"}
            onChange={handleChange}
            value={Mask("000.000.000-00", formData.cpf)}
            required
          />
          {showError.cpf && (<span className="dados-beneficiario-formulario-erro">Insira um cpf valido.</span>)}
        </div>
        <div className="container-textfield w-100">
          <TextField
            label={"PIS"}
            name={"pis"}
            onChange={handleChange}
            value={Mask("000.00000.00.0", formData.pis).slice(0, 14)}
            required
          />
          {showError.pis && (<span className="dados-beneficiario-formulario-erro">Insira um pis valido.</span>)}
        </div>
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <div className="container-textfield w-100">
          <TextField
            label={"RG"}
            name={"rg"}
            onChange={handleChange}
            value={mascaraRG(formData.rg)}
            required
          />
          {showError.rg && (<span className="dados-beneficiario-formulario-erro">Insira um rg valido.</span>)}
        </div>
        <div className="container-textfield w-100">
          <TextField
            label={"Orgão Emissor"}
            name={"orgaoEmissor"}
            onChange={handleChange}
            value={formData.orgaoEmissor}
            required
          />
          {showError.orgaoEmissor && (<span className="dados-beneficiario-formulario-erro">Insira um orgão emissor valido.</span>)}
        </div>
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <div className="container-textfield w-100 dados-beneficiario-cadastro-select">
          <CustomSelect
            id="especialidade"
            title={"Estado Civil"}
            placeholder={formData.estadoCivil}
            suggestions={[{ label: "Solteiro(a)", value: "Solteiro(a)" }, { label: "Casado(a)", value: "Casado(a)" }, { label: "Divorciado(a)", value: "Divorciado(a)" }, { label: "Viúvo(a)", value: "Viúvo(a)" }]}
            value={formData.estadoCivil}
            onChange={(e) => setFormData((prevState) => ({ ...prevState, estadoCivil: e }))}
            onChangeInput={(e) => setFormData((prevState) => ({ ...prevState, estadoCivil: e }))}
            type="autocomplete"
            required={true}
          />
        </div>
        <div className="container-textfield w-100">
          <TextField
            label={"Data do casamento"}
            name={"dataCasamento"}
            onChange={handleChange}
            value={Mask("00/00/0000", formData.dataCasamento)}
            required
          />
          {showError.dataCasamento && (<span className="dados-beneficiario-formulario-erro">Insira uma data valida.</span>)}
        </div>
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <div className="container-textfield w-100">
          <TextField
            label={"Nome da Mãe"}
            name={"nomeMae"}
            onChange={handleChange}
            value={formData.nomeMae}
            required
          />
          {showError.nomeMae && (<span className="dados-beneficiario-formulario-erro">campo obrigatorio.</span>)}
        </div>
        <TextField hidden />
      </div>
      {showModalConfirm && (
        <ShowModal
          title={"Atualização cadastral"}
          text={
            "Você está prestes a alterar seus dados cadastrais. Tem certeza que deseja prosseguir?"
          }
          text_sucess={"Sim, prosseguir"}
          onClose={() => setShowModalConfirm(false)}
          onSave={handleSaveModalProsserguir}
          loading={loading}
        />
      )}
      {showModalUpdate && (
        <ShowModal
          title={`Atualização cadastral`}
          text={`Sua solicitação de alteração dos dados gerou o protocolo <strong>Nº ${protocoloDados}.</strong> A validação será efetuada em até 2 dias úteis.`}
          text_failure="Fechar"
          className={"consulta-beneficiario-show-modal-container-grande"}
          onClose={() => {
            setShowModalUpdate(false), handleCloseEdit(true);
          }}
        />
      )}
    </ContainerEdit>
  );
};
