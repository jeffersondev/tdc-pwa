import { TestBed, inject } from '@angular/core/testing';

import { TrilhasService } from './trilhas.service';

describe('TrilhasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrilhasService]
    });
  });

  it('should be created', inject([TrilhasService], (service: TrilhasService) => {
    expect(service).toBeTruthy();
  }));
});
