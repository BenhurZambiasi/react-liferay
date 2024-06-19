/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextField } from "../TextField";
import "./editDadosCadastro.scss";
import { ContainerEdit } from "./ContainerEdit";
import { Mask, mascaraRG } from "../../../utils/mask";
import { ShowModal } from "./ShowModal";

export const EditDadosCadastro = ({
  handleCloseEdit,
  generateProtocolo,
  protocoloDados,
}) => {
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
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSave = () => {
    console.log("Data saved:", formData);
    setShowModalConfirm(true);
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
      .catch(() => {})
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
        <TextField
          label={"CPF"}
          name={"cpf"}
          onChange={handleChange}
          value={Mask("000.000.000-00", formData.cpf)}
          required
        />
        <TextField
          label={"PIS"}
          name={"pis"}
          onChange={handleChange}
          value={Mask("000.00000.00.0", formData.pis)}
          required
        />
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <TextField
          label={"RG"}
          name={"rg"}
          onChange={handleChange}
          value={mascaraRG(formData.rg)}
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
          value={Mask("00/00/0000", formData.dtCasamento)}
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
