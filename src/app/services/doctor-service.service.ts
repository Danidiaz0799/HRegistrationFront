import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  private baseUrl: string = "http://localhost:3001/api/doctors/";

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  postDoctor(doctorObj: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, doctorObj);
  }

  putDoctor(id: string, doctorObj: any): Observable<any> {
    const url = `${this.baseUrl}${id}`;
    return this.http.put<any>(url, doctorObj);
  }

  deleteDoctor(id: string): Observable<any> {
    const url = `${this.baseUrl}${id}`;
    return this.http.delete<any>(url);
  }
}
