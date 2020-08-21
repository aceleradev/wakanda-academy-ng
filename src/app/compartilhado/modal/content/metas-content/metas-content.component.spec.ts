import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasContentComponent } from './metas-content.component';

describe('MetasContentComponent', () => {
  let component: MetasContentComponent;
  let fixture: ComponentFixture<MetasContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetasContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetasContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
