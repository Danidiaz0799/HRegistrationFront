import { PatientServiceService } from 'src/app/services/patient-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  patientForm! : FormGroup;

  constructor(private fb: FormBuilder, private auth: PatientServiceService, private router: Router){}

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      phone: ['', Validators.required],
      identification: ['', Validators.required]
    })
  }

  sendPatient(): void {
    if(this.patientForm.valid){

      console.log(this.patientForm.value);
      this.auth.postPatient(this.patientForm.value).subscribe({
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
