import React, { ButtonHTMLAttributes } from 'react';
import './CustomButton.styles.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isGoogleSignIn?: boolean;
}

const CustomButton: React.FC<IProps> = ({
  children,
  isGoogleSignIn,
  ...props
}) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
