import React, {useState} from 'react';
import './App.css';
import PrimaryButton from './components/PrimaryButton';
import Button from './components/Button';
import Form from './components/Form';
import {v4 as uuidv4} from 'uuid';
import {isFeatureOn} from './featureToggle'
import SignInForm from './forms/SignInForm'

import Counter from './components/Counter'

function Example(props: any): any {
  return [];
}

const LoggingHOC = (id: string, WrappedComponent: React.FunctionComponent<any>) => (props: any) => {
  const log = () => {
    console.log("You clicked", id);
    props.callback();
  }
  
  return <WrappedComponent onClick={() => log()} {...props} />
}


const TrackingHOC = (WrappedComponent: React.FunctionComponent<any>) => (props: any) => {
  const trackProps = {
    tracking_id: uuidv4()
  }
  return <WrappedComponent {...props} {...trackProps} />
}

const toggleOn = (featureName: string, ComposedComponent: any) => class HOC extends React.Component {
  render(){
    return isFeatureOn(featureName) ? <ComposedComponent {...this.props} /> : null;
  }
}

const toggleOnAlt = (featureName: string, ComposedComponent: React.FunctionComponent<any>) => (props:any) => {
    return isFeatureOn(featureName) ? <ComposedComponent {...props} /> : null;
}

const SomeComponent = (props: any) => <h4>Hello</h4>;

const trackingId = uuidv4();

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
  const TrackedButton = TrackingHOC(Button);
  const button = <TrackedButton text="This button is tracked" />

  const LoggedButton = LoggingHOC(trackingId, Button);


  const [toggle, setToggle] = useState(false);

  const callbackFunction = () => {
    setToggle(!toggle);
  }

  return (
    <div className="App">
      <PrimaryButton text='Primary Button' />
      <Button text='Normal Button' />
      <Form2 fields={fields} onSubmit={callback} showLabels={true} />
      <Button3 text="Optional Button" />
      {button}
      <h2>Light switch is {toggle ? 'on' : 'off'}</h2>
      <LoggedButton text="This is a logged button" callback={() => callbackFunction()} />
      <Example></Example>
      <SignInForm />
      <Counter max={3} step={1} />
    </div>
  );
}

export default App;
