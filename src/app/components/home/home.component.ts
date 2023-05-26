import { Component } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
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
  patientsDoctors: Observable<any[]> = new Observable<any[]>();
  patients$: Observable<Patient[]> = new Observable<Patient[]>();
  doctors$: Observable<Doctor[]> = new Observable<Doctor[]>();

  constructor(public doctorService: DoctorServiceService, public patientService: PatientServiceService) { }

  ngOnInit() {
    this.loadPatientsAndDoctors();
  }

  loadPatientsAndDoctors(): void {
    const doctors$ = this.doctorService.getDoctors();
    const patients$ = this.patientService.getPatients();
    this.patientsDoctors = forkJoin([doctors$, patients$]);
  }

  deleteDoctor(id: string): void {
    if (confirm("Are you sure you want to delete this doctor?")) {
      this.doctorService.deleteDoctor(id).subscribe({
        next: (res) => {
          console.log(res.message);
          alert(res.message);
          this.loadPatientsAndDoctors(); // Vuelve a cargar los datos después de eliminar el doctor
        },
        error: (err) => {
          alert(err?.error.message);
        }
      });
    }
  }

  

  deletePatient(id: string): void {
    if (confirm("Are you sure you want to delete this patient?")) {
      this.patientService.deletePatient(id).subscribe({
        next: (res) => {
          console.log(res.message);
          alert(res.message);
          this.loadPatientsAndDoctors(); // Vuelve a cargar los datos después de eliminar el paciente
        },
        error: (err) => {
          alert(err?.error.message);
        }
      });
    }
  }
}

