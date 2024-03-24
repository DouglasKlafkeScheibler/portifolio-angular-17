import { Component, signal, inject } from '@angular/core';
import { IProjects } from '../interface/IProjects.interface';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/Valorant_omen.png',
      alt: 'Em desenvolvimento',
      title: 'Em desenvolvimento',
      width: '130px',
      height: '130px',
      description: '<p>Em desenvolvimento</p>',
      links: [
        {
          name: 'Valorant Spots',
          href: 'https://URLPROJETO.COM.BR'
        }
      ]
    }
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
