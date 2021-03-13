import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {
  userInput:Users1={
    "id":0,
    "email":'',
    "username":'',
    "gender":'',
    "phone":'',
    "password":'',
  }
  constructor(private signup:SignupService) { }

  ngOnInit() {

  }
  onSubmit(){
    this.signup.sendUserData(this.userInput).subscribe(
      data => console.log('Success!',data),
      error => console.error('Error!',error)
    )
    console.log(this.userInput);
  }

}
