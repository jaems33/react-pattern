import React, {useEffect} from 'react';
import {fetchReducer, useThunkReducer} from './fetchReducer';
import {fetchUserData} from './fetchUserData';
import Button from '../../components/Button';

const Names: React.FunctionComponent<any> = ({users}) => {
  return (
    users.map((entry: any) => <div key={entry.id}><h1>{entry.name}</h1></div>)
  )
}

const NamesList: React.FunctionComponent<any> = (props: any) => {

  const [state, dispatch] = useThunkReducer(fetchReducer, {});
  const users = state.result;

  useEffect( () => {
    dispatch( (dispatch: any) => {});
  }, [dispatch])

  return (
    <div>
      <Button text="Load Users" callback={() => dispatch(fetchUserData)} />
      {  
        users && <Names users={users} /> 
      }
    </div>
  )
}

export default NamesList;