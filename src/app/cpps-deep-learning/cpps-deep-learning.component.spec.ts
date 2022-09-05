import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CppsDeepLearningComponent } from './cpps-deep-learning.component';

describe('CppsDeepLearningComponent', () => {
  let component: CppsDeepLearningComponent;
  let fixture: ComponentFixture<CppsDeepLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CppsDeepLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CppsDeepLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
