import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakanderTribeDetailComponent } from './wakander-tribe-detail.component';

describe('WakanderTribeDetailComponent', () => {
  let component: WakanderTribeDetailComponent;
  let fixture: ComponentFixture<WakanderTribeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakanderTribeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakanderTribeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
