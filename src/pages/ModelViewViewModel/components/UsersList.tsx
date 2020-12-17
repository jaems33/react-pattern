import React from 'react';
import Card from './Card';

const UsersList: React.FunctionComponent<any> = ({users, removeUser}) => {
  return users.map( ({id, ...props}: any) => {
    return <Card 
      key={id}
      id={id}
      removeUser={removeUser}
      {...props}
     />
  })
}

export default UsersList;