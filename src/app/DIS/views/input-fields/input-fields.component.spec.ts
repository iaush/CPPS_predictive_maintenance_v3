import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldsComponent } from './input-fields.component';
import {CustomDialogService} from '@dis/services/message/custom-dialog.service';
import {DialogContainerService, DialogService} from '@progress/kendo-angular-dialog';

describe('InputFieldsComponent', () => {
  let component: InputFieldsComponent;
  let fixture: ComponentFixture<InputFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFieldsComponent ],
      providers: [ CustomDialogService, DialogService, DialogContainerService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
