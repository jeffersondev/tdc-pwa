import { Palestra } from './palestra';
import { Coordenador } from './coordenador';

export class Trilha {

  id: number;
  nome: string;
  descricaoCurta: string;
  descricaoCompleta: string;
  cordenadores: Coordenador[];
  palestras: Palestra[];
  selecionada: boolean;
}
