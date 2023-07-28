import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from 'src/Models/User';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
u:User[];
  token:string;
  user:any;
  currentuser:any;
  userlist:any
  users: User[];
  isLoggin:boolean;
  errormsg:string;
    constructor(private route:Router,private loginservice:LoginService) { 
      
    }
       
  
  GetUserToken(empDetails: User) {

    console.log(empDetails);
    {{debugger}}
    this.userlist = this.loginservice.GetAllUsers().subscribe(date=>{
      this.userlist=date;
      console.log(this.userlist)
     
    console.log('userlist:', this.userlist);

    this.currentuser = undefined;

 
{{debugger}}
    this.userlist.forEach((user: any) => {

    if (user.userName === empDetails.userName && user.password === empDetails.password) {

        this.currentuser = user;
        this.isLoggin=true;
        //this.token=empDetails.userName;
        return; 

      }
    
    });
   
    console.log('currentuser:', this.currentuser);
        if (this.currentuser) {

          this.token = this.currentuser.userName;

        } else {

          this.token = ""; 

        }

        this.SaveToken(); 
      });
  }

 
  SaveToken() {

    if (this.token) {

      localStorage.setItem("token", this.token);

    } else {

      console.error("Token is undefined. Unable to save in localStorage.");

    }

  }

 IsLoggedIn() {

    return localStorage.getItem("token") !== null;

  }
  Logout() {

    localStorage.clear();

    this.route.navigateByUrl('/login');

  }
 GetToken() {

    return localStorage.getItem("token") || '';

  }
}
