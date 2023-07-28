import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/Models/User';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  validuser:boolean;
  
user:User;
users:User[];
  constructor(private http:HttpClient) {
    this.validuser=false;
    this.users=[      
      {userName:'0',password:'0'}
     
    ]
   }

 

     login:string="https://localhost:7223/api/UserTables";
 
    GetAllUsers():Observable<User[]>{
      return this.http.get<User[]>(this.login)
      }
     
      AddUser(u:User)
      {
        //this.students.push(s);
        return this.http.post<User>(this.login,u,{
          headers:new HttpHeaders({
            'Content-Type':'application/json;charset=utf-8',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Method':'*'
            
          })
        });
    
      }
  
 
  
 
}
