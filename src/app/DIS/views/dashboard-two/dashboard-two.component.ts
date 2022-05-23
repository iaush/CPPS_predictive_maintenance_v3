import { Component, OnInit } from '@angular/core';
import {LegendLabelsContentArgs} from '@progress/kendo-angular-charts';
import {IntlService} from '@progress/kendo-angular-intl';
import {chartConfig} from "@dis/settings/chart.config";


@Component({
  selector: 'app-dashboard-two',
  templateUrl: './dashboard-two.component.html',
  styleUrls: ['./dashboard-two.component.scss']
})
export class DashboardTwoComponent implements OnInit {

  chartConfig = chartConfig;

  public pieData: any[] = [
    { category: '0-14', value: 0.2545 },
    { category: '15-24', value: 0.1552 },
    { category: '25-54', value: 0.4059 },
    { category: '55-64', value: 0.0911 },
    { category: '65+', value: 0.0933 },
  ];
  public opened = false;

  public close(): void {
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }

  constructor(private intl: IntlService) { }

  ngOnInit(): void {
    this.labelContent = this.labelContent.bind(this);
  }

  labelContent(args: LegendLabelsContentArgs): string {
    return `${args.dataItem.category} years old: ${this.intl.formatNumber(
      args.dataItem.value,
      'p2'
    )}`;
  }

}
