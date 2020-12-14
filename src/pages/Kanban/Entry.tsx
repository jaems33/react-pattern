import React, {useContext} from 'react';
import { KanbanContext } from './KanbanContext';
import Button from '../../components/Button';

const Entry: React.FunctionComponent<any> = ({text, id, done, columnName}) => {

  const { toggleTask } = useContext(KanbanContext);

  const toggle = () => toggleTask(columnName, id);
  return (
    <div>
      <p>{text}</p>
      <p>Done? {done ? 'Yes' : 'No' }</p>
      <Button callback={toggle} text="Toggle status" />
    </div>
  )
}

export default Entry;