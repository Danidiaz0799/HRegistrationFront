import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  private baseUrl:string = "https://nodehospital.fly.dev/api/patients/";
  constructor(private http: HttpClient) { }

  getPatients(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  postPatient(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}`, loginObj);
  }

  putPatient(id: string, patientObj: any): Observable<any> {
    const url = `${this.baseUrl}${id}`;
    return this.http.put<any>(url, patientObj);
  }

  deletePatient(id: string): Observable<any> {
    const url = `${this.baseUrl}${id}`;
    return this.http.delete<any>(url);
  }
}
