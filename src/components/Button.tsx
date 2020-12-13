import React from 'react';
import {parseClassNames} from '../utils';

/* Proxy  */
/* Spreading props on DOM elements don't add unknown HTML attributes */
const Button: React.FunctionComponent<any> = ({type = 'button', className, primary, text, callback, ...domProps}) => {
  return (
  <button
    onClick={callback} 
    className={parseClassNames('button', primary && 'button--primary', className)} 
    type={type} 
    {...domProps}>
      {text}
  </button>)
}
  

export default Button;

