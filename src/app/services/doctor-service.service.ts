import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  private baseUrl:string = "http://localhost:3001/api/doctors/";
  constructor(private http: HttpClient) { }

  getDoctor(){
    return this.http.get<any>(`${this.baseUrl}`);
  }

  postDoctor(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}`, loginObj);
  }
}
