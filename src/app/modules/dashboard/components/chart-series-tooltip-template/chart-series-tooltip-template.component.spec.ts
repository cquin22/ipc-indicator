import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSeriesTooltipTemplateComponent } from './chart-series-tooltip-template.component';

describe('ChartSeriesTooltipTemplateComponent', () => {
  let component: ChartSeriesTooltipTemplateComponent;
  let fixture: ComponentFixture<ChartSeriesTooltipTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSeriesTooltipTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSeriesTooltipTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
