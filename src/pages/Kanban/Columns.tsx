import React from 'react';
import Column from './Column'

const Columns: React.FunctionComponent<any> = ({entries, ...props}) => {
  return (
    entries.map( ({id, columnName, entries}: any) => {
      return (<Column key={id} columnName={columnName} entries={entries} />)
    })
  )
}

export default Columns;