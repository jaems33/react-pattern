import React, {useContext} from 'react';
import useInput from '../../hooks/useInput';
import LabelledInput from '../../components/LabelledInput';
import PrimaryButton from '../../components/PrimaryButton';
import {KanbanContext} from './KanbanContext';

const NewEntry: React.FunctionComponent<any> = React.memo(({columnName}) => {

  const {addTask} = useContext(KanbanContext);
  const {value: text, bind: bindText, reset} = useInput('');

  const handleSubmit = (input: React.FormEvent) => {
    input.preventDefault();
    addTask(columnName, text);
    reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <LabelledInput id='text' text='Text' bind={bindText} />
      <PrimaryButton type='submit' text='Add Task' />
    </form>
  )
});

export default NewEntry;