import { Component, OnInit } from '@angular/core';
import { chartConfig } from '@dis/settings/chart.config';
import { SeriesLabels, SeriesVisualArgs } from "@progress/kendo-angular-charts";
import { groupBy, GroupResult, filterBy, orderBy, FilterDescriptor } from "@progress/kendo-data-query";
import { SelectEvent } from "@progress/kendo-angular-layout";


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
  selector: 'app-cpps-pdm-root-cause-algo-performance',
  templateUrl: './cpps-pdm-root-cause-algo-performance.component.html',
  styleUrls: ['./cpps-pdm-root-cause-algo-performance.component.scss']
})
export class CppsPdmRootCauseAlgoPerformanceComponent implements OnInit {


  scrollMode = "none";
  public err1 = true
  public err2 = false

  chartConfig = chartConfig;


  public checked_model_factory = true;
  public checked_mec_tech = true;

  public checked_cpps_3_3 = true;
  public checked_hdb_scan = true;
  public checked_deep_cluster = true;

  public str_hdb_scan_ref = "Tran, Tat-Huy, Tuan-Dung Cao, and Thi-Thu-Huyen Tran. 'HDBSCAN: Evaluating the Performance of Hierarchical Clustering for Big Data.' Soft Computing: Biomedical and Related Applications. Springer, Cham, 2021. 273-283.";
  public str_deep_cluster_ref = "R. Murasaki and K. Matsushima, 'Automatic Pavement Type Recognition based on Mobile Deep Learning,' 2022 IEEE 4th Global Conference on Life Sciences and Technologies (LifeTech), 2022, pp. 370-374, doi: 10.1109/LifeTech53646.2022.9754920.";


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



  public barchart_color_cpps_3_3 = "#fed357";
  public barchart_color_hdb_scan = "#ff6358";
  public barchart_color_deep_clusters = "#78d237";
  public barchart_color: string[] = [
    this.barchart_color_cpps_3_3,
    this.barchart_color_hdb_scan,
    this.barchart_color_deep_clusters
  ];

  public seriesColors: string[] = this.barchart_color;

  public plot_data_barchart_maintenance: Sample[] = [];
  public master_data_barchart_maintenance: Sample[] = [
    {
      interval: 1,
      algo: "CPPS WP 3.3",
      value: 0.9633,
      action: "testing",
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
      algo: "HDBSCAN",
      value: 0.2572,
      action: "testing",
      paper_ref: this.str_hdb_scan_ref,
      field_color: this.barchart_color_hdb_scan,
      performance: 10,
      dataset: "model_factory",
      dataset_pos: 1,
      value_pos: 2,
      visible: true,
      id: 2
    },
    {
      interval: 3,
      algo: "DeepCluster",
      value: 0.8556,
      action: "testing",
      paper_ref: this.str_deep_cluster_ref,
      field_color: this.barchart_color_deep_clusters,
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
      value: 0.6639,
      action: "testing",
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
      algo: "HDBSCAN",
      value: 0.2872,
      action: "testing",
      paper_ref: this.str_hdb_scan_ref,
      field_color: this.barchart_color_hdb_scan,
      performance: 10,
      dataset: "mec_tech",
      dataset_pos: 2,
      value_pos: 2,
      visible: true,
      id: 5
    },
    {
      interval: 3,
      algo: "DeepCluster",
      value: 0.3367,
      action: "testing",
      paper_ref: this.str_deep_cluster_ref,
      field_color: this.barchart_color_deep_clusters,
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
      actions_description: "Reduce chilled water temperature by 10°C",
      error:"Water Filter error"
    },
    {
      actions: "Action 2",
      actions_description: "Increase chilled water supply pressure by 1 psi",
      error:"Water Filter error"
    },
    {
      actions: "Action 3",
      actions_description: "Service cooling water valve",
      error:"Water Filter error"
    },
    {
      actions: "Action 4",
      actions_description: "No immediate action",
      error:"Water Filter error"
    }
  ];



  public maintenance_action_heating_zone_json = [
    {
      actions: "Action 1`",
      actions_description: "Increase injection screw back pressure",
      error:"Heating zone error"
    },
    {
      actions: "Action 2`",
      actions_description: "Service heating zone heater",
      error:"Heating zone error"
    },
    {
      actions: "Action 3`",
      actions_description: "Service cooling water tower",
      error:"Heating zone error"
    },
    {
      actions: "Action 4`",
      actions_description: "No Maintenance Action",
      error:"Heating zone error"
    }
  ];



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
          (o.algo ==='HDBSCAN' && this.checked_hdb_scan) ||
          (o.algo ==='DeepCluster' && this.checked_deep_cluster)
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

  public toggle_algo_hdbscan_dataset(): void {
    if(this.checked_hdb_scan) {
      this.checked_hdb_scan = false; //must set the checkbox 1st before plot chart
      this.plot_barchart();
    } else {
      this.checked_hdb_scan = true;
      this.plot_barchart();
    }
  }

  public toggle_algo_deep_cluster_dataset(): void {
    if(this.checked_deep_cluster) {
      this.checked_deep_cluster = false; //must set the checkbox 1st before plot chart
      this.plot_barchart();
    } else {
      this.checked_deep_cluster = true;
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
      this.seriesColors = this.seriesColors.concat("#fed357");
    
    if(this.checked_hdb_scan)
      this.seriesColors = this.seriesColors.concat("#ff6358");

    if(this.checked_deep_cluster )
      this.seriesColors = this.seriesColors.concat("#78d237");
  }
  
  onButtonClick1(){
    this.err1 = !this.err1
    this.err2 = false
  }

  onButtonClick2(){
    this.err2 = !this.err2
    this.err1 = false
  }

  public opened = false;
  public algo_opened=false;
  public detail_opened=false;

  public close_info(): void {
    this.opened = false;
    this.algo_opened = false;
    this.detail_opened = false;
  }

  public open_info(): void {
    this.opened = true;
  }

  public algo_info(): void {
    this.algo_opened = true;
  }

  public detail_info(): void {
    this.detail_opened = true;
  }

  public algo_info_json = [
    {
      CPPS: "Proposed a new framework which integrates with domain expert knowledge with feature anomaly detection methods to best identify/classify root cause of maintenance. The F1 score for CPPS WP 3.3 algorithm is higher than the state-of-the-art algorithms.",
      HDBSCAN: "Hierarchical Density-Based Spatial Clustering of Applications with Noise (HDBSCAN) Performs DBSCAN (density-based clustering technique) over varying epsilon values and integrates the result to find a clustering that gives the best stability.",
      DEEPCLUSTER: "DeepCluster is a clustering method that jointly learns the parameters of a neural network and the cluster assignments of the resulting features. ",
      
    },
  
  ];
  public majorGridLines = {
    color: 'white',
    visible: true
    }
}
