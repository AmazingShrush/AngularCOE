import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username:string;
  constructor(private login:LoginService) { }

  ngOnInit() {
    this.login.currentMessage.subscribe(username => this.username =username)
  }

}
