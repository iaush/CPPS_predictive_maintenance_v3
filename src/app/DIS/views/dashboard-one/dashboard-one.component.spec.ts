import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOneComponent } from './dashboard-one.component';
import {MocksLocalService} from '@dis/services/mocks/mocks.service';

describe('DashboardOneComponent', () => {
  let component: DashboardOneComponent;
  let fixture: ComponentFixture<DashboardOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [MocksLocalService],
      declarations: [ DashboardOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
