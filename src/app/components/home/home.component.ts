import { Component, Type } from '@angular/core';
import { Observable, forkJoin, tap } from 'rxjs';
import { Doctor } from 'src/app/models/doctor.interface';
import { Patient } from 'src/app/models/patient.interface';
import { DoctorServiceService } from 'src/app/services/doctor-service.service';
import { PatientServiceService } from 'src/app/services/patient-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public doctorService:DoctorServiceService, public patientService: PatientServiceService){}

  patientsDoctors: Observable<any[]> = new Observable<any[]>();

  patients$: Observable<Patient[]> = new Observable<Patient[]>();
  doctors$: Observable<Doctor[]> = new Observable<Doctor[]>();

  ngOnInit() {
    this.patients$ = this.patientService.getPatients();
    this.doctors$ = this.doctorService.getDoctors();
    this.patientsDoctors = forkJoin([this.doctors$, this.patients$]);

  }

}
