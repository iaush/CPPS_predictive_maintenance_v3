import { Component, OnInit } from '@angular/core';
import { LegendLabelsContentArgs } from '@progress/kendo-angular-charts';
import { IntlService } from '@progress/kendo-angular-intl';
import { Results3DashboardService } from "./results3-dashboard.service";
import { LineStyle } from "@progress/kendo-angular-charts";
import { Observable, throwError } from "rxjs";
import { chartConfig } from '@dis/settings/chart.config';

@Component({
  selector: 'app-results3-dashboard',
  templateUrl: './results3-dashboard.component.html',
  styleUrls: ['./results3-dashboard.component.scss']
})
export class Results3DashboardComponent implements OnInit {

  scrollMode = "none";

  chartConfig = chartConfig;

  public chartDefaultV4Colors: string[] = [
    '#ff6358',
    '#ffd246',
    '#78d237',
    '#28b4c8',
    '#2d73f5',
    '#aa46be',
  ];

  public seriesColors: string[] = this.chartDefaultV4Colors;


  public maintenance_action_json = [
    {
      actions: "Action 1",
      actions_description: "Reduce chilled water temp"
    },
    {
      actions: "Action 1",
      actions_description: "Increase supply pressure"
    },
    {
      actions: "Action 3",
      actions_description: "Service water valve"
    },
    {
      actions: "Action 4",
      actions_description: "No immediate action"
    }
  ];

  

  public water_valve_checked = true;

  public master_dataset = [];

  public style: LineStyle = "normal";
  public line_chart_data_err1_position = 0;

  public line_chart_data = [
    {
      //algo_name: "DQN",
      //algo_name: "ERR_01",
      stats: []
    }
  ]

  constructor(
    private intl: IntlService,
    private results3DashboardService: Results3DashboardService
  ) { }

  ngOnInit(): void {

    this.results3DashboardService.get_csv_file("assets/datasets/14_06_22_Pdm_Demo_Data_v5.csv").subscribe(data => {
      this.master_dataset = data;

      this.load_err1_dataset();
    });

  }

  load_err1_dataset(): void {
    var selected_col = 
      this.master_dataset.map(
        (
          {
            lstm_pred_err1, 
            lstm_err1_act_a,
            lstm_err1_act_b,
            lstm_err1_act_c,
            ANN_result_act_a,
            ANN_result_act_b,
            ANN_result_act_c,
            Best_optimal,
            sec
          }
        ) => 
        (
          {
            lstm_pred_err1, 
            lstm_err1_act_a,
            lstm_err1_act_b,
            lstm_err1_act_c,
            ANN_result_act_a,
            ANN_result_act_b,
            ANN_result_act_c,
            Best_optimal,
            sec
          }
        )
      );

    console.log(selected_col);

    var resultArray =  selected_col.map(function(elm) {
      return { 
        sec: Number(elm["sec"]), 
        rul_a: Number(elm["lstm_err1_act_a"]),
        rul_b: Number(elm["lstm_err1_act_b"]), 
        rul_c: Number(elm["lstm_err1_act_c"]), 
        err_a: Number(elm["ANN_result_act_a"]),
        err_b: Number(elm["ANN_result_act_b"]), 
        err_c: Number(elm["ANN_result_act_c"]),
        best_optimal: elm["Best_optimal"],
        data_point: Number(elm["lstm_pred_err1"])
      };
    });

    this.line_chart_data[this.line_chart_data_err1_position].stats = [];
    this.line_chart_data[this.line_chart_data_err1_position].stats = resultArray;
  }

  labelContent(args: LegendLabelsContentArgs): string {
    return `${args.dataItem.category} years old: ${this.intl.formatNumber(
      args.dataItem.value,
      'p2'
    )}`;
  }

}
