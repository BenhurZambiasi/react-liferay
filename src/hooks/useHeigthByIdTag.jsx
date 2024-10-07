import React, { useState, useEffect } from 'react';

export const useHeightByIdTag = (idTag = '') => {
  const [height, setHeight] = useState(null);
  const [offsetTop, setOffsetTop] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      checkElementLoaded();
    };

    const checkElementLoaded = () => {
      if (idTag) {
        const element = document.getElementById(idTag);
        if (element) {
          setHeight(element.offsetHeight);
          setOffsetTop(element.offsetTop);
          return true;
        }
      }
      return false;
    };

    if (!checkElementLoaded()) {
      const observer = new MutationObserver(() => {
        if (checkElementLoaded()) {
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      window.addEventListener('resize', handleResize);

      return () => {
        observer.disconnect();
        window.removeEventListener('resize', handleResize);
      };
    } else {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [idTag]);

  return { height, offsetTop, total: height + offsetTop };
};
