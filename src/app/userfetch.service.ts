import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserfetchService {
  url="http://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { 
  }

  getUsers():Observable<User>{
    return this.http.get<User>(this.url);
  }


}
