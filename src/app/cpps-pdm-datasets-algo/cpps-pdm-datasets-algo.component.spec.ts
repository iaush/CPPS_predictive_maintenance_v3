import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CppsPdmDatasetsAlgoComponent } from './cpps-pdm-datasets-algo.component';

describe('CppsPdmDatasetsAlgoComponent', () => {
  let component: CppsPdmDatasetsAlgoComponent;
  let fixture: ComponentFixture<CppsPdmDatasetsAlgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CppsPdmDatasetsAlgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CppsPdmDatasetsAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
