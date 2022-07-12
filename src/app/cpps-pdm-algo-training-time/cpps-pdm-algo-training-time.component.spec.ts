import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CppsPdmAlgoTrainingTimeComponent } from './cpps-pdm-algo-training-time.component';

describe('CppsPdmAlgoTrainingTimeComponent', () => {
  let component: CppsPdmAlgoTrainingTimeComponent;
  let fixture: ComponentFixture<CppsPdmAlgoTrainingTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CppsPdmAlgoTrainingTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CppsPdmAlgoTrainingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
