import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outcome-new',
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
        description: 'Sensor readings about different machine parameters that are collected during the production process.',
      } ,
      industry: {
        name: 'Manufacturing',
        type: 'Large-scale Real World Data',
        description: 'Data from production line, which includes information like SCADA data on warnings and maintenance logbook records with different strategies.',
      }
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
