import { Component, OnInit } from '@angular/core';
import { ObjectEntree } from 'src/app/shared/interfaces/object-entree';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.css']
})
export class ObjectListComponent implements OnInit {

  public entryObjectList: ObjectEntree[];

  constructor() {
    this.entryObjectList = [
      {
        name: 'Pocion',
        description: 'Recupera una pequeña cantidad de salud',
        url: 'http://www.monsterhunterworld.com/us/topics/itempack1/images/img-item01.png'
      },
      {
        name: 'Carne',
        description: 'Carne obtenida de un monstruo, tiene varios usos',
        url: 'https://www.clipartmax.com/png/full/466-4662257_meat-icon-monster-hunter.png'
      },
      {
        name: 'hueso',
        description: 'Un material muy util, indispensable para la caza y vida diaria',
        url: 'https://www.monsterhunter.com/world-iceborne/topics/boost/images/icon_05.png'
      },
    ];
  }

  ngOnInit(): void {
  }

  public showName(name: string): void {
    alert(`Entrada seleccionada: ${ name }.`);
    }
}
