import {useReducer, useCallback} from 'react';
import * as Actions from './actions';

const initialState = {
  result: null,
  loading: true,
  error: null,
}

/*
  Custom implementation of Thunk
*/

export const useThunkReducer = (reducer: any, initial: any): Array<any> => {

  const [state, dispatch] = useReducer(reducer, initial) as Array<any>;
  const enhancedDispatch = useCallback((action: any): void => {
    if (typeof action === 'function'){
      console.log('Logging function call:', Date.now());
      action(dispatch);
    } else {
      console.log('Logging normal action:', Date.now());
      dispatch(action);
    }
  }, [dispatch]);

  return [state, enhancedDispatch];
}

export const fetchReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case Actions.LOADING: {
      return initialState;
    }
    case Actions.COMPLETE: {
      return {
        loading: false,
        result: action.payload.response,
        error: null, 
      }
    }
    case Actions.ERROR: {
      return {
        loading: false,
        result: null,
        error: action.payload.error
      }
    }
    default: {
      return state;
    }
  }
}

