import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimtechLabelComponent } from './simtech-label.component';

describe('SimtechLabelComponent', () => {
  let component: SimtechLabelComponent;
  let fixture: ComponentFixture<SimtechLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimtechLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimtechLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
