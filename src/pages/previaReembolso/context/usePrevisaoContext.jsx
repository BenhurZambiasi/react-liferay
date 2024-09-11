import React, { createContext, useState, useContext } from 'react';
import { STEPS } from '../constants/steps';

const PrevisaoContext = createContext({
  dadosBeneficiario: {
    nome: '',
    cpf: '',
    plano: '',
    cartao: '',
  },
  formConsultaMedica: { especialidade: '', dataPrevista: '' },
  handleChangeFormConsultaMedica: ({ target: { value, name } }) => {},
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

  const [formConsultaMedica, setFormConsultaMedica] = useState({
    especialidade: '',
    dataPrevista: '',
  });

  const handleChangeFormConsultaMedica = e => {
    setFormConsultaMedica({ ...formConsultaMedica, [e.target.name]: e.target.value });
  };

  const handleChangeStep = step => {
    setStep(step);
  };

  return (
    <PrevisaoContext.Provider
      value={{ formConsultaMedica, handleChangeFormConsultaMedica, dadosBeneficiario, step, handleChangeStep }}
    >
      {children}
    </PrevisaoContext.Provider>
  );
};

export const usePrevisaoContext = () => {
  return useContext(PrevisaoContext);
};
