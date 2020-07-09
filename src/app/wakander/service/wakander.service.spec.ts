import { TestBed, inject } from '@angular/core/testing';

import { WakanderService } from './wakander.service';

describe('WakanderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WakanderService]
    });
  });

  it('should be created', inject([WakanderService], (service: WakanderService) => {
    expect(service).toBeTruthy();
  }));
});
