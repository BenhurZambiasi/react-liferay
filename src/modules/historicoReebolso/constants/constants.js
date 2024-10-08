export const STATUS_REEMBOLSO = {
  Pago: {
    icon: 'check_circle',
    name: 'Pago',
    style: {
      border: '1px solid var(--primary-primary-l-2, #99D6BF)',
      background: 'var(--primary-primary-l-3, #E2F4ED)',
      color: '#00663D',
      borderRadius: '4px',
      padding: '4px 12px 4px 8px',
      cursor: 'default',
      fontFamily: 'Unimed Sans',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '100%',
    },
  },
  'Em Processamento': {
    icon: 'schedule',
    name: 'Em Processamento',
    style: {
      border: '1px solid var(--info-info-l-1, #89A7E0)',
      background: 'var(--info-info-l-2, #EEF2FA)',
      color: '#234584',
      borderRadius: '4px',
      padding: '4px 12px 4px 8px',
      cursor: 'default',
      fontFamily: 'Unimed Sans',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '100%',
    },
  },
  'Pedido Cadastrado': {
    icon: 'schedule',
    name: 'Pedido Cadastrado',
    style: {
      border: '1px solid var(--warning-warning-l-1, #FF8F39)',
      background: 'var(--warning-warning-l-2, #FFF4EC)',
      color: '#B95000',
      borderRadius: '4px',
      padding: '4px 12px 4px 8px',
      cursor: 'default',
      fontFamily: 'Unimed Sans',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '100%',
    },
  },
  'Em Processamento Bancário': {
    icon: 'schedule',
    name: 'Em Processamento Bancário',
    style: {
      border: '1px solid var(--warning-warning-l-1, #FF8F39)',
      background: 'var(--warning-warning-l-2, #FFF4EC)',
      color: '#B95000',
      borderRadius: '4px',
      padding: '4px 12px 4px 8px',
      cursor: 'default',
      fontFamily: 'Unimed Sans',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '100%',
    },
  },
  Indeferido: {
    icon: 'cancel',
    name: 'Pedido Indeferido',
    style: {
      border: '1px solid var(--danger-danger-l-1, #F48989)',
      background: 'var(--danger-danger-l-2, #FEEFEF)',
      color: '#DA1414',
      borderRadius: '4px',
      padding: '4px 12px 4px 8px',
      cursor: 'default',
      fontFamily: 'Unimed Sans',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '100%',
    },
  },

  'Pedido Cancelado': {
    icon: 'cancel',
    name: 'Pedido Cancelado',
    style: {
      border: '1px solid var(--danger-danger-l-1, #F48989)',
      background: 'var(--danger-danger-l-2, #FEEFEF)',
      color: '#DA1414',
      borderRadius: '4px',
      padding: '4px 12px 4px 8px',
      cursor: 'default',
      fontFamily: 'Unimed Sans',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '100%',
    },
  },
};

export const CURRENT_YEAR = `${new Date().getFullYear()}`;

export const LISTA_PERIODOS = Array.from({ length: 10 }).map((_, ind) => {
  return `${+CURRENT_YEAR - ind}`;
});
