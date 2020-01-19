import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContentOneComponent } from './content-one/content-one.component';
import { ContentTwoComponent } from './content-two/content-two.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmperadorGuard } from '../auth/emperador.guard';


const routes: Routes = [
  {
    path: '', component: AdminComponent, canActivate: [EmperadorGuard], children: [
      {
        path: '', children: [
          { path: 'content-one', component: ContentOneComponent },
          { path: 'content-two', component: ContentTwoComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
