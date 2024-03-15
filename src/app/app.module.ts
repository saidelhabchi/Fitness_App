import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from 'src/auth/auth.service';
import { HomeComponent } from './dashboard/home/home.component';
import { DetailProgramComponent } from './dashboard/detail-program/detail-program.component';
import { EditUserComponent } from './dashboard/edit-user/edit-user.component';
import { RequestedProfileComponent } from './dashboard/requested-profile/requested-profile.component';
import { UserProfileComponent } from './dashboard/user-profile/user-profile.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, DetailProgramComponent, EditUserComponent, RequestedProfileComponent, UserProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
