import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-new',
  templateUrl: './overview-new.component.html',
  styleUrls: ['./overview-new.component.scss']
})
export class OverviewNewComponent implements OnInit {
  // Define the current step
  public current = 0;
  // Define the steps
  public steps = [
    { label: 'Maintenance Root Cause Algorithm', img: '/assets/img/object.png' },
    { label: 'Optimal Maintenance Action Algorithm', img: '/assets/img/process_2.png'  },
  ];


  public processSteps = [
    { label: 'Machine Events', disabled: true  },
    { label: 'Root Cause Identification', img: '/assets/img/object.png', disabled: true  },
    { label: 'Identified Results', disabled: true  },
  ];


  public processStepsTwo = [
    { label: 'Identified Results', disabled: true  },
    { label: 'Offline Learning', img: '/assets/img/process_2.png', disabled: true  },
    { label: 'System Level Prescriptive Maintenance', img: '/assets/img/object.png', disabled: true  },
    { label: 'Identified Results', disabled: true  },
  ];


  constructor() { }

  ngOnInit(): void {
  }

  // update changes based on value emitted from overview-stepper
  onCurrentChange($event): void {
    this.current = $event;
  }
}
