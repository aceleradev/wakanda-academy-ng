import { TestBed, inject } from '@angular/core/testing';

import { WakandaTribeslistService } from './wakanda-tribeslist.service';

describe('WakandaTribeslistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WakandaTribeslistService]
    });
  });

  it('should be created', inject([WakandaTribeslistService], (service: WakandaTribeslistService) => {
    expect(service).toBeTruthy();
  }));
});
