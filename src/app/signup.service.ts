import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url='http://localhost:3000/users';
  constructor(private http:HttpClient) { }

  sendUserData(user:Users1){
    return this.http.post<Users1>(this.url,user);
  }
}
