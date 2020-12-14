import React, { useReducer, createContext, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {DATA} from './KanbanData';

/*
  Example of using React.Context

  Created a Provider which wraps around the app so that child components of the app
  can then 

*/

const TASK_TOGGLE = 'TASK_TOGGLE';
const TASK_ADD = 'TASK_ADD';

const reducer = (state: any, action: any) => {
  switch(action.type){
    case TASK_TOGGLE: {
      const {columnName, id} = action.payload;
      return (
        state.map( (column: any) => {
          if (column.columnName === columnName){
            return ({
              ...column,
              entries: column.entries.map( (entry:any) => {
                if (entry.id === id){
                  return ({
                    ...entry,
                    done: !entry.done
                  })
                }
                return entry;
              })
            })
          }
          return column;
        })
      )
    }
    case TASK_ADD: {
      const {columnName, text, id} = action.payload;
      return (
        state.map( (column: any) => {
          if (column.columnName === columnName){
            return ({
              ...column,
              entries: [
                {
                  id,
                  text,
                  done: false,
                },
                ...column.entries
              ]
            })
          }
          return column;
        })
      )
    }
    default: {
      return state;
    }
  }
}

export const KanbanProvider = ({children}: any) => {
  
  const [columns, dispatch] = useReducer(reducer, DATA);

  const toggleTask = useCallback( (columnName: string, id: string) => {
    dispatch({
      type: TASK_TOGGLE,
      payload: {
        columnName,
        id
      } 
    })
  }, [dispatch]);

  const addTask = useCallback( (columnName: string, text: string) => {
    dispatch({
      type: TASK_ADD,
      payload: {
        columnName,
        text,
        id: uuidv4()
      } 
    })
  }, [dispatch]);

  const value = { columns, toggleTask, addTask };

  return (
      <KanbanContext.Provider value={value}>
        {children} 
      </KanbanContext.Provider>
  )
}

export const KanbanContext = createContext({} as any); 