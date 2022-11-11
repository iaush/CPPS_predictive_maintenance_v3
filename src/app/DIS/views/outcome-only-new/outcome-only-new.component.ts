import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outcome-only-new',
  templateUrl: './outcome-only-new.component.html',
  styleUrls: ['./outcome-only-new.component.scss']
})
export class OutcomeOnlyNewComponent implements OnInit {
  public scroll= 'none';
  comparison_table = [
    {
      theoretical  : {
        name: 'Single Objective',
        type: 'He et al, 2022',
        description: 'Scalability analysis on quadratic programming with decision variable uncertainty.'
      } ,
      academic: {
        name: 'Single-objective',
        type: 'Lim et al, 2021',
        description: 'Minimize holding, shortage and shipment cost under demand uncertainty'
      },
      industry: {
        name: 'Industry Problem 1',
        type: 'Packaging and Printing',
        description: 'Minimize expected cost including purchase, holding, trimming, and shipment over a planning horizon.'
      }
    },
    {
      theoretical  : {
        name: 'Multi Objective',
        type: 'Deb and Gupta, 2006',
        description: 'Analyse effect of sensitivity to uncertainty in bi-objective optimization with noisy decision variables.'
      } ,
      academic: {
        name: 'Multi Objective',
        type: 'Lim et al, 2021',
        description: 'Tri-objective optimization with continuous or discontinuous Pareto fronts under decision variable uncertainty.'
      },
      industry: {
        name: 'Industry Problem 1',
        type: 'Packaging and Printing',
        description: 'Simultaneous minimization of expected cost and cost variability over a planning horizon.'
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
