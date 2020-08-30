import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesempenhoComponent } from './desempenho.component';

describe('DesempenhoComponent', () => {
  let component: DesempenhoComponent;
  let fixture: ComponentFixture<DesempenhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesempenhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesempenhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
