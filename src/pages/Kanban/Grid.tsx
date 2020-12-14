import React from 'react';
import Columns from './Columns';
import { KanbanContext } from './KanbanContext';

const Grid: React.FunctionComponent<any> = (props) => {
  const { columns } = React.useContext(KanbanContext);
  console.log("Columns from context:", columns);
  return (<Columns entries={columns} {...props} />)
}

export default Grid;