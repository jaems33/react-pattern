import * as Actions from './actions';
const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

/* 
  Custom function for a particular view
*/

export const fetchUserData = (dispatch: any) => {
  dispatch({type: Actions.LOADING});
  fetch(ENDPOINT)
  .then((response) => response.json())
  .then((response) => dispatch({
    type: Actions.COMPLETE,
    payload: {
      response
    }
  }))
  .catch((error) => dispatch({
    type: Actions.ERROR,
    payload: {
      error
    }
  }))
}