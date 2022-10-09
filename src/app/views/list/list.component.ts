import { Component, OnInit } from '@angular/core';
import { Entree } from 'src/app/shared/interfaces/entree';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public entryList: Entree[];

  constructor() {
    this.entryList = [
      {
        name: 'Introducción a Angular',
        title: 'En esta lección realizaremos una pequeña',
        weakness: 'holiwi'
      },
      {
        name: 'Introducción a Angular',
        title: 'En esta lección realizaremos una pequeña',
        weakness: 'holiwi2'
      },
      {
        name: 'Introducción a Angular',
        title: 'En esta lección realizaremos una pequeña',
        weakness: 'holiwi3'
      },
    ];
  }
  ngOnInit(): void {}
  public showName(name: string): void {
    alert(`Entrada seleccionada: ${name}.`);
  }
}
