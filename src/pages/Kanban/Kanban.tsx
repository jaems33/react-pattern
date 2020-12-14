import React from 'react'
import Grid from './Grid'
import { v4 as uuidv4 } from 'uuid';

const Kanban: React.FunctionComponent<any> = (props) => {
  return (
    <section>
      <h1>Kanban Board</h1>
      <Grid />
    </section>
  )
}

export default Kanban;