import React, { useState } from 'react';
import './app-teste.scss';
import { FormControl } from '../components/form/formControl';
import { FileField } from '../components/form/fileField/FileField';
import { Tooltip } from '../components/tooltip/tooltip';

export const AppTest = () => {
  const [files, setFiles] = useState([]);

  return (
    <div className="container mt-5">
      <Tooltip text={'Eita'}>
        <h1>Eita</h1>
      </Tooltip>
      <Tooltip text={'Meu Pai '}>
        <h1>Meupai</h1>
      </Tooltip>
      <FormControl>
        <FileField
          label={'Files'}
          name={'files'}
          value={files}
          onChange={({ target: { value } }) => setFiles(value)}
          multiple
        />
      </FormControl>
    </div>
  );
};
