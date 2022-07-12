import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CppsPdmRootCauseAlgoComponent } from './cpps-pdm-root-cause-algo.component';

describe('CppsPdmRootCauseAlgoComponent', () => {
  let component: CppsPdmRootCauseAlgoComponent;
  let fixture: ComponentFixture<CppsPdmRootCauseAlgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CppsPdmRootCauseAlgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CppsPdmRootCauseAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
