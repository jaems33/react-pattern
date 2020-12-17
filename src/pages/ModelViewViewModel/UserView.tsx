import React from 'react';
import UsersList from './components/UsersList';

const UserView: React.FunctionComponent<any> = ({users, removeUser}) => {
  return (
  <>
    <h1>List of Users:</h1>
    <UsersList users={users} removeUser={removeUser} />
  </>)
}

export default UserView;