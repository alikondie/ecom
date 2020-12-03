import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import FormInput from '../FormInput/FormInput.component';
import './SigIn.styles.scss';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    <div className="sign-in">
      <h2>I already have an account</h2>
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
        <CustomButton type="submit"> SIGN IN</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
