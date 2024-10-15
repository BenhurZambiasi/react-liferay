import React, { useState, useRef } from 'react';
import { PdfIcon } from './icons/PdfIcon';
import { CsvIcon } from './icons/CsvIcon';
import { TxtIcon } from './icons/Txt_icon';
import { ExcelIcon } from './icons/ExcelIcon';
import { WordIcon } from './icons/Word_icon';
import { ImageIcon } from './icons/Image_icon';
import { ZipIcon } from './icons/ZipIcon';
import { DefaultIcon } from './icons/DefaultIcon';
import { Tooltip } from '../../tooltip/tooltip';

const toBase64 = async file =>
  await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

export const FileField = ({
  label,
  name,
  placeholder,
  required,
  onChange,
  error,
  onClearError,
  value,
  multiple,
  maxFiles,
  maxSizePerFile = 25,
  accept,
}) => {
  const [errorMaxSizeFile, setErrorMaxSizeFile] = useState();
  const [files, setFiles] = useState(value);
  const ref = useRef(null);

  const handleChangeFiles = async e => {
    const file = e.target.files[0];

    if (maxFiles && files.length == maxFiles) {
      setErrorMaxSizeFile(`Limite de ${maxFiles} anexos excedido.`);
      ref.current.value = '';
      return;
    }

    if (file) {
      file.base64 = await toBase64(file);
      file.extension = !file.name.includes('.') ? null : file.name.split('.').reverse()[0];
      const fileSizeInBytes = file.size;
      const maxSizeInBytes = maxSizePerFile * 1024 * 1024; // 25 MB em bytes

      if (fileSizeInBytes > maxSizeInBytes) {
        setErrorMaxSizeFile(
          'O arquivo que você está tentando enviar é maior que 25 MB. Por favor, selecione um arquivo menor para continuar.'
        );
        if (ref.current) ref.current.value = '';
        return;
      }

      if (multiple) {
        const aux = [...files];
        if (!aux.some(el => el.name == file.name)) aux.push(file);
        setErrorMaxSizeFile('');
        setFiles(aux);

        onChange && onChange({ target: { name: name, value: aux } });
        if (ref.current) ref.current.value = '';
        return;
      }
      setFiles(file);
      onChange &&
        onChange({
          target: { name: name, value: file },
        });
      if (ref.current) ref.current.value = '';
    }

    if (ref.current) ref.current.value = '';
  };

  const handleRemoveFile = nameFile => {
    if (multiple) {
      const aux = [...files];
      const auxFilter = aux.filter(el => nameFile !== el.name);
      setFiles(auxFilter);
      onChange({ target: { name: name, value: auxFilter } });
    } else {
      setFiles('');
      onChange({ target: { name: name, value: '' } });
    }
    setErrorMaxSizeFile('');
  };

  const RenderIconTypeFile = ({ type }) => {
    if (type === 'pdf') {
      return <PdfIcon />;
    }
    if (type === 'csv') {
      return <CsvIcon />;
    }
    if (type === 'txt') {
      return <TxtIcon />;
    }
    if (type === 'xls' || type === 'xlsx') {
      return <ExcelIcon />;
    }
    if (type === 'doc' || type === 'docx') {
      return <WordIcon />;
    }
    if (type === 'jpeg' || type === 'jpg' || type === 'png') {
      return <ImageIcon />;
    }
    if (type === 'zip' || type === 'rar' || type === '7z') {
      return <ZipIcon />;
    }
    return <DefaultIcon />;
  };

  return (
    <div className="un-container-file-field d-flex flex-column gap-2 w-100" data-error={!!error}>
      <label className="m-0 label-file" htmlFor={name}>
        {label} {required && <span>*</span>}
      </label>
      <label className="input-file">
        <input
          ref={ref}
          type="file"
          name={name}
          id={name}
          hidden
          onChange={handleChangeFiles}
          onClick={() => {
            setErrorMaxSizeFile('');
            onClearError && onClearError({ target: { name } });
          }}
          accept={accept}
        />
        {files?.name ? (
          <span className="file-item-name text-truncate">{files.name}</span>
        ) : (
          <>
            <span className="placeholder">{placeholder}</span>
            <span className="material-symbols-outlined icon-file-field">attach_file</span>
          </>
        )}
      </label>
      {files?.name && (
        <span className="material-symbols-outlined delete-icon-file-field" onClick={() => handleRemoveFile(files.name)}>
          delete
        </span>
      )}

      {error && <span className="error-container filled">{error}</span>}

      <div className="list-files">
        {multiple &&
          files.map(({ name }, ind) => {
            const [ext] = name.split('.').reverse();
            return (
              <div className="file-item" key={ind}>
                <RenderIconTypeFile type={ext} />

                <span className="text-truncate name-file"> {name}</span>

                <span
                  className="material-symbols-outlined icon-delete-item-field"
                  onClick={() => handleRemoveFile(name)}
                >
                  delete
                </span>
              </div>
            );
          })}
      </div>
      {errorMaxSizeFile && <span className="error-container filled">{errorMaxSizeFile}</span>}
    </div>
  );
};
