import './main.scss';

export const FormControl = ({ children, className = '' }) => {
  return <div className={`un-form-control ${className}`}>{children}</div>;
};
