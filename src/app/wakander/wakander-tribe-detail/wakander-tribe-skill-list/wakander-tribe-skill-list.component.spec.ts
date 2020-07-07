import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakanderTribeSkillListComponent } from './wakander-tribe-skill-list.component';

describe('WakanderTribeSkillListComponent', () => {
  let component: WakanderTribeSkillListComponent;
  let fixture: ComponentFixture<WakanderTribeSkillListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakanderTribeSkillListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakanderTribeSkillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
