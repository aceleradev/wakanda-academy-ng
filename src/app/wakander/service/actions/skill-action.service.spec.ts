import { TestBed, inject } from '@angular/core/testing';

import { SkillActionService } from './skill-action.service';

describe('SkillActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillActionService]
    });
  });

  it('should be created', inject([SkillActionService], (service: SkillActionService) => {
    expect(service).toBeTruthy();
  }));
});
