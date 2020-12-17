class UsersViewModel {
  store: any;
  constructor(store: any){
    this.store = store;
  }
  getUsers(){
    return this.store.getUsers();
  }
  removeUser(id: number){
    this.store.removeUser(id);
  }
}

export default UsersViewModel;