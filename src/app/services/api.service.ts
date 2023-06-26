import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;

  constructor(private http: HttpClient) { }
   getProfile = () => {
    return this.http.get<any>("https://randomuser.me/api/?results=100").pipe(map( (res:any)=> {
      return res.results;
    }));
  } 
}
// "https://randomuser.me/api/?results=100"