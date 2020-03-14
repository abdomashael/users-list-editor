import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  id = 0;
  users = [];

  constructor() {
  }

  getUserById(id): any {
    function userFilter(user) {
      // tslint:disable-next-line:triple-equals
      return user.id == id;
    }

    return this.users.filter(userFilter)[0];
  }

  addUser(user): any {
    this.id++;
    user.id = this.id;
    this.users.push(user);
  }

  getAllUsers(): any {
    return this.users;
  }

  deleteUserById(id: number): void {
    const idx = this.users.indexOf(this.getUserById(id));
    this.users.splice(idx, 1);
  }

  editUser(id: number, user: { mail: string; name: string; age: string }): void {
    const idx = this.users.indexOf(this.getUserById(id));
    this.users[idx].id = id;
    this.users[idx].name = user.name;
    this.users[idx].age = user.age;
    this.users[idx].mail = user.mail;
  }
}
