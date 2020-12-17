import React from 'react';
import ViewController from './ViewController';
import UserModel from './model/UserModel';
import ViewModel from './ViewModel';

const Provider: React.FunctionComponent<any> = ({data}) => {

  const userModel = new UserModel(data);
  const viewModel = new ViewModel(userModel);

  return (
    <ViewController viewModel={viewModel} />
  )  
}

export default Provider;