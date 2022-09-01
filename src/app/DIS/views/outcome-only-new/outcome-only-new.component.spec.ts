import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeOnlyNewComponent } from './outcome-only-new.component';

describe('OutcomeOnlyNewComponent', () => {
  let component: OutcomeOnlyNewComponent;
  let fixture: ComponentFixture<OutcomeOnlyNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutcomeOnlyNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomeOnlyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
