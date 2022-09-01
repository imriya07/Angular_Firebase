import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/users.model';
import { UserDetailsService } from '../user-details.service'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Users[] =[];
  userModel:Users = {};
  toggle:boolean = false;
  idxEdit:string = "";
  constructor(private userService: UserDetailsService) { 
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      let obj:any = {};
      this.users = data.map(e=> {
        obj=e.payload.doc.data()

      console.log(e.payload.doc.data())
        console.log(obj)
        return {
          id: e.payload.doc.id,
          ...obj
        } as Users;
      })
      console.log(this.users)
    });
  }

  create(user: Users){
      this.userService.createUsers(user);
      this.userModel = {};
      this.toggle = false
  }

  update(user: Users) {
    this.userService.updateUsers(user);
    this.userModel = {};
    this.toggle = false
  }

  delete(user: Users) {
    let id = user.id ? user.id : ''
    if(id){
      this.userService.deleteUsers(id);
    }
    this.toggle = false
  }
  edit(user: Users){
    this.idxEdit = user.id ?user.id : ''
    this.userModel = user;
    this.toggle = true
  }

}
