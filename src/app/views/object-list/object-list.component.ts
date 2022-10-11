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
    ];
  }

  ngOnInit(): void {
  }

  public showName(name: string): void {
    alert(`Entrada seleccionada: ${ name }.`);
    }
}
