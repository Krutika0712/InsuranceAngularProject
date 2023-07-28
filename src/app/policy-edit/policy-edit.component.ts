import { Component,OnInit } from '@angular/core';
import { InsPolicy } from 'src/Models/InsPolicy';
import { PolicyService } from '../policy.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-policy-edit',
  templateUrl: './policy-edit.component.html',
  styleUrls: ['./policy-edit.component.css']
})
export class PolicyEditComponent implements OnInit {
p:InsPolicy;
pid:number;
message:string;
errormsg:string;
isupdate:boolean;
constructor(private activatedroute:ActivatedRoute,private policyservice:PolicyService,private router:Router){
  const id= this.activatedroute.snapshot.paramMap.get('id');
  console.log(id);
  this.pid=Number(id);
  this.policyservice.FindPolicy(this.pid).subscribe(data=>{
    this.p=data;

  console.log(data);
});
}
ngOnInit(): void {
  
}
Save(){
  try{
  this.policyservice.Update(this.pid,this.p).subscribe(data=>{
    this.errormsg="Successfully updated "+this.pid;
    console.log(data);
    this.isupdate=true
   // this.router.navigateByUrl('Policy');
  })
}
catch(Exception){
 this.errormsg=Exception;
}
}
Cancel(){
  this.router.navigateByUrl('Policy');
}
closeError(): void {
  this.errormsg= null;
  if(this.isupdate==true){
    this.router.navigateByUrl('Policy');
    }
    else{
      this.router.navigateByUrl('edit');
    }
}
}
