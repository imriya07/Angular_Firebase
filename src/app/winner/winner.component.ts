import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../user-details.service'
import { Users } from 'src/app/users.model';


@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {

  users: Users[] =[];
  upDatedUser: Users[] =[];
  constructor(private userService: UserDetailsService) {
    this.userService.getUsers().subscribe(data => {
      let obj:any = {};
      this.users = data.map(e=> {
        obj=e.payload.doc.data()
        return {
          id: e.payload.doc.id,
          ...obj
        } as Users;
      })
      this.upDateArray()
    });
   }

  ngOnInit(): void {
  }
  upDateArray(){
    this.upDatedUser = this.users.filter(x=>x.status == "Winners")
  }

}



