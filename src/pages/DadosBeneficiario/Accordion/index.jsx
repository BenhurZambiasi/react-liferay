/* eslint-disable react/prop-types */
import "./accordion.scss";

const Accordion = ({ children, onEdit, title }) => {
  return (
    <div className="d-flex flex-column gap-3">
      <details>
        <summary>
          <span>{title}</span>
          <div className="d-flex align-items-center gap-6">
            {onEdit && (
              <button
                className="d-flex align-items-center gap-2 btn-edit"
                onClick={onEdit}>
                <span className="material-symbols-outlined arrow-ac">edit</span>
                Alterar dados
              </button>
            )}

            <span className="material-symbols-outlined arrow-ac">
              expand_more
            </span>
          </div>
        </summary>
        <div>{children}</div>
      </details>
    </div>
  );
};

export default Accordion;
