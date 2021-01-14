import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import FormInput from '../FormInput/FormInput.component';
import { SignInButtons, SignInContainer, SignInTitle } from './SignIn.styles';
import { useDispatch } from 'react-redux';
import {
  googleSignInRequest,
  emailSignInRequest,
} from '../../redux/User/User.actions';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(emailSignInRequest({ email, password }));
  };

  const handleChangeEmail = (e: React.FormEvent) => {
    const { value } = e.target as HTMLTextAreaElement;
    setEmail(value);
  };

  const handleChangePassword = (e: React.FormEvent) => {
    const { value } = e.target as HTMLTextAreaElement;
    setPassword(value);
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={email}
          handleChange={handleChangeEmail}
          required
          label="email"
        />
        <FormInput
          name="password"
          value={password}
          handleChange={handleChangePassword}
          required
          label="password"
        />
        <SignInButtons>
          <CustomButton type="submit"> SIGN IN</CustomButton>
          <CustomButton
            type="button"
            onClick={() => {
              dispatch(googleSignInRequest());
            }}
            isGoogleSignIn
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </SignInButtons>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
