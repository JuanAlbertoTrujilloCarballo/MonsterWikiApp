import { Component, Input, OnInit } from '@angular/core';
import { MonsterEntree } from 'src/app/shared/interfaces/monster-entree';

@Component({
  selector: 'app-entree',
  templateUrl: './entree.component.html',
  styleUrls: ['./entree.component.css'],
})
export class EntreeComponent implements OnInit {

  @Input()
  public monsterEntree: MonsterEntree;
  constructor() {
    this.monsterEntree = {
      name: '',
      title: '',
      description: '',
      url: '',
    };
  }
  ngOnInit(): void {}
}
