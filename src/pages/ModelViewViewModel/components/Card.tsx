import React from 'react';
import Button from '../../../components/Button';

const Card: React.FunctionComponent<any> = ({id, name, username, email, phone, removeUser}) => {
  return(
  <div>
    <h1>{name}</h1>
    <p>{username}</p>
    <p>{email}</p>
    <p>{phone}</p>
    <Button callback={() => removeUser(id)} text="Remove User" />
  </div>)
}

export default Card;