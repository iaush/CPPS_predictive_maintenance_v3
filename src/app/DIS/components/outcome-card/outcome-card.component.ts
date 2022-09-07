import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-outcome-card',
  templateUrl: './outcome-card.component.html',
  styleUrls: ['./outcome-card.component.scss']
})
export class OutcomeCardComponent implements OnInit {


  @Input() image;
  @Input() improvementNumber;
  @Input() improvementDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
