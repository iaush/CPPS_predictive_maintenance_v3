import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Results3DashboardComponent } from './results3-dashboard.component';

describe('Results3DashboardComponent', () => {
  let component: Results3DashboardComponent;
  let fixture: ComponentFixture<Results3DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Results3DashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Results3DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
