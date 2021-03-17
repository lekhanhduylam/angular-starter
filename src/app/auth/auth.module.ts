import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule],
})
export class AuthModule {}
