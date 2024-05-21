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
      src: 'assets/img/projects/logo_valorant_spots.png',
      alt: 'Valorant Spots',
      title: 'Valorant Spots',
      width: '130px',
      height: '130px',
      description: '<p>Aqui você encontrará informações e estratégias para melhorar o seu desempenho no Valorant.</p>',
      links: [
        {
          name: 'Valorant Spots',
          href: 'https://valorantspots.com'
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
