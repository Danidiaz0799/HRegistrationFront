import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  private baseUrl:string = "http://localhost:3001/api/patients/";
  constructor(private http: HttpClient) { }

  getPatients(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  postPatient(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}`, loginObj);
  }
}
