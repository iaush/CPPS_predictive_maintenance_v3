import { Component, OnInit } from '@angular/core';
import {MocksLocalService} from '@dis/services/mocks/mocks.service';

@Component({
  selector: 'app-dashboard-one',
  templateUrl: './dashboard-one.component.html',
  styleUrls: ['./dashboard-one.component.scss']
})
export class DashboardOneComponent implements OnInit {

  data: any = [];

  constructor(private mocksLocalService: MocksLocalService) { }

  ngOnInit(): void {
    this.data = [...this.mocksLocalService.getSampleDataForGrid(), ...this.mocksLocalService.getSampleDataForGrid()];
  }
}
