import { useEffect, useState } from 'react';

export const useQueryParams = () => {
  const [params, setParams] = useState({});
  function getUrlParams() {
    const url = window.location.href;

    const hasParams = url.includes('?');

    if (!hasParams) return '';
    const [, query] = url.split('?');
    const queryToArray = query.split('&');

    const queryParams = queryToArray
      .map(param => {
        const [key, value] = param.split('=');
        return { [key]: value };
      })
      .reduce((acc, curr) => {
        const [key, value] = Object.entries(curr)[0];
        acc[key] = value;
        return acc;
      }, {});
    setParams(queryParams);
  }

  const getparam = field => {
    return params[field] || '';
  };

  useEffect(() => {
    getUrlParams();
  }, []);
  return { params, getparam };
};
