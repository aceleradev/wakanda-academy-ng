import { TestBed, inject } from '@angular/core/testing';

import { SkillLessonService } from './skill-lesson.service';

describe('SkillLessonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillLessonService]
    });
  });

  it('should be created', inject([SkillLessonService], (service: SkillLessonService) => {
    expect(service).toBeTruthy();
  }));
});
