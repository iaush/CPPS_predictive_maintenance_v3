import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewStepperComponent } from './overview-stepper.component';

describe('OverviewStepperComponent', () => {
  let component: OverviewStepperComponent;
  let fixture: ComponentFixture<OverviewStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
