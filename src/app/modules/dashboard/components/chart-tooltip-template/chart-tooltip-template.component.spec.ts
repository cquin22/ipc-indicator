import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTooltipTemplateComponent } from './chart-tooltip-template.component';

describe('ChartTooltipTemplateComponent', () => {
  let component: ChartTooltipTemplateComponent;
  let fixture: ComponentFixture<ChartTooltipTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTooltipTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTooltipTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
