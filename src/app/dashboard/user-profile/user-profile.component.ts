import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'mg-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  constructor(private router:Router){}

  navigateToEdit() {
    this.router.navigate(['/edit']);
  }

}
