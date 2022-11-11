import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-process-stepper',
  templateUrl: './process-stepper.component.html',
  styleUrls: ['./process-stepper.component.scss']
})
export class ProcessStepperComponent implements OnInit {

  @Input() steps;
  @Input() currentStep;


  constructor() { }

  ngOnInit(): void {
  }

  currentStepChange($event): void {
    // this.onCurrentChange.emit($event);
  }

}
