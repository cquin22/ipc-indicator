import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAuthenticateComponent } from './index-authenticate.component';

describe('IndexAuthenticateComponent', () => {
  let component: IndexAuthenticateComponent;
  let fixture: ComponentFixture<IndexAuthenticateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexAuthenticateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAuthenticateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
