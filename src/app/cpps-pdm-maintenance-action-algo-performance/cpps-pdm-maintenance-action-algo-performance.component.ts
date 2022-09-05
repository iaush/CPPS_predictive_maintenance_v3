import { Component, OnInit } from '@angular/core';
import { chartConfig } from '@dis/settings/chart.config';
import { SeriesLabels, SeriesVisualArgs } from "@progress/kendo-angular-charts";
import { groupBy, GroupResult, filterBy, orderBy } from "@progress/kendo-data-query";
import { SelectEvent } from "@progress/kendo-angular-layout";
import { RowClassArgs } from "@progress/kendo-angular-grid";
import {  ViewEncapsulation, } from '@angular/core';

interface Sample{
  interval: number;
  algo: string;
  value: number;
  performance: number;
  action: string;
  paper_ref: string;
  field_color: string;
  dataset: string;
  dataset_pos: number;
  value_pos: number;
  visible: boolean;
  id: number;
}



@Component({
  selector: 'app-cpps-pdm-maintenance-action-algo-performance',
  templateUrl: './cpps-pdm-maintenance-action-algo-performance.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./cpps-pdm-maintenance-action-algo-performance.component.scss']
})
export class CppsPdmMaintenanceActionAlgoPerformanceComponent implements OnInit {



  scrollMode = "none";

  chartConfig = chartConfig;

  public err1 = false;
  public err2 = false;
  public err3 = false;
  public err4 = false;
  public err5 = false;

  glow0 = true;
  glow1 = false;
  glow2 = false;
  glow3 = false;
  glow4 = false;
  glow5 = false;

  err_glow=[this.glow0, this.glow1,this.glow2,this.glow3,this.glow4,this.glow5]

  public checked_model_factory = true;
  public checked_mec_tech = true;

  public checked_cpps_3_3 = true;
  public checked_ppo_lstm = true;
  public checked_ddqn_per = true;
  

  public seriesLabels: SeriesLabels = {
    visible: true, // Note that visible defaults to false
    padding: 3,
    font: "bold 16px Arial, sans-serif",
  };

  public series_maintenance: GroupResult[];


  public series_categories_barchart_mf_str = 'Model Factory Dataset';
  public series_categories_barchart_industry_str = 'Industry Dataset (MedTech)';
  public series_categories_barchart: string[] = [
    this.series_categories_barchart_mf_str, 
    this.series_categories_barchart_industry_str
  ];
  public series_categories_barchart_mf_pos = 0;
  public series_categories_barchart_industry_pos = 1;


  public barchart_color_cpps_3_3 = "#78d237";
  public barchart_color_ppo_lstm = "#ff6358";
  public barchart_color_ddqn_per = "#ffd246";
  public barchart_color: string[] = [
    this.barchart_color_cpps_3_3,
    this.barchart_color_ppo_lstm,
    this.barchart_color_ddqn_per
  ];

  public seriesColors: string[] = this.barchart_color;


