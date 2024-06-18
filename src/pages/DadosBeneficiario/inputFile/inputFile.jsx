import React, { useState, Fragment } from "react";
import "./inputFile.scss"

export const FileField = ({
  title,
  required,
  onChange,
  error,
  placeholder,
  icon,
}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    if (onChange) {
      onChange([...selectedFiles, ...files]);
    }
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
    if (onChange) {
      onChange(updatedFiles);
    }
  };

  return (
    <Fragment>
      <div className="container-file field d-flex flex-column gap-2 w-100">
        <span className="title">
          {title}&nbsp;{required && <span className="required-field">*</span>}
        </span>
        <div
          className={`d-flex flex-column form-control ${error ? "error-input" : ""
            }`}
        >
          <div className="file-input-wrapper d-flex position-relative justify-content-between">
            <input
              className="position-absolute w-100"
              type="file"
              multiple
              onChange={handleFileChange}
              placeholder={placeholder}
            />
            <div className="placeholder-text">{placeholder}</div>
            {icon && icon()}
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {selectedFiles.map((file, index) => (
            <div
              key={index}
              className="uploaded-file mt-3 mr-2 d-flex align-items-center"
            >
              <span className="material-symbols-outlined position-static mr-2">
                picture_as_pdf
              </span>
              <span>{file.name}</span>
              <span className="material-symbols-outlined position-static ml-4" onClick={() => handleRemoveFile(index)}>delete</span>
            </div>
          ))}
        </div>
      </div>
      {error && (
        <div className="error-msg d-flex align-items-center text-danger mt-2">
          <span className="material-symbols-outlined position-static mr-1">error</span>
          <span className="font-weight-bold">{error}</span>
        </div>
      )}
    </Fragment>
  );
};
