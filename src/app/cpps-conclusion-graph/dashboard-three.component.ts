import {Component, OnInit, ViewChild} from '@angular/core';
import {DataBindingDirective} from '@progress/kendo-angular-grid';
import {employees} from '@dis/services/mocks/sampleDataForGrid';
import { process } from '@progress/kendo-data-query';
import {chartConfig} from '@dis/settings/chart.config';

@Component({
  selector: 'app-dashboard-three',
  templateUrl: './dashboard-three.component.html',
  styleUrls: ['./dashboard-three.component.scss']
})
export class ConclusiongraphComponent implements OnInit {

  chartConfig = chartConfig;
  constructor() { }

  public weatherData = [
    { month: 'January', min: 0.5, max: 0.65 },
    { month: 'February', min:  0.5, max: 0.65 },
    { month: 'March', min:  0.5, max: 0.65 },
    { month: 'April', min:  0.5, max: 0.65 },
    { month: 'May', min:  0.5, max: 0.65 },
    { month: 'June', min:  0.6, max: 0.75 },
    { month: 'July', min:  0.7, max: 0.85 },
    { month: 'August', min:  0.5, max: 0.65 },
    { month: 'September', min:  0.5, max: 0.65 },
    { month: 'October', min:  0.5, max: 0.65 },
    { month: 'November', min:  0.5, max: 0.65 },
    { month: 'December', min:  0.5, max: 0.65 }
  ];



  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  public gridData: any[] = employees;
  public gridView: any[];

  public mySelection: string[] = [];

  labelContent(e: any): string {
    return e.category;
  }



  public onFilter(inputValue: string): void {

    this.gridView = process(this.gridData, {
      filter: {
        logic: 'or',
        filters: [
          {
            field: 'full_name',
            operator: 'contains',
            value: inputValue,
          },
          {
            field: 'job_title',
            operator: 'contains',
            value: inputValue,
          },
          {
            field: 'budget',
            operator: 'contains',
            value: inputValue,
          },
          {
            field: 'phone',
            operator: 'contains',
            value: inputValue,
          },
          {
            field: 'address',
            operator: 'contains',
            value: inputValue,
          },
        ],
      },
    }).data;

    this.dataBinding.skip = 0;
  }

  // private photoURL(dataItem: any): string {
  //   const code: string = dataItem.img_id + dataItem.gender;
  //   // const image: any = images;
  //
  //   return image[code];
  // }
  //
  // private flagURL(dataItem: any): string {
  //   const code: string = dataItem.country;
  //   // const image: any = images;
  //
  //   return image[code];
  // }

  ngOnInit(): void {
    this.gridView = this.gridData;
  }

  public labelContentFrom(e): string {
    return `${ e.value.from }`;
  }

  public labelContentTo(e): string {
    return `${ e.value.to } `;
  }
}
