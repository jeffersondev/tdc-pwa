import { Component, OnInit, EventEmitter } from '@angular/core';

import { MaterializeDirective, MaterializeAction } from "angular2-materialize";

import { Trilha } from './../model/trilha';
import { Data } from './../model/data';
import { Horario } from './../model/horario';
import { HorarioService } from './../service/horario.service';
import { TrilhasService } from './trilhas.service';

@Component({
  selector: 'app-trilhas',
  templateUrl: './trilhas.component.html',
  styleUrls: ['./trilhas.component.css']
})
export class TrilhasComponent implements OnInit {

  constructor(
    private trilhasService: TrilhasService,
    private horarioService: HorarioService
  ) { }

  private datas: Data[];
  private horarios: Horario[];
  private trilhas: Trilha[];
  private barraPesquisa: string = "";
  private filtroActions = new EventEmitter<string | MaterializeAction>();
  private filtroTrilhaAtivado: boolean;
  private dataSelecionada: Data;

  ngOnInit() {
    this.filtroTrilhaAtivado = false;
    this.datas = this.horarioService.getDatas();
    this.horarios = this.horarioService.getHorarios();
    this.trilhas = this.trilhasService.getTrilhas();
    this.dataSelecionada = this.datas[0];
  }

  retrocederData() {
    console.log("retroceder");
  }

  avancarData() {
    console.log("avancar");
  }

  limparBarraPesquisa() {
    console.log(this.barraPesquisa);
    this.barraPesquisa = "";
    console.log(this.barraPesquisa);
  }

  pesquisar(event) {
    console.log("chamou o pesquisar");
    console.log(event.target.blur());
  }

  resetarFiltros() {

    this.filtroTrilhaAtivado = false;
    this.trilhas.map(trilha => trilha.selecionada = false);
    this.filtroActions.emit({ action: "modal", params: ['close'] });
  }

  aplicarFiltros() {

    this.filtroTrilhaAtivado = this.trilhas.some(trilha => trilha.selecionada);
    this.filtroActions.emit({ action: "modal", params: ['close'] });
  }

}
