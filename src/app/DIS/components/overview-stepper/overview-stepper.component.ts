import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-overview-stepper',
  templateUrl: './overview-stepper.component.html',
  styleUrls: ['./overview-stepper.component.scss']
})
export class OverviewStepperComponent implements OnInit {

  @Input() steps;
  @Input() currentStep;
  @Output() onCurrentChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  currentStepChange($event): void {
    this.onCurrentChange.emit($event);
  }

}
