import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import ptBr from 'dayjs/locale/pt-br';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isBetween from 'dayjs/plugin/isBetween';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(utc);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);
dayjs.extend(localeData);
dayjs.locale(ptBr);

export const formatDate = ({ format, date }) => {
  if (!date) return '';
  return dayjs(date).utc(false).format(format);
};

export const isFormatValidDate = date => {
  if (!date) return false;
  console.log(date);

  const [day, month, year] = date.split('/');

  if (!isValidDate(day, month, year)) return false;

  return true;
};

function isValidDate(day, month, year) {
  // Verifica se o mês está no intervalo válido (1-12)
  if (month < 1 || month > 12) {
    console.log('mes invalido');
    return false;
  }
  // Verifica se o ano é válido
  if (year < 1900) {
    console.log('ano invalido');
    return false;
  }
  // Dias máximos em cada mês (Janeiro = 31, Fevereiro = 28/29, etc.)
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Verifica se o ano é bissexto (Fevereiro tem 29 dias)
  if (isLeapYear(year)) {
    daysInMonth[1] = 29; // Atualiza fevereiro para 29 dias
  }

  // Verifica se o dia está no intervalo válido para o mês
  if (day < 1 || day > daysInMonth[month - 1]) {
    console.log('dia invalido');
    return false;
  }

  console.log('data valida');
  return true;
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export { dayjs };
