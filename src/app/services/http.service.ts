import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  
  postData(obj:any){
    return this.http.post(this.baseUrl,obj);
  }

  getData(){
    return this.http.get(this.baseUrl);
  }

  deleteData(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }

  putData(id:number, requestBody:any )
  {
    return this.http.put(this.baseUrl +"/"+id, requestBody);
  }




}
