import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './index/auth/login/login.component';
import {RegisterComponent} from './index/auth/register/register.component';
import {HomeComponent} from './layout/home/home.component';
import {CreationComponent} from './index/auth/creation/creation.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'creation',
    component: CreationComponent
  },
    {
    path: 'home',
    component: HomeComponent
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
