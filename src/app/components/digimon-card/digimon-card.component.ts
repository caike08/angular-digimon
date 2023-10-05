import { Component, Input } from '@angular/core';

import { DigimonType } from 'src/app/types/digimon.type';

@Component({
  selector: 'app-digimon-card',
  templateUrl: './digimon-card.component.html',
  styleUrls: ['./digimon-card.component.scss']
})
export class DigimonCardComponent {
  @Input() digimon: DigimonType = {
    name: '',
    img: '',
    level: ''
  }
}
