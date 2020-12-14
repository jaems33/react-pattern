import React, {useEffect} from 'react';
import {fetchReducer, useThunkReducer} from './fetchReducer';
import {fetchUserData} from './fetchUserData';
import Button from '../../components/Button';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NamesView from './NamesView';

const Names: React.FunctionComponent<any> = ({users}) => {
  return (
    users.map((entry: any) => <Link key={entry.id} to={`/users/${entry.id}`}><h1>{entry.name}</h1></Link>)
  )
}

const NamesList: React.FunctionComponent<any> = (props: any) => {

  const [state, dispatch] = useThunkReducer(fetchReducer, {});
  const users = state.result;

  useEffect( () => {
    dispatch( (dispatch: any) => {});
  }, [dispatch])

  return (
    <Router>
    <div>
      <Button text="Load Users" callback={() => dispatch(fetchUserData)} />
      <section>
        {  
          users && <Names users={users} /> 
        }
      </section>
      <section>
        <Route path="/users/:id" component={NamesView} />
      </section>
      
    </div>
    </Router>
  )
}

export default NamesList;