  public plot_data_barchart_maintenance: Sample[] = [];
  public master_data_barchart_maintenance: Sample[] = [
    {
      interval: 1,
      algo: "CPPS WP 3.3",
      value: 8,
      action: "Act 4 ➜ Act 1 ➜ \n Act 4 ➜ Act 4 ➜ \n Act 2 ➜ Act 4",
      paper_ref: "CPPS WP 3.3",
      field_color: this.barchart_color_cpps_3_3,
      performance: 10,
      dataset: "model_factory",
      dataset_pos: 1,
      value_pos: 1,
      visible: true,
      id: 1
    },
    {
      interval: 2,
      algo: "PPO-LSTM [1]",
      value: 17,
      action: "Act 1 ➜ Act 4 ➜ \n Act 4 ➜ Act 3 ➜ \n Act 4 ➜ Act 4",
      paper_ref: "[1] Wenbo, Wang, et al. 'Predictive Maintenance Model for IIoT-based Manufacturing: A Transferable Deep Reinforcement Learning Approach.' IEEE Internet of Things Journal (2022).",
      field_color: this.barchart_color_ppo_lstm,
      performance: 10,
      dataset: "model_factory",
      dataset_pos: 1,
      value_pos: 2,
      visible: true,
      id: 2
    },
    {
      interval: 3,
      algo: "DDQN + PER [2]",
      value: 15,
      action: "Act 3 ➜ Act 4 ➜ \n Act 4 ➜ Act 4 ➜ \n Act 4 ➜ Act 4",
      paper_ref: "[2] Dangut, Maren David, et al. 'Application of deep reinforcement learning for extremely rare failure prediction in aircraft maintenance.' Mechanical Systems and Signal Processing 171 (2022): 108873.",
      field_color: this.barchart_color_ddqn_per,
      performance: 10,
      dataset: "model_factory",
      dataset_pos: 1,
      value_pos: 3,
      visible: true,
      id: 3
    },
    {
      interval: 1,
      algo: "CPPS WP 3.3",
      value: 13,
      action: "Act 8 ➜ Act 8 ➜ \n Act 5 ➜ Act 8 ➜ \n Act 8 ➜ Act 6",
      paper_ref: "CPPS WP 3.3",
      field_color: this.barchart_color_cpps_3_3,
      performance: 10,
      dataset: "mec_tech",
      dataset_pos: 2,
      value_pos: 1,
      visible: true,
      id: 4
    },
    {
      interval: 2,
      algo: "PPO-LSTM [1]",
      value: 18,
      action: "Act 5 ➜ Act 8 ➜ \n Act 8 ➜ Act 7 ➜ \n Act 8 ➜ Act 8",
      paper_ref: "[1] Wenbo, Wang, et al. 'Predictive Maintenance Model for IIoT-based Manufacturing: A Transferable Deep Reinforcement Learning Approach.' IEEE Internet of Things Journal (2022).",
      field_color: this.barchart_color_ppo_lstm,
      performance: 10,
      dataset: "mec_tech",
      dataset_pos: 2,
      value_pos: 2,
      visible: true,
      id: 5
    },
    {
      interval: 3,
      algo: "DDQN + PER [2]",
      value: 16,
      action: "Act 8 ➜ Act 8 ➜ \n Act 7 ➜ Act 8 ➜ \n Act 8 ➜ Act 8",
      paper_ref: "[2] Dangut, Maren David, et al. 'Application of deep reinforcement learning for extremely rare failure prediction in aircraft maintenance.' Mechanical Systems and Signal Processing 171 (2022): 108873.",
      field_color: this.barchart_color_ddqn_per,
      performance: 10,
      dataset: "mec_tech",
      dataset_pos: 2,
      value_pos: 3,
      visible: true,
      id: 6
    },
  ];


  public maintenance_action_water_filter_json = [
    {
      actions: "Action 1",
      actions_description: "Reduce chilled water temp",
      error:"Water Filter error"
    },
    {
      actions: "Action 2",
      actions_description: "Increase supply pressure",
      error:"Water Filter error"
    },
    {
      actions: "Action 3",
      actions_description: "Service water valve",
      error:"Water Filter error"
    },
    {
      actions: "Action 4",
      actions_description: "No Maintenance Action",
      error:"Water Filter error"
    }
  ];

  public maintenance_seq_json = [
    {
      algo: "CPPS WP 3.3",
      actions: "Act4 → Act1 → Act4 → Act4 → Act2 → Act4",
      cost:"8"
    },
    {
      algo: "LSTM+PPO [1]",
      actions: "Act1 → Act4 → Act4 → Act3 → Act4 → Act4",
      cost:"17"
    },
    {
      algo: "DDQN+PPR [2]",
      actions: "Act3 → Act4 → Act4 → Act4 → Act4 → Act4",
      cost:"15"
    },
    
  ];

  public rowCallback = (context: RowClassArgs) => {
    if (context.dataItem.algo == "CPPS WP 3.3") {
      return { green: true };
    } 
  };

  constructor() { 
    this.plot_barchart();
  }

  ngOnInit(): void {
    this.plot_barchart();
  }


  public plot_barchart(): void {
    this.plot_data_barchart_maintenance = []; // clear chart
    this.series_categories_barchart = []; // clear series

    this.plot_data_barchart_maintenance= 
      this.master_data_barchart_maintenance.filter(
        o =>
          (o.algo ==='CPPS WP 3.3' && this.checked_cpps_3_3) ||
          (o.algo ==='PPO-LSTM [1]' && this.checked_ppo_lstm) ||
          (o.algo ==='DDQN + PER [2]' && this.checked_ddqn_per)
      );
    
    this.plot_data_barchart_maintenance= 
      this.plot_data_barchart_maintenance.filter(
        o =>
          (o.dataset ==='model_factory' && this.checked_model_factory) || 
          (o.dataset ==='mec_tech' && this.checked_mec_tech)
      );
    
    if(this.checked_model_factory)
      this.series_categories_barchart.push('Model Factory Dataset');
    if(this.checked_mec_tech)
      this.series_categories_barchart.push('Industry Dataset (MedTech)');

    this.plot_data_barchart_maintenance = 
        orderBy(this.plot_data_barchart_maintenance, [{ field: "dataset_pos", dir: "asc" }]);

    this.series_maintenance = groupBy(this.plot_data_barchart_maintenance, [{ field: "algo" }]) as GroupResult[];
    this.manipulate_series_color();

    console.log(this.plot_data_barchart_maintenance);
  }


