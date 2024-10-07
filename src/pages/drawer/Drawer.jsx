import React, { useEffect, useRef } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickoutSide';

const genereteOverlay = () => {
  const existsOverlay = document.querySelector('.un-drawer-overlay');
  if (!existsOverlay) {
    const overlay = document.createElement('div');
    overlay.className = 'un-drawer-overlay';
    document.body.appendChild(overlay);
  }
};

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
    if (event.target.classList.contains('un-drawer-overlay') || event.target.classList.contains('un-drawer')) {
      onClose();
    }
  });

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
      genereteOverlay();
    }
  }, [isOpen]);

  return (
    <div className="un-drawer bg-transparent">
      <div
        ref={ref}
        data-testid={'drawer'}
        className={`drawer ${isOpen ? 'open' : ''} ${placement}`}
        style={{ width, maxWidth }}
      >
        {title && (
          <div className="title-drawer d-flex flex-column c-px-md-48 c-px-sm-32 c-px-20">
            <span
              role="button"
              onClick={onClose}
              className="material-symbols-outlined d-flex justify-content-end close-drawer"
            >
              close
            </span>
            {typeof title === 'string' ? <span className="title">{title}</span> : title()}
          </div>
        )}

        {isOpen && children}
      </div>
    </div>
  );
};
