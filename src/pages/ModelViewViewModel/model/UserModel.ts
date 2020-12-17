class UserModel {
  users = [] as any;
  constructor(input: any){
    this.users = input;
    
  }
  addUser(user: any){
    this.users.push({
      ...user
    })
  }
  getUsers(){
    return this.users;
  }
  removeUser(id: number){
    this.users = this.users.filter((entry: any) => entry.id !== id)
  }
}

export default UserModel;

