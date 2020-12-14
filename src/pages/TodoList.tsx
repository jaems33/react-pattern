import React, {useState, useReducer, useCallback} from 'react';
import {v4 as uuidv4} from 'uuid';
import LabelledInput from '../components/LabelledInput';
import PrimaryButton from '../components/PrimaryButton';
import Button from '../components/Button';
import useInput from '../hooks/useInput';

/* 
  This is an example of using useReducer to manage the state of a TodoList instead of using
  setState within the TodoList

  It also uses React.memo to stop multiple elements from re-rendering when they don't need to do so. You need
  to combine this with useCallback so that callback functions being passed to children aren't re-created
  every single time the parent component renders.

  More importantly, because dispatch doesn't change throughout the lifetime the program, 
  neither should addTask() or toggleTask(), hence why they are safe to useCallbacks
*/

const TASK_ADD = 'TASK_ADD';
const TASK_TOGGLE = 'TASK_TOGGLE';

const initialState = [
  {
    id: uuidv4(),
    done: false,
    text: 'take out garbage'
  },
  {
    id: uuidv4(),
    done: false,
    text: 'write some awesome javascript'
  },
  {
    id: uuidv4(),
    done: true,
    text: 'finish React online courses'
  }
]

const reducer = (state: any, action: any) => {
  switch(action.type) {
    case TASK_ADD: {
      return [
        action.payload,
        ...state
      ]
    }
    case TASK_TOGGLE: {
      const {id} = action.payload;
      return state.map((task: any) => {
        if (task.id === id){
          return { 
            ...task,
            done: !task.done
          }
        }
        return task;
      })
    }
    default: {
      return state;
    }
  }
}

const NewTask: React.FunctionComponent<any> = React.memo( ({addTask}) => {

  const {value: text, bind: bindText, reset} = useInput('');

  const handleSubmit = (input: React.FormEvent) => {
    input.preventDefault();
    addTask({text: text});
  }

  return (
    <form onSubmit={handleSubmit}>
      <LabelledInput id='text' text='Text' bind={bindText} />
      <PrimaryButton type='submit' text='Add Task' />
    </form>
  )
});

/*
  For memoization, it's extremely important to know the difference between () => callback() vs callback
  The former generates a new function that fires the callback, so if it was used in tasks.map and passed
  to the component, the component would be receiving a new function everytime it's rendered.

  Whereas if you pass the callback function to the memoized component, when it does the comparison to the previous
  props, it will find that the callback function is the same one being referred to the entire time.

  This subtlety is the difference between memoization working, and the comparison check failing due to a new
  function being passed from the parent.
*/

const Task: React.FunctionComponent<any> = React.memo( ({done, text, toggleTask, id}) => {
  return (<div>
    { console.log("Rendering task ID:", id)}
    <h2>{text}</h2>
    <p>Finished? {done ? 'Yes' : 'No'}</p>
    <Button text="Toggle" callback={() => toggleTask(id)} />
  </div>)
});

const Tasks: React.FunctionComponent<any> = ({tasks, toggleTask}) => {
  return (
    tasks.map(({id, ...props}: any) => {
      return (
        <Task key={id} toggleTask={toggleTask} id={id} {...props} />
      )
    })
  )
}

const Todolist: React.FunctionComponent<any> = (props) => {

  const [tasks, dispatch] = useReducer(reducer, initialState);
  //const [tasks, setTasks] = useState(initialState);

  // useCallback returns a memoized callback
  const addTask = useCallback(({text}: any) => {
    dispatch({
      type: TASK_ADD,
      payload: {
        text,
        id: uuidv4(), 
        done: false
      }
    });
    // setTasks([task, ...tasks])
  }, [dispatch]);

  const toggleDone = useCallback((id: string) => {
    dispatch({
      type: TASK_TOGGLE,
      payload: {
        id
      }
    });
  }, [dispatch]);
  
  return(
  <section>
    <h2>Todolist</h2>
    <NewTask addTask={addTask} />
    <Tasks tasks={tasks} toggleTask={toggleDone} />
  </section>)
}

export default Todolist;