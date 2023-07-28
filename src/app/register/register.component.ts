import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/Models/User';
import { AuthServiceService } from '../auth-service.service';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userform:FormGroup=new FormGroup({})
  user:User={userName:"",password:""}
  u:User;
  errormsg:string;
  isSuccess:boolean;
  
  constructor(private authservice:AuthServiceService,private loginserivce:LoginService,private route:Router){
    this.isSuccess=false;
    this.u={userName:"",password:""}
  }
  ngOnInit(): void {
    
  }
  

    Submit(data:any):void{
      try{
        if (!data.userName) {
          this.errormsg = 'Please Enter User Name.';
          return;
        }
      
        if (!data.password) {
          this.errormsg = 'Please Enter your Password.';
          return;
        }
     
      this.loginserivce.AddUser(this.u).subscribe(data=>{
        this.errormsg="Successfully created ";
       
        console.log(data);
        this.isSuccess=true;
       
        })
    
      }
      catch(Exception){
        this.errormsg=Exception;
      }
    }
     closeError(): void 
     {
        this.errormsg = null;
       if(this.isSuccess==true)
       {
        this.route.navigateByUrl('/login');
       }
       else
       {
       this.route.navigateByUrl('/register');
       }
     }  

}
  

