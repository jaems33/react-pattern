import React from 'react';
const Input: React.FunctionComponent<any> = ({type='text', bind, ...props}) => {
  return (
    <input 
      type={type} 
      {...props} 
      {...bind} 
    />)
};

export default Input;