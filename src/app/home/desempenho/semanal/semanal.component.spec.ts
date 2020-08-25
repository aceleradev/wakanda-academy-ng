import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanalComponent } from './semanal.component';

describe('SemanalComponent', () => {
  let component: SemanalComponent;
  let fixture: ComponentFixture<SemanalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
