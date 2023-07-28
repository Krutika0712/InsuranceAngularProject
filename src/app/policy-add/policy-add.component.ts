import { Component ,OnInit, ViewChild} from '@angular/core';
import { InsPolicy } from 'src/Models/InsPolicy';
import { PolicyService } from '../policy.service';
import { Router } from '@angular/router';
import { FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-policy-add',
  templateUrl: './policy-add.component.html',
  styleUrls: ['./policy-add.component.css']
})
export class PolicyAddComponent implements OnInit {
  p:InsPolicy;
isSubmit:boolean;
  msg:string;
  policyForm: FormGroup;
  policyNameInvalid: boolean = false;
  categoryInvalid: boolean = false;
  sumInvaild:boolean=false;
  premiumInvaild:boolean=false;
  tenureInvaild:boolean=false;
  createdOnInvalid:boolean;
  constructor(private add:PolicyService,private router:Router){
  this.p={policyId:0,policyName:"",category:"",sumAssurance:0
  ,premium:0,tenure:0,createdOn:new Date("01/01/2000")}

}


ngOnInit(): void {
  
}
Submit(data:any):void{
  if (this.isFormValid()) {
  try
  {
  
     this.add.AddNewPolicy(this.p).subscribe(data=>{
      this.msg="Successfully created : "+data.policyName;   
     console.log(data);
     this.isSubmit=true;
     
    })
  }
  catch(Exception)
  {
    this.msg=Exception;
  }
}
 else {
    this.msg = 'Please fill in all required fields.';
  }
}

validatePolicyName() {
  this.policyNameInvalid = !this.p.policyName;
}

validateCategory() {
  this.categoryInvalid = !this.p.category;
}
validateSum() {
  this.sumInvaild = !this.p.sumAssurance;
}
validatePremium() {
  this.premiumInvaild = !this.p.premium;
}
validateTenure() {
  this.tenureInvaild = !this.p.tenure;
}
validatecreated() {
  this.createdOnInvalid = !this.p.createdOn;
}
isFormValid() {
  return this.p.policyName && this.p.category && this.p.sumAssurance && this.p.premium && this.p.tenure&&this.p.createdOn;
}


Cancel(){
  
  this.router.navigateByUrl('Policy');
}
closeError(): void {
  this.msg = null;
  if(this.isSubmit==true)
  {
  this.router.navigateByUrl('Policy');
  }
  else{
    this.router.navigateByUrl('padd');
  }
}
}
