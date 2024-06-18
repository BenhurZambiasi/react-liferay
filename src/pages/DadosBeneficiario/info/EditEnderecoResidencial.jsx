import { useState, useEffect } from "react";
import { fetchAddress } from "../../../services/api";
import { TextField } from "../TextField";
import { FileField } from "../inputFile/inputFile";

import { ContainerEdit } from "./ContainerEdit";
import { Mask } from "../../../utils/mask";

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
    comprovante: [],
  });
  const [comprovantes, setComprovantes] = useState([]);

  useEffect(() => {
    const fetchAndSetAddress = async () => {
      const formattedCep = formData.cep.replace("-", ""); // Remove o hífen, se houver
      if (formattedCep.length === 8) {
        const addressData = await fetchAddress(formattedCep);
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

    const debounceFetch = setTimeout(fetchAndSetAddress, 300);

    return () => clearTimeout(debounceFetch);
  }, [formData.cep]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "comprovante") {
      setFormData((prevData) => {
        const updatedData = {
          ...prevData,
          [name]: [...prevData[name], ...files],
        };
        console.log(updatedData.comprovante);
        return updatedData;
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <ContainerEdit title={"Endereço residencial"}>
      <div className="form-check d-flex align-items-center">
        <input type="checkbox" id="entregaCorrespondencias" name="entregaCorrespondencias" />
        <label htmlFor="entregaCorrespondencias" className="ml-2 mb-0">Desejo que as demais correspondências sejam entregues neste endereço</label>
      </div>
      <div className="d-flex gap-5 endereco-residencial-edit-container-cep">
        <TextField
          label={"Cep"}
          name={"cep"}
          onChange={handleChange}
          value={Mask("000000-00", formData.cep)}
          required
        />
        <div className="d-flex align-items-center endereco-residencial-edit-limpar-form" onClick={() => setFormData({ ...formData, endereco: "", bairro: "", municipio: "", uf: "", cep: "" })}>
          <div className="d-flex align-items-center">
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
          required
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
          label={"Número"}
          name={"numero"}
          onChange={handleChange}
          value={formData.numero}
          required
        />
        <TextField
          label={"Complemento"}
          name={"complemento"}
          onChange={handleChange}
          value={formData.complemento}
        />
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <TextField
          label={"Telefone"}
          name={"telefone"}
          onChange={handleChange}
          value={formData.telefone}
          required
        />
        <TextField
          label={"Ramal"}
          name={"ramal"}
          onChange={handleChange}
          value={formData.ramal}
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
      <div>
        <div className="form-reembolso">
          <FileField
            title="Anexar comprovante de endereço residencial"
            required
            placeholder="Selecione um arquivo"
            onChange={setComprovantes}
            icon={() => (
              <span className="material-symbols-outlined position-static">attach_file</span>
            )}
          />
        </div>
      </div>
    </ContainerEdit>
  );
};