import React from 'react';
import './App.css';
import PrimaryButton from './components/PrimaryButton';
import Button from './components/Button';
import Form from './components/Form';
import {v4 as uuidv4} from 'uuid';

function Example(props: any): any {
  return [];
}

function App() {

  const fields = [
    {
      label: 'Name',
      value: 'John Smith',
      type: 'text',
      id: uuidv4(),
    }, {
      label: 'Address',
      value: '1 Broadway Avenue',
      type: 'text',
      id: uuidv4(),
    }, {
      label: 'Age',
      value: 43,
      type: 'number',
      id: uuidv4()
    }]

  const callback = (name: string, address: string, age: number) => {
    console.log('Send to server:', name, address, age);
  }


  
  return (
    <div className="App">
      <PrimaryButton text='Primary Button' />
      <Button text='Normal Button' />
      <Form fields={fields} onSubmit={callback} showLabels={true} />
      <Example></Example>
    </div>
  );
}

export default App;
