import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpps-pdm-datasets-algo',
  templateUrl: './cpps-pdm-datasets-algo.component.html',
  styleUrls: ['./cpps-pdm-datasets-algo.component.scss']
})
export class CppsPdmDatasetsAlgoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public opened = false;

  public close(): void {
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }
}
