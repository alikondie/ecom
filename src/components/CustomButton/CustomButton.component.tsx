import React, { ButtonHTMLAttributes } from 'react';
import { CustomButtonContainer } from './CustomButton.styles';

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

const CustomButton: React.FC<IProps> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...props
}) => <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;

export default CustomButton;
