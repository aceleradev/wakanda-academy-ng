import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakandaTribeComponent } from './wakanda-tribe.component';

describe('WakandaTribeComponent', () => {
  let component: WakandaTribeComponent;
  let fixture: ComponentFixture<WakandaTribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakandaTribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakandaTribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
