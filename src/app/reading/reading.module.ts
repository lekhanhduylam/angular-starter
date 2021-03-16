import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadingRoutingModule } from './reading-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ReadingComponent } from './reading.component';


@NgModule({
  declarations: [HomeComponent, ReadingComponent],
  imports: [
    CommonModule,
    ReadingRoutingModule
  ]
})
export class ReadingModule { }
