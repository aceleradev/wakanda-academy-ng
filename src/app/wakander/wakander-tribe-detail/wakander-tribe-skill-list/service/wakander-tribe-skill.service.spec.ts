import { TestBed, inject } from '@angular/core/testing';

import { WakanderTribeSkillService } from './wakander-tribe-skill.service';

describe('WakanderTribeSkillService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WakanderTribeSkillService]
    });
  });

  it('should be created', inject([WakanderTribeSkillService], (service: WakanderTribeSkillService) => {
    expect(service).toBeTruthy();
  }));
});
