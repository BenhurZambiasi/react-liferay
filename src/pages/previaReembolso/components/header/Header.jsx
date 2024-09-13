import { STEPS } from '../../constants/constants';
import { usePrevisaoContext } from '../../context/usePrevisaoContext';
import './header.scss';
export const Header = () => {
  const { step, handleChangeStep } = usePrevisaoContext();

  const isResultado = step === STEPS.RESULTADO;

  const handleVoltar = () => {
    if (isResultado) {
      handleChangeStep(step - 1);
    } else {
      window.history.back();
    }
  };

  return (
    <div className="previa-header-container d-flex flex-column gap-8">
      <div role="button" className="previa-header-voltar-container" onClick={handleVoltar}>
        <div className="d-flex align-items-center gap-1">
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="previa-header-voltar">Voltar</span>
        </div>
      </div>
      {!isResultado && (
        <div className="d-flex flex-column text-center gap-4">
          <span className="previa-header-title">Prévia de reembolso</span>
          <span className="previa-header-subtitle">
            Aqui, você pode conferir uma prévia do valor de reembolso para despesas com prestadores fora da nossa rede
            credenciada.
          </span>
        </div>
      )}
    </div>
  );
};