  public contentString(content) {
    // return the formatted label as a string
    return content.dataItem.action ;
  }


  public load_barchart_color(test): void {
    //console.log(test);
    return test.dataItem.field_color;
  }


  public visible_barchart_color(test): void {
    //console.log(test);
    return test.dataItem.visible;
  }


  public toggle_algo_CPPS_3_3_dataset(): void {
    if(this.checked_cpps_3_3) {
      this.checked_cpps_3_3 = false; //must set the checkbox 1st before plot chart
      this.plot_barchart();
    } else {
      this.checked_cpps_3_3 = true;
      this.plot_barchart();
    }
  }

  public toggle_algo_ppo_lstm_dataset(): void {
    if(this.checked_ppo_lstm) {
      this.checked_ppo_lstm = false; //must set the checkbox 1st before plot chart
      this.plot_barchart();
    } else {
      this.checked_ppo_lstm = true;
      this.plot_barchart();
    }
  }

  public toggle_algo_ddqn_per_dataset(): void {
    if(this.checked_ddqn_per) {
      this.checked_ddqn_per = false; //must set the checkbox 1st before plot chart
      this.plot_barchart();
    } else {
      this.checked_ddqn_per = true;
      this.plot_barchart();
    }
  }

  public model_factory_dataset(): void {
    if(this.checked_model_factory) {
      this.checked_model_factory = false; //must set the checkbox 1st before plot chart
      this.plot_barchart();
    } else {
      this.checked_model_factory = true;
      this.plot_barchart();
    }
  }

  public industry_dataset(): void {
    if(this.checked_mec_tech) {
      this.checked_mec_tech = false; //must set the checkbox 1st before plot chart
      this.plot_barchart();
    } else {
      this.checked_mec_tech = true;
      this.plot_barchart();
    }
  }


  public manipulate_series_color()
  {
    this.seriesColors = [];

    if(this.checked_cpps_3_3)
      this.seriesColors = this.seriesColors.concat("#78d237");
    
    if(this.checked_ppo_lstm)
      this.seriesColors = this.seriesColors.concat("#ff6358");

    if(this.checked_ddqn_per )
      this.seriesColors = this.seriesColors.concat("#ffd246");
  }





  test(data) {
    
    console.log(data.dataItem);
    this.open('window');
  }

  public dialogOpened = false;
  public windowOpened = false;

  public close(component: string): void {
    this[component + 'Opened'] = false;
  }

  public open(component: string): void {
    this[component + 'Opened'] = true;
  }

  public action(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.dialogOpened = false;
  }

  onButtonClick1(){
    
    if(this.err1==false){
      this.err1=true
      this.err_glow.forEach(function(part, index, theArray) {
        theArray[index] = false;
      });
      this.err_glow[1]=true
  
    }
    else if(this.err1==true && this.err2==false){
      this.err2=true
      this.err_glow.forEach(function(part, index, theArray) {
        theArray[index] = false;
      });
      this.err_glow[2]=true
    }
    else if(this.err2==true && this.err3==false){
      this.err3=true
      this.err_glow.forEach(function(part, index, theArray) {
        theArray[index] = false;
      });
      this.err_glow[3]=true
    }
    else if(this.err3==true && this.err4==false){
      this.err4=true
      this.err_glow.forEach(function(part, index, theArray) {
        theArray[index] = false;
      });
      this.err_glow[4]=true
    }
    else if(this.err4==true && this.err5==false){
      this.err5=true
      this.err_glow.forEach(function(part, index, theArray) {
        theArray[index] = false;
      });
      this.err_glow[5]=true
    }
    else if(this.err5==true && this.err1==true){
      this.err1=false
      this.err2=false
      this.err3=false
      this.err4=false
      this.err5=false
      this.err_glow.forEach(function(part, index, theArray) {
        theArray[index] = false;
      });
      this.err_glow[0]=true

    }
}



}
