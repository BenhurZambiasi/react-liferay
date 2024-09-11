import { PrevisaoProvider } from './previaReembolso/context/usePrevisaoContext';
import { Previa } from './previaReembolso/page/previa';
import './style.scss';

export const App = () => {
  const dadosBeneficiario = {
    nome: 'Lídia Maria Dias Scheffer',
    cpf: '12345678900',
    plano: '480996183 - Absoluto Nacional III A',
    cartao: '00568446000654789',
  };
  return (
    <div className="container w-100 mt-3">
      <PrevisaoProvider dadosBeneficiario={dadosBeneficiario}>
        <Previa />
      </PrevisaoProvider>
    </div>
  );
};
