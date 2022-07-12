import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CppsPdmMaintenanceActionAlgoPerformanceComponent } from './cpps-pdm-maintenance-action-algo-performance.component';

describe('CppsPdmMaintenanceActionAlgoPerformanceComponent', () => {
  let component: CppsPdmMaintenanceActionAlgoPerformanceComponent;
  let fixture: ComponentFixture<CppsPdmMaintenanceActionAlgoPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CppsPdmMaintenanceActionAlgoPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CppsPdmMaintenanceActionAlgoPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
