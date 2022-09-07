import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeNewComponent } from './outcome-new.component';

describe('OutcomeNewComponent', () => {
  let component: OutcomeNewComponent;
  let fixture: ComponentFixture<OutcomeNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutcomeNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
