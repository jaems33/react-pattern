import React from 'react';
import Input from './Input'
import Label from './Label';

const FormElement: React.FunctionComponent<any> = ({value, type, id, label, ...props}) => {
  const {showLabels} = props;
  return(
    <div>
      { showLabels && <Label id={id} text={label} /> }
      <Input id={id} defaultValue={value} />
    </div>);
}

export default FormElement;