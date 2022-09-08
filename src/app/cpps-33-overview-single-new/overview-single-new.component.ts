import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpps-33-overview',
  templateUrl: './overview-single-new.component.html',
  styleUrls: ['./overview-single-new.component.scss']
})
export class OverviewSingleNewComponent implements OnInit {

  public current = 1;

  public steps = [
    { label: 'Raw Data', disabled: true  },
    { label: 'Prescriptive Maintenance algorithm', img: 'assets/img/object.png' },
    { label: 'Recommended actions', disabled: true  },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onCurrentChange($event): void {
    this.current = $event;
  }

  public opened = false;

  public close(): void {
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }

  public comparison_table = [
    {
      actions: "When to take actions",
      Pred  : "No" ,
      Pres:"Yes"
    },
    {
      actions: "What actions to take",
      Pred: "No",
      Pres:"Yes"
    }]

    public scroll='none'

}
