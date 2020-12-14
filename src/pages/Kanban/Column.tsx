import React from 'react';
import Entries from './Entries'
const Column: React.FunctionComponent<any> = ({columnName, ...props}) => {
  return (
  <section>
    <h2>{columnName}</h2>
    <Entries columnName={columnName} {...props} />
  </section>)
}

export default Column;