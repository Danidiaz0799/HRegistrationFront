import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorServiceService } from 'src/app/services/doctor-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public service: DoctorServiceService){}

  doctors: Doctor[] = [];

  ngOnInit() {
    
  }

  getDoctors() {
    this.service?.getDoctors().pipe(tap((response)=>{ this.doctors = response;console.log(this.doctors)})).subscribe()

  }
}
