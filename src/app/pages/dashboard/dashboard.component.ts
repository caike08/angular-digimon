import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { DigimonApiService } from '../../services/digimon-api/digimon-api.service';

import type { DigimonListType } from '../../types/digimon.type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  digimonApiSubscription: Subscription = new Subscription()
  digimonObservable: Observable<DigimonListType> = new Observable();
  digimonList: DigimonListType = []
  searchText: string = ''

  constructor(
    private digmonApiService: DigimonApiService
  ) {}

  async ngOnInit() {
    // assign digimon api service to observable
    this.digimonObservable = await this.digmonApiService.getDigimonList()

    // subscribe to observable & assign value to digimonList
    this.digimonApiSubscription = this.digimonObservable
      .subscribe((list: DigimonListType) => {
        this.digimonList = list
      })
  }

  ngOnDestroy() {
    // unsubscribe from observable
    this.digimonApiSubscription.unsubscribe()
  }
}
