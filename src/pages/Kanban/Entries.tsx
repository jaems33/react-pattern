import React from 'react';
import Entry from './Entry';
import NewEntry from './NewEntry';

const Entries: React.FunctionComponent<any> = ({entries, columnName}) => {
  return (
    <>
    {entries.map(({id, ...props}: any) => {
      return (<Entry columnName={columnName} key={id} id={id} {...props} />)
    })}
      <NewEntry columnName={columnName} />
    </>
  )
}

export default Entries;