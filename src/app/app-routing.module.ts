import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth/auth.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './dashboard/home/home.component';
import { EditUserComponent } from './dashboard/edit-user/edit-user.component';
import { UserProfileComponent } from './dashboard/user-profile/user-profile.component';
import { RequestedProfileComponent } from './dashboard/requested-profile/requested-profile.component';
import { DetailProgramComponent } from './dashboard/detail-program/detail-program.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',

    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    component: HomeComponent
  },
  {
     path: 'edit', 
    component: EditUserComponent 

  },
  {
    path:'userProfile',
    component: UserProfileComponent
  },
  {
    path:'requiredProfile',
    component:RequestedProfileComponent
  },
  {
    path:'moreProgram',
    component:DetailProgramComponent

  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
