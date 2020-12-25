import React, { ButtonHTMLAttributes } from 'react';
import './CustomButton.styles.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

const CustomButton: React.FC<IProps> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...props
}) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${
      inverted ? 'inverted' : ''
    } custom-button`}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
