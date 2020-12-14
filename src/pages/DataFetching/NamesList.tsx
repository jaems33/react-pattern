import React from 'react';
import {useFetch} from './fetchReducer';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const Names: React.FunctionComponent<any> = ({users}) => {
  return (
    users.map((entry: any) => <div key={entry.id}><h1>{entry.name}</h1></div>)
  )
}

const NamesList: React.FunctionComponent<any> = (props: any) => {

  const [response, loading, error] = useFetch(ENDPOINT);  
  const users = response ? response : [];

  return (
    <div>
      {
        loading ? <p>Loading data...</p> : <Names users={users} /> 
      }
      {
        error !== null && <p>{error.message}</p>
      }
    </div>
  )
}

export default NamesList;