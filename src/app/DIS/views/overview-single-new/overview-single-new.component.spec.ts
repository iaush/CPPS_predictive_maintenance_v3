import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewSingleNewComponent } from './overview-single-new.component';

describe('OverviewSingleNewComponent', () => {
  let component: OverviewSingleNewComponent;
  let fixture: ComponentFixture<OverviewSingleNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewSingleNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewSingleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
