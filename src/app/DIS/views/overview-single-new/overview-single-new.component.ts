import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-single-new',
  templateUrl: './overview-single-new.component.html',
  styleUrls: ['./overview-single-new.component.scss']
})
export class OverviewSingleNewComponent implements OnInit {


  public processSteps = [
    { label: 'Machine Events', disabled: true  },
    { label: 'Root Cause Identification', img: '/assets/img/object.png', disabled: true  },
    { label: 'Identified Results', disabled: true  },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
