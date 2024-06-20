import { useState, useEffect } from "react";
import { fetchAddress } from "../../../services/api";
import { TextField } from "../TextField";
import { FileField } from "../inputFile/inputFile";

import { ContainerEdit } from "./ContainerEdit";
import { Mask } from "../../../utils/mask";
import { ShowModal } from "./ShowModal";

export const EditEnderecoResidencial = ({ handleCloseEdit }) => {
  const [formData, setFormData] = useState({
    cep: "",
    endereco: "",
    bairro: "",
    municipio: "",
    uf: "",
    numero: "",
    complemento: "",
    telefone: "",
    ramal: "",
    celular: "",
    email: "",
    comprovante: [],
  });
  const [showError, setShowError] = useState({
    cep: false,
    numero: false,
    telefone: false,
    celular: false,
    email: false,
    comprovante: false,
  });
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);

  useEffect(() => {
    const fetchAndSetAddress = async () => {
      const formattedCep = formData.cep.replace("-", "");
      if (formattedCep.length === 8) {
        const addressData = await fetchAddress(formattedCep);
        if (addressData) {
          setShowError({ ...showError, cep: false });
          setFormData((prevData) => ({
            ...prevData,
            endereco: addressData.street,
            bairro: addressData.neighborhood,
            municipio: addressData.city,
            uf: addressData.state,
          }));
        } else {
          setShowError({ ...showError, cep: true });
        }
      }
    };

    const debounceFetch = setTimeout(fetchAndSetAddress, 300);

    return () => clearTimeout(debounceFetch);
  }, [formData.cep]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "numero" && !value.length) {
      setShowError({ ...showError, numero: true });
    } else {
      setShowError({ ...showError, numero: false });
    }
    if (name === "telefone") {
      const telefoneValido = /^\([1-9]{2}\) [2-9][0-9]{3,4}-[0-9]{4}$/.test(value) || /^\([1-9]{2}\) 9[0-9]{4}-[0-9]{4}$/.test(value);
      if (!telefoneValido && value.length < 16) {
        setShowError({ ...showError, telefone: true });
      } else {
        setShowError({ ...showError, telefone: false });
      }
    }
    if (name === "celular") {
      const celularValido = /^\([1-9]{2}\) [2-9][0-9]{3,4}-[0-9]{4}$/.test(value) || /^\([1-9]{2}\) 9[0-9]{4}-[0-9]{4}$/.test(value);
      if (!celularValido && value.length < 16) {
        setShowError({ ...showError, celular: true });
      } else {
        setShowError({ ...showError, celular: false });
      }
    }
    if (name === "email") {
      const emailValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
      if (!emailValido && value.length < 50) {
        setShowError({ ...showError, email: true });
      } else {
        setShowError({ ...showError, email: false });
      }
    }
    setFormData({ ...formData, [name]: value });
  };
  const handleClearForm = () => {
    setFormData({ ...formData, endereco: "", bairro: "", municipio: "", uf: "", cep: "" })
    setShowError({ ...showError, cep: false })
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
    handleCloseEdit()
  };
  return (
    <ContainerEdit title={"Endereço residencial"} onSave={onSave} onCancel={onCancel}>
      <div className="form-check d-flex align-items-center">
        <input type="checkbox" id="entregaCorrespondencias" name="entregaCorrespondencias" />
        <label htmlFor="entregaCorrespondencias" className="ml-2 mb-0">Desejo que as demais correspondências sejam entregues neste endereço</label>
      </div>
      <div className="d-flex gap-5 endereco-residencial-edit-container-cep">
        <div className="container-textfield w-100">
          <TextField
            label={"Cep"}
            name={"cep"}
            onChange={handleChange}
            value={Mask("000000-00", formData.cep)}
            required
          />
          {showError.cep && (<span className="dados-beneficiario-formulario-erro">Insira um cep valido.</span>)}
        </div>
        <div className="d-flex align-items-center endereco-residencial-edit-limpar-form">
          <div className="d-flex align-items-center" onClick={() => handleClearForm()}>
            <span className="material-symbols-outlined position-static">
              delete
            </span>
            <span>Limpar endereço</span>
          </div>
        </div>
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <TextField
          label={"Endereço"}
          name={"endereco"}
          onChange={handleChange}
          value={formData.endereco}
          disabled
        />
        <TextField
          label={"Bairro"}
          name={"bairro"}
          onChange={handleChange}
          value={formData.bairro}
          disabled
        />
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <TextField
          label={"Município"}
          name={"municipio"}
          onChange={handleChange}
          value={formData.municipio}
          disabled
        />
        <TextField
          label={"UF"}
          name={"uf"}
          onChange={handleChange}
          value={formData.uf}
          disabled
        />
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <div className="container-textfield w-100">
          <TextField
            label={"Número"}
            name={"numero"}
            onChange={handleChange}
            value={formData.numero}
            required
          />
          {showError.numero && (<span className="dados-beneficiario-formulario-erro">Insira um numero residencial valido.</span>)}
        </div>
        <div className="container-textfield w-100">
          <TextField
            label={"Complemento"}
            name={"complemento"}
            onChange={handleChange}
            value={formData.complemento}
          />
        </div>
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <div className="container-textfield w-100">
          <TextField
            label={"Telefone"}
            name={"telefone"}
            onChange={handleChange}
            value={Mask("(00) 00000-0000", formData.telefone)}
            required
          />
          {showError.telefone && (<span className="dados-beneficiario-formulario-erro">Insira um numero de telefone valido.</span>)}
        </div>
        <div className="container-textfield w-100">
          <TextField
            label={"Ramal"}
            name={"ramal"}
            onChange={handleChange}
            value={formData.ramal}
          />
        </div>
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <div className="container-textfield w-100">
          <TextField
            label={"Celular"}
            name={"celular"}
            onChange={handleChange}
            value={Mask("(00) 00000-0000", formData.celular)}
            required
          />
          {showError.celular && (<span className="dados-beneficiario-formulario-erro">Insira um numero de celular valido.</span>)}
        </div>
        <div className="container-textfield w-100">
          <TextField
            label={"E-mail"}
            name={"email"}
            onChange={handleChange}
            value={formData.email}
            required
          />
          {showError.email && (<span className="dados-beneficiario-formulario-erro">Insira um email valido.</span>)}
        </div>
      </div>
      <div>
        <div className="form-reembolso">
          <FileField
            title="Anexar comprovante de endereço residencial"
            required
            placeholder="Selecione um arquivo"
            onChange={handleChange}
            icon={() => (
              <span className="material-symbols-outlined position-static">attach_file</span>
            )}
          />
          {showError.comprovante && (<span className="dados-beneficiario-formulario-erro">Insira um comprovante valido.</span>)}
        </div>
      </div>

      {showModalConfirm && (
        <ShowModal
          title={"Atualização cadastral"}
          text={"Você está prestes a alterar seus dados cadastrais. Tem certeza que deseja prosseguir?"}
          text_sucess={"Sim, prosseguir"}
          onClose={() => setShowModalConfirm(false)}
          onSave={() => { setShowModalUpdate(true), setShowModalConfirm(false) }}
        />
      )}
      {showModalUpdate && (
        <ShowModal
          title={"Atualização cadastral"}
          text={"Sua solicitação de alteração dos dados gerou o protocolo <strong>Nº 80005236765.</strong> A validação será efetuada em até 2 dias úteis."}
          text_failure="Fechar"
          className={"consulta-beneficiario-show-modal-container-grande"}
          onClose={() => { setShowModalUpdate(false), handleCloseEdit() }}
        />
      )}
    </ContainerEdit>
  );
};