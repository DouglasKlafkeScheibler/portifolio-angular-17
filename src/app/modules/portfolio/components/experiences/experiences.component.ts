import { Component, signal } from '@angular/core';
import { IExperiences } from '../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Software Developer',
        p: 'Senior Sistemas | Mar de 2022 - O momento' ,
      },
      text: '<p>Atuação no setor financeiro do ERP como fullstack, responsável pela manutenção e criação de novas funcionalidades com ênfase no backend, onde buscamos utilizar as melhores práticas de desenvolvimento</p><p>Competências: Java, Spring, Mockito, RabbitMQ, Microsserviços, SOLID , PostgreSQL, Docker, Portainer, SCRUM</p>',
    },
    {
      summary: {
        strong: 'Bolsista',
        p: 'EMBRAPII | Abri de 2020 - Ago de 2021' ,
      },
      text: '<p>Desenvolvimento de ferramentas para aquisição de dados disponibilizados pela CCEE dos últimos 5 anos de DECOMP e NEWAVE que são relevantes para predição de tarifas energéticas</p> <p>Competências: Python, Matplotlib, Gitflow, PostgreSQL</p>',
    }
  ])
}
