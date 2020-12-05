import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import FormInput from '../FormInput/FormInput.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './Signup.styles.scss';

const Signup = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) alert("Passwords don't match");
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (user) {
        await createUserProfileDocument(user, { displayName });
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      }
    } catch (error) {
      console.log(error);
    }
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
    <div className="sign-up">
      <h2 className="title"> I do not have an account</h2>
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
    </div>
  );
};

export default Signup;
