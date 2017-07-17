import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProgramacaoPersonalizadaComponent } from './programacao-personalizada/programacao-personalizada.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'programacao-personalizada', component: ProgramacaoPersonalizadaComponent },
  { path: 'notificacoes', component: NotificacoesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
