import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ControlComponent } from './pages/control/control.component';
import { Error404Component } from './shared/components/error404/error404.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'control',
    component: ControlComponent
  },
  {
    path:'404',
    component: Error404Component
  },
  {
    path:'**',
    component: Error404Component
  }
]

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRouterModule { }
