import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValMessageComponent } from './val-message.component';

describe('ValMessageComponent', () => {
  let component: ValMessageComponent;
  let fixture: ComponentFixture<ValMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
