import React from 'react';
import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/Signup/Signup.component';
import { SignInSignupContainer } from './SignInSignup.styles';
import './SignInSingup.styles.scss';

const SignInSignupPage = () => (
  <SignInSignupContainer>
    <SignIn />
    <SignUp />
  </SignInSignupContainer>
);

export default SignInSignupPage;
