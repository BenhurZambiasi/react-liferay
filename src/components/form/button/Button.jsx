import React, { Fragment } from 'react';

/**
 * @param {Object} params
 * @param {boolean} params.loading
 * @param {ReactNode} params.children
 * @param {"primary"|"secondary"} params.variant
 * @param {string} params.className
 * @param {string} params.icon
 * @param {boolean} params.disabled
 * @param {VoidFunction} params.onClick
 * */
export const Button = ({ variant, onClick, children, loading, className = '', disabled, icon }) => {
  return (
    <button disabled={disabled} data-variant={variant} onClick={onClick} className={`${className} un-btn d-flex`}>
      {loading ? (
        <div className={'loading-btn'} />
      ) : (
        <Fragment>
          {icon && <span className="material-symbols-outlined">{icon}</span>}
          {children}
        </Fragment>
      )}
    </button>
  );
};
