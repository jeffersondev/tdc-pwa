import { Injectable } from '@angular/core';

import { Data } from './../model/data';
import { Horario } from './../model/horario';

@Injectable()
export class HorarioService {

  constructor() { }

  getDatas(): Data[] {
    let datas = [];

    datas.push(new Data(1, "TERÇA", "18/07"));
    datas.push(new Data(1, "QUARTA", "19/07"));
    datas.push(new Data(1, "QUINTA", "20/07"));
    datas.push(new Data(1, "SEXTA", "21/07"));
    datas.push(new Data(1, "SÁBADO", "22/07"));

    return datas;
  }

  getHorarios(): Horario[] {
    let horarios = [];

    horarios.push(new Horario(1, "08:00", "09:00"));
    horarios.push(new Horario(2, "09:00", "10:00"));
    horarios.push(new Horario(3, "10:10", "11:00"));
    horarios.push(new Horario(4, "11:10", "12:00"));
    horarios.push(new Horario(5, "12:00", "13:00"));
    horarios.push(new Horario(6, "13:10", "14:00"));
    horarios.push(new Horario(7, "14:10", "15:00"));
    horarios.push(new Horario(8, "15:00", "15:30"));
    horarios.push(new Horario(9, "15:40", "16:30"));
    horarios.push(new Horario(10, "16:40", "17:30"));
    horarios.push(new Horario(11, "17:40", "18:30"));
    horarios.push(new Horario(12, "18:40", "19:00"));

    return horarios;
  }
}
