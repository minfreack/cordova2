import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Link1Component } from './link1/link1.component';
import { Link2Component } from './link2/link2.component';
import { Link3Component } from './link3/link3.component';
import { Link4Component } from './link4/link4.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Link5Component } from './link5/link5.component';
import { HomeComponent } from './home/home.component';
import { EmperadorGuard } from './auth/emperador.guard';
import { LoginComponent } from './auth/login/login.component';
import { Login2Component } from './auth/login2/login2.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'link1', component: Link1Component, canActivate: [EmperadorGuard] },
  { path: 'link2', component: Link2Component },
  { path: 'link3', component: Link3Component },
  { path: 'link4', component: Link4Component },
  { path: 'link5', component: Link5Component },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', component: LoginComponent },
  { path: 'login2', component: Login2Component},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
