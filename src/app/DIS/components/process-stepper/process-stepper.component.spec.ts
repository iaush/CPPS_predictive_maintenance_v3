import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessStepperComponent } from './process-stepper.component';

describe('ProcessStepperComponent', () => {
  let component: ProcessStepperComponent;
  let fixture: ComponentFixture<ProcessStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
