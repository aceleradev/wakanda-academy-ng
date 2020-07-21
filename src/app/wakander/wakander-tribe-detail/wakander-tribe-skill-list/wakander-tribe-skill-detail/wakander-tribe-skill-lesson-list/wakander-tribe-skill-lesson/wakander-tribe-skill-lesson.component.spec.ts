import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakanderTribeSkillLessonComponent } from './wakander-lesson.component';

describe('WakanderTribeSkillLessonComponent', () => {
  let component: WakanderTribeSkillLessonComponent;
  let fixture: ComponentFixture<WakanderTribeSkillLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakanderTribeSkillLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakanderTribeSkillLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
