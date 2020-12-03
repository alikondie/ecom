import React from 'react';

import './FormInput.styles.scss';

interface IProps {
  handleChange?: (e: React.FormEvent) => void;
  label?: string;
  name?: string;
  type?: string;
  value: string;
  required?: boolean;
}

const FormInput: React.FC<IProps> = ({ handleChange, label, ...props }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...props} />
    {label ? (
      <label
        className={`${props.value?.length ? 'shrink' : ''} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
