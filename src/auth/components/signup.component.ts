import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon'
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'mg-signup',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatCheckboxModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: `./signup.component.html`,
})
export class SignupComponent {
  private authService = inject(AuthService)
  private readonly router = inject(Router)
  signupForm = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  })


  onSubmit(){
    this.authService.signup(this.signupForm.controls.email.value,this.signupForm.controls.password.value).then(()=>{
      this.router.navigate(['/auth/login'])
    })    
  }
}
