import { Component, Input, OnInit } from '@angular/core';
import { ObjectEntree } from 'src/app/shared/interfaces/object-entree';

@Component({
  selector: 'app-object-entree',
  templateUrl: './object-entree.component.html',
  styleUrls: ['./object-entree.component.css'],
})
export class ObjectEntreeComponent implements OnInit {
  @Input()
  public objectEntree: ObjectEntree;
  constructor() {
    this.objectEntree = {
      name: '',
      description: '',
      url: '',
    };
  }

  ngOnInit(): void {}
}
