import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  private baseUrl:string = "http://localhost:3001/api/doctors/";
  constructor(private http: HttpClient) { }

  getDoctors(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  postDoctor(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}`, loginObj);
  }
}
