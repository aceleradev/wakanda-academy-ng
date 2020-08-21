import { TestBed, inject } from '@angular/core/testing';

import { MetasService } from './metas.service';

describe('MetasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetasService]
    });
  });

  it('should be created', inject([MetasService], (service: MetasService) => {
    expect(service).toBeTruthy();
  }));
});
