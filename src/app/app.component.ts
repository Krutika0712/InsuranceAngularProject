import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InsuranceMgmt';
  flag=false;
  username:string;
 isloggin:boolean;
local:any;
  constructor(private author:AuthServiceService){
    
       //this.isloggin=true;
      this.username=this.author.GetToken();
      console.log(this.username);
    }
  
    Logout()
    {
      this.author.Logout();
    }
  
    ngOnInit(): void {
      this.local=localStorage;
    }
  }

