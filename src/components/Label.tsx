import React from 'react'

const Label: React.FunctionComponent<any> = ({id, text, ...props}) => {
  return (<label htmlFor={id} {...props}>{text}</label>)
}

export default Label;