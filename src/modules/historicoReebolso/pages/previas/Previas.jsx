import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const Previas = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};
