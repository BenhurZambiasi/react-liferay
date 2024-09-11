import IMask from 'imask';
export const mask = (mask, value) => {
  if (!value) return '';

  if (mask === 'currency') {
    return new Intl.NumberFormat('pt-Br', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(value / 100);
  }
  const createMask = IMask.createMask({ mask });
  return createMask.resolve(value);
};

export const mascaraRG = rg => {
  const cleaned = rg.replace(/\D/g, '').slice(0, 10);

  if (cleaned.length === 8) {
    return cleaned.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2.$3');
  } else if (cleaned.length === 9) {
    return cleaned.replace(/(\d{2})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4');
  } else if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  } else {
    return rg;
  }
};
