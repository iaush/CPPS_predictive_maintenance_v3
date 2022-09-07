import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-single-new',
  templateUrl: './overview-single-new.component.html',
  styleUrls: ['./overview-single-new.component.scss']
})
export class OverviewSingleNewComponent implements OnInit {

  public current = 1;

  public steps = [
    { label: 'Raw Data', disabled: true  },
    { label: 'Multi-Objective & Multi-Condition Optimization', img: '/assets/img/object.png' },
    { label: 'Outcome', disabled: true  },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onCurrentChange($event): void {
    this.current = $event;
  }
}
