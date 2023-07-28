import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {  Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/Models/User';
import { AuthServiceService } from '../auth-service.service';
import { PolicyListComponent } from '../policy-list/policy-list.component';

@Component({
  selector: 'app-login',
 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user:User={userName:"",password:""}
  userform:FormGroup=new FormGroup({})
  errormsg:string;
  //isLoggin:boolean;
  constructor(private authservice:AuthServiceService,private route:Router,private loginservice:LoginService) {
   // this.isLoggin=false;
   }
 
    ngOnInit(): void {
    
    if(this.userform.valid){
     this.refreshform();
     
    } 
    else{
      this.errormsg="Invaild"
    }
     
    }
    refreshform(){
      this.userform=new FormGroup(
        
        {
      
          userName:new FormControl(this.user.userName,[
            Validators.required, Validators.minLength(10)
          ]),
          password:new FormControl(this.user.password,[
            Validators.required,Validators.maxLength(10)
          ]),
         
        }
      );
    
    }
    closeError(): void {
      this.errormsg = null;
    this.refreshform();
  }
  
     

      Login() {

        try {
         
           this.authservice.GetUserToken(this.userform.value);
           {{debugger}}
          console.log(this.authservice.token);  
    
          if (this.authservice.GetToken()) 
          {
            this.route.navigateByUrl('home');
    
          }
          else
          {
            
            this.errormsg = "Credentials Incorrect";
            //this.route.navigateByUrl('register');
          }
    
        } catch (Exception) {
    
          this.errormsg = "Credentials Incorrect";
    
        }
    
      }
    
    }
    

