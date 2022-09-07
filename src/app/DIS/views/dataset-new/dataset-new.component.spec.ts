import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetNewComponent } from './dataset-new.component';

describe('DatasetNewComponent', () => {
  let component: DatasetNewComponent;
  let fixture: ComponentFixture<DatasetNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasetNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
