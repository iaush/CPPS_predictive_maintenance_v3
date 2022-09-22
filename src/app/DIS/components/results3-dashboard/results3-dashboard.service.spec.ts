import { TestBed } from '@angular/core/testing';

import { Results3DashboardService } from './results3-dashboard.service';

describe('Results3DashboardService', () => {
  let service: Results3DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Results3DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
