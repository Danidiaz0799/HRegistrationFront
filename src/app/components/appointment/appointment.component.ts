import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/models/doctor.interface';
import { DoctorServiceService } from 'src/app/services/doctor-service.service';
import { PatientServiceService } from 'src/app/services/patient-service.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  doctors$: Observable<Doctor[]> = new Observable<Doctor[]>();

  constructor(public doctorService: DoctorServiceService, public patientService: PatientServiceService) { }

  ngOnInit() {
    this.getDoctorsBySpecialtie("General medicine");
  }

  getDoctorsBySpecialtie(Specialtie: string): void {
    this.doctorService.getDoctorsBySpecialtie(Specialtie).subscribe(
      (doctors: Doctor[]) => {
        console.log('Doctores:', doctors); // Agregar console.log para mostrar los doctores
        this.doctors$ = new Observable<Doctor[]>(observer => {
          observer.next(doctors);
          observer.complete();
        });
      },
      (error: any) => {
        console.error('Error al obtener los médicos por especialidad:', error);
      }
    );
  }

}
