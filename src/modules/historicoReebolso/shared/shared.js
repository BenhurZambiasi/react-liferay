import { getMessageDefault } from './messages';

const messageDefault = ({ messageType, title, subtitle }) =>
  getMessageDefault({
    messageType,
    title,
    subtitle,
  });

export { messageDefault };
