import React, { useEffect, useState } from 'react';

export const Modal = ({ show, children }) => {
  const [isVisible, setIsVisible] = useState(show);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (show) {
      document.body.classList.add('no-scroll');
      setIsVisible(true);
      setAnimationClass('un-fade-in');
    } else {
      setAnimationClass('un-fade-out');
      document.body.classList.remove('no-scroll');
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [show]);

  return (
    <div className="un-modal">
      {(isVisible || animationClass === 'un-fade-out') && (
        <div className={`un-modal-overlay ${show ? 'un-fade-in' : 'un-fade-out'}`}>
          <div className="un-modal-content">{children}</div>
        </div>
      )}
    </div>
  );
};
