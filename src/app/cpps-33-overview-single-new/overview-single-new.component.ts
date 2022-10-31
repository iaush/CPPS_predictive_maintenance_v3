import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpps-33-overview',
  templateUrl: './overview-single-new.component.html',
  styleUrls: ['./overview-single-new.component.scss']
})
export class OverviewSingleNewComponent implements OnInit {

  public current = 6;

  public steps = [
    { label: 'Incoming Failure', img: 'assets/img/icon-error-48.png' , disabled:true },
    { label: 'Root cause identification \n (CPPS WP3.1)', img: 'assets/img/icons8-workflow-64.png' , disabled:true },
    { label: 'Possible maintenance actions', img:'assets/img/icons8-numbered-list-48.png' , disabled:true },
    { label: 'Optimal action algorithm', img: 'assets/img/icons8-algorithm-64.png' , disabled:true },
    { label: 'Recommended \n prescriptive action', img: 'assets/img/suggestion.png', disabled:true },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onCurrentChange($event): void {
    this.current = $event;
  }

  public opened = false;

  public close(): void {
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }

   
  
   public comparison_table = [
    {
      actions: "When to undergo maintenance",
      Pred  : 'Yes',
      Pres:"Yes"
    },
    {
      actions: "Which maintenance actions to choose",
      Pred: "No",
      Pres:"Yes"
    },
    //{
    //  actions: "When to take specific maintenance action",
    //  Pred: "No",
    //  Pres:"Yes"
    //}
  ]

    public scroll='none'

}
