import { TestBed } from '@angular/core/testing';

import { DigimonApiProvider } from './digimon-api.provider';

describe('DigimonApiProvider', () => {
  let service: DigimonApiProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigimonApiProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
