import React from 'react';
import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/Signup/Signup.component';
import './SignInSingup.styles.scss';

const SignInSignupPage = () => (
  <div className=" sign-in-signup">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignupPage;
