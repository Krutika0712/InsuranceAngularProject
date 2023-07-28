import { Component,OnInit } from '@angular/core';
import { InsPolicy } from 'src/Models/InsPolicy';
import { PolicyService } from '../policy.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, of, pipe, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-policy-list',
 
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
  
})
export class PolicyListComponent implements OnInit{
  p:InsPolicy;
  policy:InsPolicy[]=[];
  errormsg:string;
  errorMessage:string;
  iserror: boolean;
  //Showtable: boolean;
  constructor(private policyservice:PolicyService,private loginService:LoginService){
   this.iserror=false;
this.p={policyId:0,policyName:"",category:"",sumAssurance:0,premium:0,tenure:0,createdOn:new Date("09/08/2000")}
  }
ngOnInit(): void {
  this.Refreshlist();

 

}
Refreshlist(){
  this.policyservice.GetAllPolicy().subscribe(date=>{
    this.policy=date;
    console.log(this.policy)
   
    
      });
}

 



Delete(id: number): void {
  this.policyservice.DeletePolicy(id).subscribe(
    () => {
      this.errormsg = "Successfully deleted : " + id;
      //this.iserror = false;
      this.Refreshlist();
    },
    (error) => {
      console.error(error);
      if (error.status === 400) {
        this.errormsg = "Foreign key constraint. Cannot delete with ID : " + id;
       // this.iserror = true;
      } else {
        this.errormsg = "Error occurred while deleting: " + id;
        //this.iserror = true;
      }
    }
  );
}

closeError(): void {
  this.errormsg = null;
 this.Refreshlist();
}
}

