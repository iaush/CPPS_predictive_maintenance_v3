import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomUiBlockerComponent } from './custom-ui-blocker.component';

describe('CustomUiBlockerComponent', () => {
  let component: CustomUiBlockerComponent;
  let fixture: ComponentFixture<CustomUiBlockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomUiBlockerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomUiBlockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
