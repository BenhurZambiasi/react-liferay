/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { useClickOutside } from '../hooks/useClickOutSide';
import './drawer.scss';

export const Drawer = ({
  isOpen,
  onClose,
  placement = 'right',
  width = '50%',
  maxWidth = 'unset',
  title,
  children,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="container-drawer">
      <div
        ref={ref}
        data-testid={'drawer'}
        className={`drawer ${isOpen ? 'open' : ''} ${placement}`}
        style={{ width, maxWidth }}
      >
        <div className="title-drawer d-flex flex-column">
          <span role="button" onClick={onClose} className="material-symbols-outlined d-flex justify-content-end">
            close
          </span>
          <span>{title}</span>
        </div>
        <div className="content-drawer">{children}</div>
      </div>
    </div>
  );
};
