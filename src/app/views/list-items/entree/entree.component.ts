import { Component, Input, OnInit } from '@angular/core';
import { ObjectEntree } from 'src/app/shared/interfaces/object-entree';

@Component({
  selector: 'app-entree',
  templateUrl: './entree.component.html',
  styleUrls: ['./entree.component.css'],
})
export class EntreeComponent implements OnInit {

  @Input()
  public objectEntree: ObjectEntree;
  constructor() {
    this.objectEntree = {
      name: '',
      description: '',
      url: '',
    };
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
