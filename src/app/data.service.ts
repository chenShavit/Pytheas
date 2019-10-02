import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class DataService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-X-RapidAPI-Host': 'andruxnet-world-cities-v1.p.rapidapi.com' ,
       'X-RapidAPI-Key':'9a0a65a225msh958c12adcce4cd7p12ff05jsncf3f7562621b'
    })
  };
  rapidHost:string='https://andruxnet-world-cities-v1.p.rapidapi.com/?query=paris&searchby=city';
  cities:any=[];
  isLogin:boolean=false;
  users:any=[];
  userExisit:boolean=false;
  inValidPas:boolean=false;
  tags:any=[];
  selectedTags:any=[];
  baseUrl="https://api-travel-maker.herokuapp.com";
  constructor(private http: HttpClient, private router: Router) { 
    this.getAllUsers();
  }
  getAllUsers(){
    return this.http.get(this.baseUrl+'/user/getAll').toPromise()
      .then((res: any) => {
        this.users=res;
      }).catch(); 
  }

  addNewUser(data:any){
    return this.http.put(this.baseUrl+'/user/add',{ fullName : data.fullName, email: data.email,password :data.password}).toPromise()
      .then((res: any) => {
        debugger
        this.users=res;
      }).catch(); 
  }
  getCities(){
    return this.http.get(this.rapidHost ,this.httpOptions ).toPromise()
      .then((res: any) => {
        console.log(res);
        for( var i=0; i< res.length; i++){
          this.cities.push({"city":res[i].city,
        "country":res[i].country})
        }
      }).catch(); 
  }
   public getTags(): Promise<any> {
    return this.http.get(this.baseUrl + '/tag/getAll').toPromise()
      .then((res: any) => {
        this.tags = res;
      }).catch();
  }
  isUserExisit(email:string){
    for(var i=0; i<this.users.length;i++){
      if(this.users[i].email==email){
        this.userExisit=true;
      }
    }
  }
  isPasswordMatch(user:any){
    for(var i=0; i<this.users.length;i++){
      if((this.users[i].email==user.email) && (this.users[i].password.localeCompare(user.password)==0)){
        this.inValidPas=false;
        return;
      }
      else{
        this.inValidPas=true;

      }
    }
    
  }

}
