import React from 'react';
import {parseClassNames} from '../utils';

/* Proxy  */
/* Spreading props on DOM elements don't add unknown HTML attributes */
const Button: React.FunctionComponent<any> = ({className, primary, text, ...domProps}) => 
  <button 
    className={parseClassNames('button', primary && 'button--primary', className)} 
    type="button" 
    {...domProps}>
      {text}
  </button>

export default Button;

