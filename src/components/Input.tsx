import React from 'react';
import useInput from '../hooks/useInput';
const Input: React.FunctionComponent<any> = ({defaultValue, placeholder, id, ...props}) => {
  const {value, bind } = useInput(defaultValue ? defaultValue : '');
  return (<input type="text" {...props} id={id} placeholder={placeholder} {...bind} />)
};

export default Input;