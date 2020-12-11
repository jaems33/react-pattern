import React from 'react'

const Label: React.FunctionComponent<any> = ({id, text, props}) => {
  return (<label htmlFor={id}>{text}</label>)
}

export default Label;