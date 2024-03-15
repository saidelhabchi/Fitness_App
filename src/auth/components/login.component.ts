import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon'
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'mg-login',
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
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private authService = inject(AuthService)
  private readonly router = inject(Router)
  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  })
  falseCredentials:boolean = true
  onSubmit(){
    this.authService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value).then(()=>{
      localStorage.setItem("said","yes")
      this.router.navigate(['/dashboard'])
    }).catch(()=>{
      console.log('login or password are false')
      this.falseCredentials = false
    })
  }
}
