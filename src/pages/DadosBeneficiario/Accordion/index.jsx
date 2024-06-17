/* eslint-disable react/prop-types */
import "./accordion.scss";

export const Accordion = ({ children, onEdit, title }) => {
  return (
    <details>
      <summary>
        <span className="title-accordion">{title}</span>
        <div className="d-flex align-items-center gap-6">
          {onEdit && (
            <button
              className="d-flex align-items-center gap-2 btn-edit"
              onClick={onEdit}>
              <span className="material-symbols-outlined">edit</span>
              Alterar dados
            </button>
          )}

          <span className="material-symbols-outlined arrow-ac">
            expand_more
          </span>
        </div>
      </summary>
      <div>
        {onEdit && (
          <div className="ctn-btn-edit">
            <button
              className="d-flex align-items-center gap-2 btn-edit-mobile"
              onClick={onEdit}>
              <span className="material-symbols-outlined">edit</span>
              Alterar dados
            </button>
          </div>
        )}
        {children}
      </div>
    </details>
  );
};
