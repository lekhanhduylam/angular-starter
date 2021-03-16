import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages';
import { ReadingComponent } from './reading.component';

const routes: Routes = [
  {
    path: 'reading', component: ReadingComponent,
    children: [
      { path: '', component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadingRoutingModule { }
