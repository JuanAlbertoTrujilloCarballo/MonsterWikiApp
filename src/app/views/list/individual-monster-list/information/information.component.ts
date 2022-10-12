import { Component, Input, OnInit } from '@angular/core';
import { MonsterEntree } from 'src/app/shared/interfaces/monster-entree';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  @Input()
  public informationMonsterEntree: MonsterEntree;
  constructor() {
    this.informationMonsterEntree = {
      name: '',
      title: '',
      description: '',
      url: '',
    };
  }

  ngOnInit(): void {
  }

}
