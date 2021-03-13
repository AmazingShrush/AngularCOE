import { Component, OnInit } from '@angular/core';
import { UserfetchService } from '../userfetch.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  private users:any;
  constructor(private userService:UserfetchService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data=>{
      this.users=data;
    }
      )
  }

}
