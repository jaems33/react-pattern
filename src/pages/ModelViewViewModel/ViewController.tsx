import React from 'react';
import UserView from './UserView'

/* 
  The brain for the view 
  - Has View related logic
  - One view controller can have many references to different view models
*/

const ViewController: React.FunctionComponent<any> = ({viewModel, ...props}) => {
    
  const removeUser = (id: number) => {
    viewModel.removeUser(id);
  }

  console.log("Users", viewModel.users);
  console.log("Props", props);

  return (
    <UserView users={viewModel.getUsers()} removeUser={removeUser} />
  )
    

}

export default ViewController;