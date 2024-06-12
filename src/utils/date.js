import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import ptBr from "dayjs/locale/pt-br";

dayjs.extend(utc);
dayjs.locale(ptBr);

export const formatDate = ({ format, date }) => {
  return dayjs(date).utc(false).format(format);
};

export {dayjs}
