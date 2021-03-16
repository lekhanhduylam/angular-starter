import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent, PostsComponent } from './pages';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'posts', component: PostsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
