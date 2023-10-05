import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DigimonApiProvider } from '../../providers/digimon-api/digimon-api.provider';

import type { DigimonListType, DigimonType } from 'src/app/types/digimon.type';

// This marks the class as one that participates in the dependency injection system.
@Injectable({
  providedIn: 'root'
})
export class DigimonApiService {

  constructor(
    private digimonApiProvider: DigimonApiProvider
  ) { }

  getDigimonList: () => Observable<DigimonListType> = () => {
    return this.digimonApiProvider.getDigimonList()
  }

  getDigimonByName: (name: string) => Observable<DigimonType | undefined> = (name: string) => {
    return this.digimonApiProvider.getDigimonByName(name)
  }
}
