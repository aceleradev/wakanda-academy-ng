import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakanderTribeSkillDetailComponent } from './wakander-tribe-skill-detail.component';

describe('WakanderTribeSkillDetailComponent', () => {
  let component: WakanderTribeSkillDetailComponent;
  let fixture: ComponentFixture<WakanderTribeSkillDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakanderTribeSkillDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakanderTribeSkillDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
