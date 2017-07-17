export class Horario {

  constructor(id: number, horaInicio: string, horaFim: string) {
    this.id = id;
    this.horaInicio = horaInicio;
    this.horaFim = horaFim;
  }

  id: number;
  horaInicio: string;
  horaFim: string;
}
