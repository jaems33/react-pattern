import React from 'react';
import useInput from '../hooks/useInput';
import Button from '../components/Button';
import LabelledInput from '../components/LabelledInput';
const SignInForm: React.FunctionComponent<any> = (props) => {

  const handleSubmit = (input: React.FormEvent) => {
    input.preventDefault();
    console.log("Username is", username, password);
  }

  const {value: username, bind: bindUsername} = useInput('');
  const {value: password, bind: bindPassword} = useInput('');

  return (
  <form onSubmit={handleSubmit}>
    <LabelledInput id='username' text='Username' bind={bindUsername} />
    <LabelledInput type='password' id='password' text='Password' bind={bindPassword} />
    <Button type='submit' text='Sign In' />
  </form>) 
}

export default SignInForm;