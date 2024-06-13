/* eslint-disable react/prop-types */
export const FieldText = ({ label, value }) => {
  return (
    <div className="d-flex flex-column">
      <span>{label}</span>
      <span className="text-break ">
        <b>{value}</b>
      </span>
    </div>
  );
};
