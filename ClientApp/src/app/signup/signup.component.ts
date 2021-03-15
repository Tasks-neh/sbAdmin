import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  //user: any={};
  signupForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    mobile:new FormControl('',[Validators.required,Validators.minLength(6)])
  });
  get name() { return this.signupForm.get('name') as FormControl ; }
  get email() { return this.signupForm.get('email') as FormControl; }
  get password() { return this.signupForm.get('password') as FormControl; }
  get mobile() { return this.signupForm.get('mobile') as FormControl; }
  
  constructor() { }
  

  onSubmit() {
    console.log(this.signupForm.value);
    // this.user=Object.assign(this.user, this.signupForm)
    // localStorage.setItem('Users',JSON.stringify (this.user));
  }

}
