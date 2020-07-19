import { TestBed, inject } from '@angular/core/testing';

import { StatusColorService } from './status-color.service';

describe('StatusColorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatusColorService]
    });
  });

  it('should be created', inject([StatusColorService], (service: StatusColorService) => {
    expect(service).toBeTruthy();
  }));
});
