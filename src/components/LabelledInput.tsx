import React from 'react';
import Input from './Input';
import Label from './Label';

const LabelledInput: React.FunctionComponent<any> = ({id, text, bind, ...props}) => {
  return (<>
    <Label id={id} text={id} />
    <Input id={id} name={id} bind={bind} {...props} />
  </>)
}

export default LabelledInput;