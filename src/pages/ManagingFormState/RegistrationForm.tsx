import React from 'react';
import Button from '../../components/Button';
import LabelledInput from '../../components/LabelledInput';
import useFormState from './useFormState';

/*
  Simplify handling the state of a form by using a reducer
*/

const initialState = {
  name: '',
  email: '',
  address: '',
}

const RegistrationForm = () => {

  const [state, setState] = useFormState(initialState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("State is", state);
    clear();
  }

  const clear = () => {
    setState(initialState);
  }

  const handleChange = (event: any) => {
    setState({
      [event.target.name]: event.target.value
    })
  }

  return (
    <form onSubmit = {(e: any) => handleSubmit(e)}>
      <LabelledInput id="name" text="Name" bind={{value: state.name, onChange: handleChange}} />
      <LabelledInput id="address" text="Address" bind={{value: state.address, onChange: handleChange}} />
      <LabelledInput id="email" text="Email" bind={{value: state.email, onChange: handleChange}} />
      <Button text="Submit" type="submit" />
    </form>
  )
}

export default RegistrationForm;