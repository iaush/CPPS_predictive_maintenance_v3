import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CppsPdmMaintenanceActionAlgoComponent } from './cpps-pdm-maintenance-action-algo.component';

describe('CppsPdmMaintenanceActionAlgoComponent', () => {
  let component: CppsPdmMaintenanceActionAlgoComponent;
  let fixture: ComponentFixture<CppsPdmMaintenanceActionAlgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CppsPdmMaintenanceActionAlgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CppsPdmMaintenanceActionAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
