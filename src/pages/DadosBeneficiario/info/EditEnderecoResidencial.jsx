import { useState } from "react";
import { fetchAddress } from "../../../services/api";
import { TextField } from "../TextField";
import { ContainerEdit } from "./ContainerEdit";

export const EditEnderecoResidencial = () => {
  const [formData, setFormData] = useState({
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    municipio: "",
    uf: "",
    telefone: "",
    ramal: "",
    celular: "",
    email: "",
    comprovante: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "cep" && value.length === 8) {
      const addressData = await fetchAddress(value);
      if (addressData) {
        setFormData((prevData) => ({
          ...prevData,
          endereco: addressData.street,
          bairro: addressData.neighborhood,
          municipio: addressData.city,
          uf: addressData.state,
        }));
      }
    }
  };

  return (
    <ContainerEdit title={"Endereço residencial"}>
      <div className="form-check d-flex align-items-center">
        <input type="checkbox" id="entregaCorrespondencias" name="entregaCorrespondencias" />
        <label htmlFor="entregaCorrespondencias" className="ml-2 mb-0">Desejo que as demais correspondências sejam entregues neste endereço</label>
      </div>
      <div>
        <TextField
          label={"Cep"}
          name={"cep"}
          onChange={handleChange}
          value={formData.cep}
          required
        />
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <TextField
          label={"Endereço"}
          name={"endereco"}
          onChange={handleChange}
          value={formData.endereco}
          disabled
          required
        />
        <TextField
          label={"Número"}
          name={"numero"}
          onChange={handleChange}
          value={formData.numero}
          required
        />
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <TextField
          label={"Complemento"}
          name={"complemento"}
          onChange={handleChange}
          value={formData.complemento}
        />
        <TextField
          label={"Bairro"}
          name={"bairro"}
          onChange={handleChange}
          value={formData.bairro}
          required
          disabled
        />
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <TextField
          label={"Município"}
          name={"municipio"}
          onChange={handleChange}
          value={formData.municipio}
          required
          disabled
        />
        <TextField
          label={"UF"}
          name={"uf"}
          onChange={handleChange}
          value={formData.uf}
          required
          disabled
        />
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <TextField
          label={"Ramal"}
          name={"ramal"}
          onChange={handleChange}
          value={formData.ramal}
        />
        <TextField
          label={"Telefone"}
          name={"telefone"}
          onChange={handleChange}
          value={formData.telefone}
          required
        />
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <TextField
          label={"Celular"}
          name={"celular"}
          onChange={handleChange}
          value={formData.celular}
          required
        />
        <TextField
          label={"E-mail"}
          name={"email"}
          onChange={handleChange}
          value={formData.email}
          required
        />
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <TextField
          label={"Anexar comprovante de endereço residencial"}
          name={"comprovante"}
          onChange={handleChange}
          value={formData.comprovante}
          required
        />
      </div>
    </ContainerEdit>
  );
};