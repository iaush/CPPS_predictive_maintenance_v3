import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CppsPdmConclusionComponent } from './cpps-pdm-conclusion.component';

describe('CppsPdmConclusionComponent', () => {
  let component: CppsPdmConclusionComponent;
  let fixture: ComponentFixture<CppsPdmConclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CppsPdmConclusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CppsPdmConclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
