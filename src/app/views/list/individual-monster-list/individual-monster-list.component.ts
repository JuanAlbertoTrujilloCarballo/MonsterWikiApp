import { Component, OnInit } from '@angular/core';
import { MonsterEntree } from 'src/app/shared/interfaces/monster-entree';
import { ListComponent } from '../list.component';

@Component({
  selector: 'app-individual-monster-list',
  templateUrl: './individual-monster-list.component.html',
  styleUrls: ['./individual-monster-list.component.css']
})
export class IndividualMonsterListComponent implements OnInit {

  public MonsterInformation: ListComponent["Monster"];

  constructor() {
    this.MonsterInformation
  }

  ngOnInit(): void {
  }

  public showMonster(name: string): void {
    console.log({name})
    // alert(`Entrada seleccionada: ${name}.`);
  }

}
