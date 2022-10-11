import { Component, OnInit } from '@angular/core';
import { ObjectEntree } from 'src/app/shared/interfaces/object-entree';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
})
export class ListItemsComponent implements OnInit {
  public entryList: ObjectEntree[];

  constructor() {
    this.entryList = [
      {
        name: 'Pocion',
        description: 'Recupera una pequeña cantidad de salud',
        url: 'http://www.monsterhunterworld.com/us/topics/itempack1/images/img-item01.png'
      },
    ];
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public showName(name: string): void {
    alert(`Entrada seleccionada: ${ name }.`);
    }
  
}
