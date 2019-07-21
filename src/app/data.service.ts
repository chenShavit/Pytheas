import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

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
  constructor(private http: HttpClient) { }

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

}
