import React from 'react';
import './CustomButton.styles.scss';

interface IProps {
  type: 'button' | 'submit' | 'reset' | undefined;
}

const CustomButton: React.FC<IProps> = ({ children, ...props }) => (
  <button className="custom-button" {...props}>
    {children}
  </button>
);

export default CustomButton;
