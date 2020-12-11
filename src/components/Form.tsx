import React, {useState} from 'react';
import Input from './Input';
import FormElement from './FormElement';

const Form: React.FunctionComponent<any> = ({fields, showLabels=true, ...props}) => {
  return (<>{
    fields.map( ({value, type, id, label}: any, index: number) => {
      return <FormElement 
        showLabels={showLabels}
        label={label} 
        key={id} 
        id={id} 
        value={value} 
        type={type} 
      />
    })
  }</>)
}

export default Form;