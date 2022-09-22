import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpps-33-overview',
  templateUrl: './overview-single-new.component.html',
  styleUrls: ['./overview-single-new.component.scss']
})
export class OverviewSingleNewComponent implements OnInit {

  public current = 6;

  public steps = [
    { label: 'Incoming Failure', img: 'assets/img/error_icon.png'  },
    { label: 'Root cause identification (Algorithm 1)', img: 'assets/img/classfication_icon.png' },
    { label: 'Possible maintenance actions', img:'assets/img/list_icon.png' },
    { label: 'Optimal action algorithm (Algorithm 2)', img: 'assets/img/object.png' },
    { label: 'Recommended sequence of actions', img: 'assets/img/suggestion.png'},
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
