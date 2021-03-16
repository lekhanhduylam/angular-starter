import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/reading' },
    {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
    {path: 'reading', loadChildren: () => import('./reading/reading.module').then(m => m.ReadingModule)},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
