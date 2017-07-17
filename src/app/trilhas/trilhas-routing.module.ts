import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrilhasComponent } from './trilhas.component';

const routes: Routes = [
  { path: 'trilhas', component: TrilhasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrilhasRoutingModule { }
