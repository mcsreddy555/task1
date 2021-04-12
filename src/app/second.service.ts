import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class SecondService {

  constructor(private httpClient:HttpClient) {

   }

   public getData():Observable<any>{
    return this.httpClient.get<any>("https://restcountries.eu/rest/v2/all")
   }
}
