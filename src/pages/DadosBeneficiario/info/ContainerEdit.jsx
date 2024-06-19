/* eslint-disable react/prop-types */
export const ContainerEdit = ({ title, onSave, onCancel, children }) => {
  return (
    <div className="container-edit-dados position-relative">
      <div className="header-edit">
        <span className="title">{title}</span>
        <span className="info">* Campos obrigatórios</span>
      </div>
      <div className="content-form  d-flex gap-5 flex-column ">
        {children}
        <div className="actions">
          <button className="btn-cancelar" onClick={onCancel}>
            Cancelar
          </button>
          <button className="btn-salvar" onClick={onSave}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};
