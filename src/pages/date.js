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
  return dayjs(date).utc(true).format(format);
};

export { dayjs };
