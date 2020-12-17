import React, {useState} from 'react';
import './App.css';
import PrimaryButton from './components/PrimaryButton';
import Button from './components/Button';
import Form from './components/Form';
import {v4 as uuidv4} from 'uuid';
import {isFeatureOn} from './featureToggle'
import Todolist from './pages/TodoList';
import NamesList from './pages/DataFetchingWithRouting/NamesList';
import LoadProvider from './pages/ModelViewViewModel/LoadProvider'

import {KanbanProvider} from './pages/Kanban/KanbanContext';
import RegistrationForm from './pages/ManagingFormState/RegistrationForm';

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

  const callback = (name: string, address: string, age: number) => {
    console.log('Send to server:', name, address, age);
  }

  const Form2 = toggleOnAlt('showForm', Form);

  const LoggedButton = LoggingHOC(trackingId, Button);

  const [toggle, setToggle] = useState(false);

  const callbackFunction = () => {
    setToggle(!toggle);
  }

  

  return (
    <KanbanProvider>
      <div className="App">
        <RegistrationForm />
        <hr />
        <Form2 fields={fields} onSubmit={callback} showLabels={true} />
        <h2>Light switch is {toggle ? 'on' : 'off'}</h2>
        <LoggedButton text="This is a logged button" callback={() => callbackFunction()} />
        <LoadProvider />
      </div>
    </KanbanProvider>
  );
}

export default App;
