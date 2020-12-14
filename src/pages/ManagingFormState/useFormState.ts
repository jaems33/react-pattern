import {useReducer} from 'react';

const reducer = (previousState = {}, updatedState = {}) => {
  return {
    ...previousState,
    ...updatedState,
  }
}

const useFormState = (initialState={}) => {
  const [state, dispatch] = useReducer(reducer, initialState) as Array<any>;

  const setState = (updatedState: any) => {
    dispatch(updatedState);
  }
  return [state, setState];
}

export default useFormState;