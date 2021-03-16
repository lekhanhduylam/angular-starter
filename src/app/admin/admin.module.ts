import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PostsComponent } from './pages';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent, PostsComponent, AdminComponent],
  imports: [
    AdminRoutingModule
  ]
})
export class AdminModule { }
