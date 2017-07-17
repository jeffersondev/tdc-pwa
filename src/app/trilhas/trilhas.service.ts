import { Injectable } from '@angular/core';

import { Trilha } from './../model/trilha';

@Injectable()
export class TrilhasService {

  constructor() { }

  getTrilhas(): Trilha[] {
    let trilhas: Trilha[] = [];

    for (var index = 0; index < 10; index++) {

      let trilha = new Trilha();
      trilha.id = 1;
      trilha.nome = "Transformação Digital";
      trilha.descricaoCurta = "Facilite seus negócios e sua vida com Transformação Digital!";
      trilha.descricaoCompleta = `É isso mesmo. Design Thinking já realidade no mercado brasileiro e é estratégico para inovação.
                                  Com esta trilha queremos ajudar os nossos líderes a entenderem como o Design Thinking está sendo aplicado na prática.
                                  Queremos co-criar insights sobre como escalar sua prática neste universo Ágil de Transformação Digital de serviços baseados na Cloud, na Internet das Coisas, na Computação Cognitiva e em todas as tecnologias que usamos e amamos para entregar inovações estratégicas centradas no usuário.
                                  Queremos envolver todas as áreas e especialidades da estratégia, da user experience e da criação de produtos para mostrar de que forma o foco nas pessoas para as quais criamos pode acontecer e impactar positivamente nos processos e resultados.
                                  Aguardamos vocês nesta jornada onde juntos construímos o amadurecimento do Design Thinking frente nossos desafios de escalar em mundo de entrega contínua e onde cada vez mais precisamos conquistar quase que pessoalmente cada cliente.`;
      trilha.selecionada = false;

      trilhas.push(trilha);
    }

    return trilhas;
  }
}
