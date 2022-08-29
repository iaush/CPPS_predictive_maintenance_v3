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
      actions: "Predicts failure",
      Pred  : "Yes" ,
      Pres:"Yes"
    },
    {
      actions: "Recommends action to take",
      Pred: "No",
      Pres:"Yes"
    }]

}
