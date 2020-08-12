import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasComponent } from './metas.component';

describe('MetasComponent', () => {
  let component: MetasComponent;
  let fixture: ComponentFixture<MetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
