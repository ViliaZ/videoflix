import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required, Validators.email],
  });

  get email() {
    return this.registerForm.get('email');
  }
  get name() {
    return this.registerForm.get('name');
  }
  get password() {
    return this.registerForm.get('password');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('submit RegisterForm', this.registerForm);
  }
}
