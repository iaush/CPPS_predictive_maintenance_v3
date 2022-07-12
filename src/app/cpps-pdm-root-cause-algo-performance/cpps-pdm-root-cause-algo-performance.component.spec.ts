import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CppsPdmRootCauseAlgoPerformanceComponent } from './cpps-pdm-root-cause-algo-performance.component';

describe('CppsPdmRootCauseAlgoPerformanceComponent', () => {
  let component: CppsPdmRootCauseAlgoPerformanceComponent;
  let fixture: ComponentFixture<CppsPdmRootCauseAlgoPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CppsPdmRootCauseAlgoPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CppsPdmRootCauseAlgoPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
