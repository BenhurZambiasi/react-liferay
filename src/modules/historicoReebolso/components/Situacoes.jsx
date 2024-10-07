import React from 'react';
import { STATUS_REEMBOLSO } from '../constants/constants';

export const Situacoes = ({ situacao }) => {
  return (
    <div className="d-flex align-items-center gap-1 text-nowrap tag-situacao" style={STATUS_REEMBOLSO[situacao].style}>
      <span class="material-symbols-outlined">{STATUS_REEMBOLSO[situacao].icon}</span>
      <span>{STATUS_REEMBOLSO[situacao].name}</span>
    </div>
  );
};
