import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { DigimonApiService } from '../../services/digimon-api/digimon-api.service';
import type { DigimonType } from '../../types/digimon.type';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  digimonData: DigimonType = {
    name: '',
    img: '',
    level: ''
  }

  digimonObservable: Observable<DigimonType | undefined> = new Observable();

  constructor(
    private route: ActivatedRoute,
    private digimonApiService: DigimonApiService,
    private location: Location
  ){ }

  async ngOnInit(): Promise<void> {
    const name = String(this.route.snapshot.paramMap.get('name'));

    this.digimonObservable = await this.digimonApiService.getDigimonByName(name);
  }

  async getDigimonByName(name: string) {
    return await this.digimonApiService.getDigimonByName(name);
  }

  goBack(): void {
    this.location.back();
  }
}
