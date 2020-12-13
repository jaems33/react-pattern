import React from 'react';
import './App.css';
import PrimaryButton from './components/PrimaryButton';
import Button from './components/Button';
import Form from './components/Form';
import {v4 as uuidv4} from 'uuid';
import {isFeatureOn} from './featureToggle'



function Example(props: any): any {
  return [];
}

const toggleOn = (featureName: string, ComposedComponent: any) => class HOC extends React.Component {
  render(){
    console.log(isFeatureOn(featureName));
    return isFeatureOn(featureName) ? <ComposedComponent {...this.props} /> : null;
  }
}

const toggleOnAlt = (featureName: string, ComposedComponent: React.FunctionComponent<any>) => (props:any) => {
    console.log(isFeatureOn(featureName));
    return isFeatureOn(featureName) ? <ComposedComponent {...props} /> : null;
}

const SomeComponent = (props: any) => <h4>Hello</h4>;

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

  const Button3 = toggleOnAlt('showForm', PrimaryButton);
  const Form2 = toggleOnAlt('showForm', Form);

  console.log(<SomeComponent />)
  return (
    <div className="App">
      <PrimaryButton text='Primary Button' />
      <Button text='Normal Button' />
      <Form2 fields={fields} onSubmit={callback} showLabels={true} />
      <Button3 text="Optional Button" />
      <Example></Example>
    </div>
  );
}

export default App;
