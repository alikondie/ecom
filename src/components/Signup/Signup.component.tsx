import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import FormInput from '../FormInput/FormInput.component';

import { SignupContainer, SignupTitle } from './Signup.styles';
import { useDispatch } from 'react-redux';
import { signUpRequest } from '../../redux/User/User.actions';

const Signup = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) alert("Passwords don't match");
    dispatch(signUpRequest({ displayName, email, password }));
  };

  const displayNameHandleChange = (event: React.FormEvent) => {
    const { value } = event.target as HTMLTextAreaElement;
    setDisplayName(value);
  };
  const emailHandleChange = (event: React.FormEvent) => {
    const { value } = event.target as HTMLTextAreaElement;
    setEmail(value);
  };
  const passwordHandleChange = (event: React.FormEvent) => {
    const { value } = event.target as HTMLTextAreaElement;
    setPassword(value);
  };
  const confirmPasswordHandleChange = (event: React.FormEvent) => {
    const { value } = event.target as HTMLTextAreaElement;
    setConfirmPassword(value);
  };

  return (
    <SignupContainer>
      <SignupTitle> I do not have an account</SignupTitle>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={displayNameHandleChange}
          label="Display name"
          required
        ></FormInput>
        <FormInput
          type="email"
          name="Email"
          value={email}
          handleChange={emailHandleChange}
          label="Email"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={passwordHandleChange}
          label="Password"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={confirmPassword}
          handleChange={confirmPasswordHandleChange}
          label="Confirm Password"
          required
        ></FormInput>
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignupContainer>
  );
};

export default Signup;
