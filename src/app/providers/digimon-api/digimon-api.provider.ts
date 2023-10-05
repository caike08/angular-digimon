import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { 
  timeout,
  catchError,
  retry,
  map
} from 'rxjs/operators';

import type { DigimonListType, DigimonType } from 'src/app/types/digimon.type';

const API_URL = 'https://digimon-api.vercel.app/api/digimon';

@Injectable()
export class DigimonApiProvider {
  private digimonList: DigimonListType = []

  constructor(private http: HttpClient) {}

  getDigimonList: () => Observable<DigimonListType> = () => {
    let observable: Observable<any>

    if (this.digimonList.length > 0) {
      observable = of(this.digimonList)
    } else {
      observable = this.http.get(API_URL)
    }

    return observable.pipe(
      map((result: DigimonListType) => {
        return this.digimonList = result
      }),
      retry(3),
      timeout(3000),
      catchError((error: Error) => {
        throw new Error('Something went wrong! Details: ' + error.message)
      })
    )
  }

  getDigimonByName: (name: string) => Observable<DigimonType | undefined> = (name: string) => {
    return of(this.digimonList.find(digimon => digimon.name === name))
  }
}
