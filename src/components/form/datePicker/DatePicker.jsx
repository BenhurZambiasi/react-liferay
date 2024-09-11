import React, { useState } from 'react';
import { dayjs } from '../../../utils/date';
import { InputDate } from './inputDate/inputDate';
import './styles.scss';
import { Calendar } from './calendar/Calendar';

export const DatePicker = ({ label, minDate, onChange }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const changeMonth = offset => {
    console.log(offset);
    setCurrentDate(currentDate.set('M', offset));
  };

  console.log(dayjs().set('M', 0).format('M'));

  return (
    <div className="un-date-picker-field w-100 position-relative">
      <InputDate label={label} />

      <Calendar currentDate={currentDate} minDate={minDate} changeMonth={changeMonth} />
    </div>
  );
};
