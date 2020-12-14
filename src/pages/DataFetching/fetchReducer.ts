import {useEffect, useReducer} from 'react';

const LOADING = 'LOADING';
const COMPLETE = 'COMPLETE';
const ERROR = 'COMPLETE';

const initialState = {
  result: null,
  loading: true,
  error: null,
}

const fetchReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case LOADING: {
      return initialState;
    }
    case COMPLETE: {
      return {
        loading: false,
        result: action.payload.response,
        error: null, 
      }
    }
    case ERROR: {
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

const defaultCallback = (input: any) => input;

export const useFetch = (url: string, callback = defaultCallback) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect( () => {
    
    dispatch({
      type: LOADING
    });

    const fetchUrl = async() => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const converted = callback(data);
        dispatch({
          type: COMPLETE,
          payload: {
            response: converted
          }
        });
      } catch (error) {
        dispatch({
          type: ERROR,
          payload: {
            error
          }
        })
      }
    }
    
    fetchUrl();
  }, []);

  return [state.result, state.loading, state.error];

}