import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CppsPdmIntroductionComponent } from './cpps-pdm-introduction.component';

describe('CppsPdmIntroductionComponent', () => {
  let component: CppsPdmIntroductionComponent;
  let fixture: ComponentFixture<CppsPdmIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CppsPdmIntroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CppsPdmIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
