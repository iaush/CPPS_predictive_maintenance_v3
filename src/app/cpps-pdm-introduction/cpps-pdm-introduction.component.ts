import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpps-pdm-introduction',
  templateUrl: './cpps-pdm-introduction.component.html',
  styleUrls: ['./cpps-pdm-introduction.component.scss']
})
export class CppsPdmIntroductionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public scroll='none'
  public comparison_table = [
    {
      actions: "When to take actions",
      Pred  : "No" ,
      Pres:"Yes"
    },
    {
      actions: "What actions to take",
      Pred: "No",
      Pres:"Yes"
    }]

}
