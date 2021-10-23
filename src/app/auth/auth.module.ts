import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../services/auth.service';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
NgxPermissionsModule.forRoot()

@NgModule({
  declarations: [RegisterComponent, LoginComponent, AdminComponent, UserComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService]

})
export class AuthModule { }