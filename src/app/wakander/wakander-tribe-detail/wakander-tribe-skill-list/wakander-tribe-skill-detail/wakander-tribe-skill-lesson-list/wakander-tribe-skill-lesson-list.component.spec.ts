import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakanderTribeSkillLessonListComponent } from './wakander-tribe-skill-lesson-list.component';

describe('WakanderTribeSkillLessonListComponent', () => {
  let component: WakanderTribeSkillLessonListComponent;
  let fixture: ComponentFixture<WakanderTribeSkillLessonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakanderTribeSkillLessonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakanderTribeSkillLessonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
