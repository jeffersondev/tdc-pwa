import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MaterializeModule } from 'angular2-materialize';

import { TrilhasComponent } from './trilhas.component';
import { TrilhasService } from './trilhas.service';
import { TrilhasRoutingModule } from './trilhas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule,
    TrilhasRoutingModule
  ],
  declarations: [
    TrilhasComponent
  ],
  providers: [
    TrilhasService
  ]
})
export class TrilhasModule { }
