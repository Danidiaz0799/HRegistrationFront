import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  loginForm! : FormGroup;

  constructor(private fb: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      especialidad: ['', Validators.required],
      consultorio: ['', Validators.required],
      correo: ['', Validators.required]
    })
  }

}
