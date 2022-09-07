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
        description: 'Model factory dataset. Sensor readings about different machine parameters are collected during the production process from a plastic injection molding machine in operation at the model factory in SIMTech.',
      } ,
      industry: {
        name: 'MedTech Manufacturing',
        type: 'Large-scale Real World Data',
        description: 'Industry dataset from a MedTech company. Data from the manufacturing production line is collected over a one-year period which includes information like SCADA data on warnings and maintenance logbook with different maintenance strategies are recorded',
      }
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
