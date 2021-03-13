import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username='';
  password='';
  constructor(private _login:LoginService) { }
  logData(){
    console.log('Username: '+this.username);
    console.log('Password: '+this.password);
    this._login.changeUser(this.username);
  }
  ngOnInit() {
  }

}
