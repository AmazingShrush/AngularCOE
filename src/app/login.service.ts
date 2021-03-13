import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private messageSource=new BehaviorSubject('');
  currentMessage=this.messageSource.asObservable();

  changeUser(user:string){
    this.messageSource.next(user);
  }
  constructor(http:HttpClient) { }

}
