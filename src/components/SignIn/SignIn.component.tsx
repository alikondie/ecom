import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import FormInput from '../FormInput/FormInput.component';
import { SignInButtons, SignInContainer, SignInTitle } from './SignIn.styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
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
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </SignInButtons>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
