export const currentYear = new Date().getFullYear();
export const currentMonth = new Date().getMonth() + 1;
export const meses = [
  {
    value: 1,
    label: "Janeiro",
  },
  {
    value: 2,
    label: "Fevereiro",
  },
  {
    value: 3,
    label: "Março",
  },
  {
    value: 4,
    label: "Abril",
  },
  {
    value: 5,
    label: "Maio",
  },
  {
    value: 6,
    label: "Junho",
  },
  {
    value: 7,
    label: "Julho",
  },
  {
    value: 8,
    label: "Agosto",
  },
  {
    value: 9,
    label: "Setembro",
  },
  {
    value: 10,
    label: "Outubro",
  },
  {
    value: 11,
    label: "Novembro",
  },
  {
    value: 12,
    label: "Dezembro",
  },
];

export const anos = Array.from({ length: 5 }).map((_, ind) => {
  return {
    value: currentYear - ind,
    label: currentYear - ind,
  };
});
