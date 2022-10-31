import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cpps-outcome-data',
  templateUrl: './outcome-new.component.html',
  styleUrls: ['./outcome-new.component.scss']
})
export class OutcomeNewComponent implements OnInit {

  public scroll= 'none'
  public comparison_table = [
    {
      actions: "Predicts failure",
      modelFactory  : {
        name: 'Model Factory',
        type: 'Plastic Injection Moulding',
        description: 'Sensor readings of different parameters collected from a plastic injection moulding machine in SIMTech.',
      } ,
      industry: {
        name: 'MedTech Manufacturing',
        type: 'Manufacturing data collected from production line',
        description: 'Data from the MedTech production line collected over a one-year period like SCADA event data and maintenance logbook',
      }
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
