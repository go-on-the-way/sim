import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartLineComponent } from './echart-line.component';

describe('EchartLineComponent', () => {
  let component: EchartLineComponent;
  let fixture: ComponentFixture<EchartLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
