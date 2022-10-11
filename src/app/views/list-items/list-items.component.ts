import { Component, OnInit } from '@angular/core';
import { ObjectEntree } from 'src/app/shared/interfaces/object-entree';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
})
export class ListItemsComponent implements OnInit {
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
