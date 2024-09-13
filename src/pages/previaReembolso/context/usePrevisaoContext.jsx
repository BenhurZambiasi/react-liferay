import React, { createContext, useState, useContext } from 'react';
import { FORM_TYPE, STEPS } from '../constants/constants';
import { Modal } from '../../../components/modal/Modal';
import { ModalSair } from '../components/modalSair/modalSair';

const PrevisaoContext = createContext({
  dadosBeneficiario: {
    nome: '',
    cpf: '',
    plano: '',
    cartao: '',
  },
  formConsultaMedica: { especialidade: '', dataPrevista: '' },
  handleChangeFormConsultaMedica: ({ target: { value, name } }) => {},
  formOutrosProcedimentos: { tipoDeProcedimento: '', especialidade: '', valorTotal: '', orcamento: [] },
  handleChangeFormOutrosProcedimentos: ({ target: { value, name } }) => {},
  formType: FORM_TYPE.CONSULTA_MEDICA,
  handleChangeFormType: type => {},
  step: STEPS.FROMULARIO,
  handleChangeStep: step => {},
  handleOpenModalSair: () => {},
});

/**
 * @param {React.ReactNode} children
 * @param {Object} dadosBeneficiario
 * @param {string} dadosBeneficiario.nome
 * @param {string} dadosBeneficiario.cpf
 * @param {string} dadosBeneficiario.plano
 * @param {string} dadosBeneficiario.cartao
 */
export const PrevisaoProvider = ({ children, dadosBeneficiario }) => {
  const [step, setStep] = useState(STEPS.FROMULARIO);

  const [formType, setFormType] = useState(FORM_TYPE.CONSULTA_MEDICA);

  const [formConsultaMedica, setFormConsultaMedica] = useState({
    especialidade: '',
    dataPrevista: '',
  });
  const [formOutrosProcedimentos, setFormOutrosProcedimentos] = useState({
    tipoDeProcedimento: '',
    especialidade: '',
    valorTotal: '',
    orcamento: [],
  });

  const [showModalSair, setShowModalSair] = useState(false);

  const handleChangeFormConsultaMedica = e => {
    setFormConsultaMedica({ ...formConsultaMedica, [e.target.name]: e.target.value });
  };

  const handleChangeFormOutrosProcedimentos = e => {
    setFormOutrosProcedimentos({ ...formOutrosProcedimentos, [e.target.name]: e.target.value });
  };

  const handleChangeStep = stepValue => {
    setStep(stepValue);
  };

  const handleChangeFormType = typevalue => {
    setFormType(typevalue);
    setFormOutrosProcedimentos({
      tipoDeProcedimento: '',
      especialidade: '',
      valorTotal: '',
      orcamento: [],
    });
    setFormConsultaMedica({
      especialidade: '',
      dataPrevista: '',
    });
  };

  const handleOpenModalSair = () => {
    setShowModalSair(true);
  };

  return (
    <PrevisaoContext.Provider
      value={{
        formConsultaMedica,
        handleChangeFormConsultaMedica,
        dadosBeneficiario,
        step,
        handleChangeStep,
        formType,
        handleChangeFormType,
        handleChangeFormOutrosProcedimentos,
        formOutrosProcedimentos,
        handleOpenModalSair,
      }}
    >
      <Modal show={showModalSair}>
        <ModalSair onClose={() => setShowModalSair(false)} />
      </Modal>
      {children}
    </PrevisaoContext.Provider>
  );
};

export const usePrevisaoContext = () => {
  return useContext(PrevisaoContext);
};
