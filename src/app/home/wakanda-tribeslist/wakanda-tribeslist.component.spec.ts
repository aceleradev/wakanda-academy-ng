import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakandaTribeslistComponent } from './wakanda-tribeslist.component';

describe('WakandaTribeslistComponent', () => {
  let component: WakandaTribeslistComponent;
  let fixture: ComponentFixture<WakandaTribeslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakandaTribeslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakandaTribeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
