import React, { useEffect, useRef } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickoutSide';

export const Drawer = ({
  isOpen,
  onClose,
  placement = 'right',
  width = '50%',
  maxWidth = 'unset',
  title,
  children,
}) => {
  const ref = useOnClickOutside(event => {
    if (
      event.target.classList.contains('un-container-drawer-overlay') ||
      event.target.classList.contains('un-container-drawer')
    ) {
      onClose();
    }
  });

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
      const overlay = document.createElement('div');
      overlay.className = 'un-container-drawer-overlay';
      document.body.appendChild(overlay);
    } else {
      document.body.classList.remove('no-scroll');
      const overlay = document.querySelector('.un-container-drawer-overlay');
      if (overlay) {
        document.body.removeChild(overlay);
      }
    }
  }, [isOpen]);

  return (
    <div className="un-container-drawer">
      <div
        ref={ref}
        data-testid={'drawer'}
        className={`drawer ${isOpen ? 'open' : ''} ${placement}`}
        style={{ width, maxWidth }}
      >
        {title && (
          <div className="title-drawer d-flex flex-column c-px-md-48 c-px-sm-32 c-px-20">
            <span role="button" onClick={onClose} className="material-symbols-outlined d-flex justify-content-end">
              close
            </span>
            <span>{title}</span>
          </div>
        )}

        {isOpen && children}
      </div>
    </div>
  );
};
