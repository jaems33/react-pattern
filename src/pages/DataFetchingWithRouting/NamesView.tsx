import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const NamesView: React.FunctionComponent<any> = ({match}) => {
  const [user, setUser] = useState({} as any);

  /* 
    Make sure to declare the dependencies or else this page won't be
    updated in the React.Route
  */
  useEffect(() => {
    fetch(ENDPOINT + '/' + match.params.id)
      .then(response => response.json())
      .then(response => setUser(response));
  }, [match.params.id])

  return (<div>
    <ul>
      <li>Name: {user.name}</li>
      <li>Username: {user.username}</li>
      <li>Email: {user.email}</li>
      <li>Phone: {user.phone}</li>
      <li>Website: {user.website}</li>
    </ul>
  </div>)
}

export default NamesView;