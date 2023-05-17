import { DoctorServiceService } from 'src/app/services/doctor-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  doctorForm! : FormGroup;

  constructor(private fb: FormBuilder, private auth: DoctorServiceService, private router: Router){}

  ngOnInit(): void {
    this.doctorForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      specialties: ['', Validators.required],
      consultingRoom: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  sendDoctor(): void {
    if(this.doctorForm.valid){

      console.log(this.doctorForm.value);
      this.auth.postDoctor(this.doctorForm.value).subscribe({
        next:(res)=>{
          console.log(res.message);
          alert(res.message);
          this.router.navigate(['/home']);
        },
        error:(err) =>{
          alert(err?.error.message);
        }
      })
    }
    else{
      console.log("Form is not value");
    }
  }
}
