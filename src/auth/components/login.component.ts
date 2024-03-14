import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'mg-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  template: `<div class="flex justify-center items-center h-screen">
    <form class="w-full max-w-xs">
      <mat-form-field>
        <input matInput />
      </mat-form-field>
    </form>
  </div>`,
})
export class LoginComponent {}
