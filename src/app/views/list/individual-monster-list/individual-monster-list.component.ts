import { Component, OnInit } from '@angular/core';
import { MonsterEntree } from 'src/app/shared/interfaces/monster-entree';

@Component({
  selector: 'app-individual-monster-list',
  templateUrl: './individual-monster-list.component.html',
  styleUrls: ['./individual-monster-list.component.css']
})
export class IndividualMonsterListComponent implements OnInit {

  public entryIndividualMonsterList: MonsterEntree[];

  constructor() {
    this.entryIndividualMonsterList = [
      {
        name: 'Rathalos',
        title: 'Rey de los cielos',
        description:
          'Terribles wyverns llamados "Reyes de los cielos". Junto con las Rathian, acechan amplios territorios cerca de sus nidos. Los Rathalos descienden sobre los invasores desde el cielo, atacando con veneno, garras y fuego.',
        url: 'https://i.pinimg.com/originals/40/86/87/40868765acc44ee8c87e27e6d9419081.png ',
      },
      {
        name: 'Tigrex',
        title: 'Wyvern rugidor',
        description:
          'Wyverns voladores cuyo primitivo origen parece obvio. De instinto agresivo, usan sus garras, mandíbulas y musculosas patas con gran ferocidad.Habitan una zona amplia y se han avistado incluso en Canal Helado.',
        url: 'https://i.pinimg.com/originals/a3/2c/ef/a32cefd67ab381619669606025fd2a86.png',
      },
      {
        name: 'Dalamadur',
        title: 'Dragón Serpiente Rey',
        description:
          'Un Dragón Anciano enorme, de un tamaño descomunal. La única mención de su existencia está solo en los cuentos, que dicen que puede doblegar la faz del mundo y aplastar montañas con un solo movimiento.',
        url: 'https://i.pinimg.com/originals/b6/f2/a0/b6f2a0aa3fe95d5c96a7cd6f383f26ae.png',
      },
    ];
  }

  ngOnInit(): void {
  }

}
