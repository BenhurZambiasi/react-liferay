import React from 'react';
import { Button } from '../../../../components/form/button/Button';

export const Actions = ({
  className = '',
  titleBtnPrimary = '',
  titleBtnSecondary = '',
  onClickBtnPrimary,
  onClickBtnSecondary,
  disabledBtnPrimary,
  loadingBtnPrimary,
}) => {
  return (
    <div className={`d-flex gap-5 ${className}`}>
      <Button variant="secondary" onClick={onClickBtnSecondary}>
        {titleBtnSecondary}
      </Button>
      <Button loading={loadingBtnPrimary} onClick={onClickBtnPrimary} disabled={disabledBtnPrimary}>
        {titleBtnPrimary}
      </Button>
    </div>
  );
};
