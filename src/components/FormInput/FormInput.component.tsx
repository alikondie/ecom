import React from 'react';
import {
  FormInputGroup,
  FormInputInput,
  FormInputLabel,
} from './FormInput.styles';

interface IProps {
  handleChange?: (e: React.FormEvent) => void;
  label?: string;
  name?: string;
  type?: string;
  value: string;
  required?: boolean;
}

const FormInput: React.FC<IProps> = ({ handleChange, label, ...props }) => (
  <FormInputGroup>
    <FormInputInput onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel
        className={`${props.value?.length ? 'shrink' : ''} form-input-label`}
      >
        {label}
      </FormInputLabel>
    ) : null}
  </FormInputGroup>
);

export default FormInput;
