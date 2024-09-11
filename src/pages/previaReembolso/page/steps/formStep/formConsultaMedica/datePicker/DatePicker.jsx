import React, { useState, useEffect } from 'react';
import ClayDatePicker from '@clayui/date-picker';
import { dayjs } from '../../../../../../../utils/date';
import './date.scss';
import { mask } from '../../../../../../../utils/mask';

export const DatePicker = ({
  id,
  onChange,
  placeholder,
  inputName,
  required,
  value = '',
  onValueChange,
  label,
  minDate,
  maxDate,
  error,
  onClearError,
}) => {
  const [ariaLabel, setAriaLabel] = useState();

  const idCalendar = `id-calendar-${id}`;

  useEffect(() => {
    const targetNode = document.querySelector(`.date-picker-calendar`);

    if (!targetNode && !toogle) return;
    targetNode.removeAttribute('id');

    const observerOptions = {
      attributes: true,
      attributeFilter: ['aria-label', 'aria-expanded'],
    };

    const observer = new MutationObserver(mutationsList => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'aria-label') {
          setAriaLabel(targetNode.getAttribute('aria-label'));
        }
      }
    });

    observer.observe(targetNode, observerOptions);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const targetNode = document.querySelector(`.date-picker-calendar`);
    if (!targetNode) return;
    targetNode.classList.add(idCalendar);
  }, []);

  useEffect(() => {
    const iconHeader = document.querySelectorAll(
      `.${idCalendar} .date-picker-calendar-header > .date-picker-nav > .date-picker-nav-controls > .nav-btn-monospaced`
    );
    const btns = document.querySelectorAll(
      `.${idCalendar} > .date-picker-calendar-body > .date-picker-date-row > .date-picker-col > .date-picker-date.date-picker-calendar-item`
    );
    const parseMinDate = minDate && dayjs(minDate);
    const parseMaxDate = maxDate && dayjs(maxDate);
    if (iconHeader && btns) {
      const [iconLeft, iconMiddle, iconRight] = iconHeader;
      iconLeft.innerHTML = '<span class="material-symbols-outlined">chevron_left</span>';
      iconMiddle.innerHTML = '<span>Hoje</span>';
      iconRight.innerHTML = '<span class="material-symbols-outlined">chevron_right</span>';

      let aux = [...btns];

      const btnsDisabledPrevius = aux.filter(btn => {
        if (parseMinDate) {
          return dayjs(btn.ariaLabel.toLowerCase()).isBefore(parseMinDate.add(-1, 'day'));
        }
      });

      const btnsDisabledNext = aux.filter(btn => {
        if (parseMaxDate) {
          return dayjs(btn.ariaLabel.toLowerCase()).isAfter(parseMaxDate);
        }
      });

      if (btnsDisabledPrevius.length > 0) {
        iconLeft.setAttribute('disabled', true);
        iconLeft.style = 'pointer-events:none; color:#DEDEDE;';
      } else {
        iconLeft.removeAttribute('disabled');
        iconLeft.style = 'pointer-events:auto;';
      }

      if (btnsDisabledNext.length > 0) {
        iconRight.setAttribute('disabled', true);
        iconRight.style = 'pointer-events:none;';
      } else {
        iconRight.removeAttribute('disabled');
        iconRight.style = 'pointer-events:auto;';
      }

      btns.forEach(btn => {
        const valueButton = btn.ariaLabel.toLowerCase();
        const isDisabled =
          parseMinDate && parseMaxDate
            ? !dayjs(valueButton).isBetween(parseMinDate.add(-1, 'day'), parseMaxDate)
            : parseMinDate
            ? dayjs(valueButton).isBefore(parseMinDate)
            : parseMaxDate
            ? dayjs(valueButton).isAfter(parseMaxDate)
            : false;

        if (isDisabled) {
          btn.style = 'pointer-events:none; color:#DEDEDE;';
          btn.setAttribute('disabled', true);
        } else {
          btn.style = 'color:#4D4D4D;';
          btn.removeAttribute('disabled');
        }
      });
    }
  }, [ariaLabel]);

  return (
    <div className="un-date-picker w-100 d-flex flex-column" data-error={!!error}>
      <label className={`label-date-picker`}>
        {label}
        {required && <span className="required-field">*</span>}
      </label>
      <ClayDatePicker
        id={id}
        placeholder={placeholder}
        dateFormat="dd/MM/yyyy"
        inputName={inputName}
        className="date-picker-input"
        required={required}
        months={[
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro',
        ]}
        onChange={e => {
          onChange({ target: { value: e, name: inputName } });
        }}
        onFocus={() => {
          onClearError && onClearError({ target: { name: inputName } });
        }}
        onValueChange={onValueChange}
        value={mask('00/00/0000', value)}
        weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
        years={{ end: dayjs().year() + 6, start: dayjs().year() }}
      />
      {error && <span className="error-container filled">{error}</span>}
    </div>
  );
};
