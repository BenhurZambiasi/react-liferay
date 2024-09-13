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
  const [day, month, year] = date.split('/');
  if (!isValidDate(day, month, year)) return false;
  return true;
};

function isValidDate(day, month, year) {
  if (month < 1 || month > 12) {
    return false;
  }

  if (year < 1900) {
    return false;
  }
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (isLeapYear(year)) {
    daysInMonth[1] = 29;
  }

  if (day < 1 || day > daysInMonth[month - 1]) {
    return false;
  }

  return true;
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export { dayjs };
