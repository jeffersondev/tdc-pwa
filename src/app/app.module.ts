import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from '@angular/router';

import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ProgramacaoPersonalizadaComponent } from './programacao-personalizada/programacao-personalizada.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { TrilhasModule } from './trilhas/trilhas.module';
import { HorarioService } from './service/horario.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ProgramacaoPersonalizadaComponent,
    NotificacoesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    TrilhasModule,
    AppRoutingModule
  ],
  providers: [
    HorarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
