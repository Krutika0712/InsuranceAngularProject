import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable ,OnInit} from '@angular/core';
import { InsPolicy } from 'src/Models/InsPolicy';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService implements OnInit{
p:InsPolicy;
policy:InsPolicy[]=[];
errorMessage: string = '';
msg:string;
  constructor(private http:HttpClient) { }
  req:string="https://localhost:7045/api/InsPolicies";

  GetAllPolicy():Observable<InsPolicy[]>{
   
    return this.http.get<InsPolicy[]>(this.req);
    
  
  }
 
  ngOnInit(): void {
    
  }
  AddNewPolicy(p:InsPolicy)
  {
    {{debugger}}
    //this.students.push(s);
    return this.http.post<InsPolicy>(this.req,p,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });

  }
 FindPolicy(id:number):any{
  console.log(id+" in find Policy method");
  return this.http.get<InsPolicy>(this.req+"/"+id,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
    })
  });
 }
 Update(id:number,p:InsPolicy){
  console.log(id +" in update method");
  console.log(p+" in update method");
  
   return this.http.put(this.req+"/"+id,p,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
     })
   });
 }
 DeletePolicy(id:number)
 {
 
   return this.http.delete<any>(this.req+"/"+id,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
     })
   });
 

}


}


