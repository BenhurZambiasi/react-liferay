import React from 'react';
import { Select } from '../select/Select';
import { dayjs } from '../../../../utils/date';
const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

export const Calendar = ({ currentDate, minDate, changeMonth }) => {
  const renderDays = () => {
    const days = [];
    const startOfMonth = currentDate.startOf('month');
    const endOfMonth = currentDate.endOf('month');
    const startOfCalendar = startOfMonth.startOf('week');
    const endOfCalendar = endOfMonth.endOf('week').add(1, 'day');

    let currentDay = startOfCalendar;

    while (currentDay.isBefore(endOfCalendar, 'day')) {
      const dayNumber = currentDay.date();

      const isMarked = currentDay.format('YYYY-MM-DD') === currentDate.format('YYYY-MM-DD');
      days.push(
        <div
          key={currentDay.format('YYYY-MM-DD')}
          className={`calendar-day ${isMarked ? 'marked' : ''} ${
            minDate && currentDay.isBefore(minDate, 'day') ? 'disabled' : ''
          }`}
        >
          {dayNumber}
        </div>
      );
      currentDay = currentDay.add(1, 'day');
    }

    return days;
  };

  const months = dayjs.months();

  const years = [];
  for (let year = currentDate.year(); year >= 1900; year--) {
    years.push({ label: year, value: year });
  }

  const monthsFilterd = months.filter((_, index) => {
    const min = !minDate || true;

    return min;
  });
  return (
    <div className="calendar">
      <div className={'calendar-header'}>
        <Select
          name={'calendar-month'}
          value={currentDate.format('M') - 1}
          onChange={({ target: { value } }) => changeMonth(value)}
          options={months.map((month, index) => {
            return { label: month, value: index };
          })}
        />
        <Select
          name={'calendar-year'}
          options={years}
          value={currentDate.format('YYYY')}
          onChange={({ target: { value } }) => changeMonth(value)}
        />
        <div className="d-flex align-items-center gap-2">
          <button className="btn-calendar" onClick={() => changeMonth(-1)}>
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <span>Hoje</span>
          <button className="btn-calendar" onClick={() => changeMonth(1)}>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
      </div>
      <div className={'calendar-grid'}>
        {daysOfWeek.map(day => (
          <div key={day} className={'calendar-day-name'}>
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};
