import { Component, Input } from '@angular/core';

import type { DigimonListType } from 'src/app/types/digimon.type';

@Component({
  selector: 'app-digimon-list',
  templateUrl: './digimon-list.component.html',
  styleUrls: ['./digimon-list.component.scss']
})
export class DigimonListComponent {
  @Input() digimonList: DigimonListType = [];
  @Input() searchText: string = '';
}
